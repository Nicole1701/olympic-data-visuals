############################################
################## Import ##################
############################################

import os
from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import create_engine

############################################
######### SQL DATABASE AND MODELS ##########
############################################
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/olympics"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'FALSE'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

############################################
class Countries(db.Model):
    __tablename__ = "noc_data"

    noc = db.Column(db.String, primary_key=True)
    country = db.Column(db.String(), nullable = False)

    def __init__(self,noc,country):
        self.noc = noc
        self.country = country


################## Routes ##################
############################################

################## Home ##################


@app.route('/')
def index():
    return render_template('index.html')

# Countries#
@app.route("/countries", methods=['GET'])
def getCountries():
    allCountries = Countries.query.all()
    results = [
            {
                "noc" : c.noc,
                "country": c.country
            } for c in allCountries]

    # return jsonify(results)
    return {"count": len(results), "countries":results}



################## Gender ##################
@app.route('/gender.html')
def gender():
    return render_template('gender.html')


################## Medals ##################
@app.route('/medals.html')
def medals():
    return render_template('medals.html')


################## Sports ##################
@app.route('/sports.html')
def sports():
    return render_template('sports.html')


################## Data ##################
@app.route("/athletesdata.html", methods=['GET'])
def getAthleteData():
    allAthleteData = AthleteData.query.all()
    results = [
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
            } for a in allAthleteData]

    # return jsonify(results)
    return {"count": len(results), "athlete":results}



def data():
    return render_template('athletesdata.html')


if __name__ == '__main__':
    app.run(debug=True)
