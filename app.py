############################################
################## Import ##################
############################################

import os
from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import create_engine, func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
import numpy as np
from config import POSTGRES_LINK

############################################
######### SQL DATABASE AND MODELS ##########
############################################

#################################################
# Database Setup
#################################################
engine = create_engine(POSTGRES_LINK)


# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to the tables
Countries = Base.classes.noc_data
AthleteData = Base.classes.athlete_data

app = Flask(__name__)

################## Routes ##################
############################################

################## Home ##################


@app.route("/")
def index():
    return render_template('index.html')

################## Gender ##################
@app.route('/gender')
def gender():
    return render_template('gender.html')

@app.route('/api/gender')
def gendercount():
    session = Session(engine)
    
    results = session.query(AthleteData.year, AthleteData.season, AthleteData.sex, func.count(AthleteData.id)).\
        distinct(AthleteData.year, AthleteData.season, AthleteData.sex, AthleteData.id).\
        order_by(AthleteData.year).\
        group_by(AthleteData.year, AthleteData.season, AthleteData.sex, AthleteData.id).all()
    session.close()

    all_results = []
    for item in results:
        item_dict = {}
        item_dict["year"] = item[0]
        item_dict["season"] = item[1]
        item_dict["sex"] = item[2]
        item_dict["count"] = item[3]
        all_results.append(item_dict)

    return jsonify(all_results)


@app.route('/api/gender/country')
def gendercountry():
    session = Session(engine)
    
    results = session.query(AthleteData.year, AthleteData.season, AthleteData.country,AthleteData.noc, AthleteData.sex, func.count(AthleteData.id)).\
        distinct(AthleteData.year, AthleteData.season, AthleteData.country, AthleteData.noc, AthleteData.sex, AthleteData.id).\
        order_by(AthleteData.year, AthleteData.noc).\
        group_by(AthleteData.year, AthleteData.season, AthleteData.country, AthleteData.noc, AthleteData.sex, AthleteData.id).all()
    session.close()

    all_results = []
    for item in results:
        item_dict = {}
        item_dict["year"] = item[0]
        item_dict["season"] = item[1]
        item_dict["country"] = item[2]
        item_dict["noc"] = item[3]
        item_dict["sex"] = item[4]
        item_dict["count"] = item[5]
        all_results.append(item_dict)

    return jsonify(all_results)


################## Medals ##################
@app.route('/medals')
def medals():
    return render_template('medals.html')


@app.route('/api/medals')
def medalsapi():
    session = Session(engine)

    results = session.query(AthleteData.country, AthleteData.year, func.count(AthleteData.medal)).filter(AthleteData.medal != 'None').group_by(AthleteData.country, AthleteData.year).all()

    session.close()

   # Create a dictionary from the row data and append to a list of all_results
    all_results = []
    for item in results:
        item_dict = {}
        item_dict["country"] = item[0]
        item_dict["year"] = item[1]
        item_dict["medal"] = item[2]
        all_results.append(item_dict)


    return jsonify(all_results)


################## Sports ##################

@app.route('/sports')
def sports():
    return render_template('sports.html')


@app.route('/api/sports')
def sportsapi():
    session = Session(engine)

    results = session.query(AthleteData.year, AthleteData.season, func.count(AthleteData.sport.distinct())).\
        distinct(AthleteData.year, AthleteData.season).\
        filter(AthleteData.season != '',AthleteData.sport != '').\
        group_by(AthleteData.year, AthleteData.season).\
        order_by(AthleteData.year).all()

    session.close()

   # Create a dictionary from the row data and append to a list of all_results
    all_results = []
    for item in results:
        item_dict = {}
        item_dict["year"] = item[0]
        item_dict["season"] = item[1]
        item_dict["sport"] = item[2]
        all_results.append(item_dict)


    return jsonify(all_results)


################## Data ##################

@app.route("/athletesdata")
def athletesdata():
    return render_template('athletesdata.html')


@app.route("/api/athletesdata")
def athletesDataApi():
    session = Session(engine)

    results = session.query(AthleteData).all()

    session.close()

   # Create a dictionary from the row data and append to a list of all_results
    all_results = [
            {
                "noc" : a.noc,
                "country" : a.country,
                "id" : a.id,
                "name" : a.name,
                "sex" : a.sex,
                "age" : a.age,
                "year" : a.year,
                "season" : a.season,
                "city" : a.city,
                "sport" : a.sport,
                "event" : a.event,
                "medal" : a.medal
            } for a in results]

    return jsonify(all_results)


if __name__ == '__main__':
    app.run(debug=True)