from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
# import os


app = Flask (__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost/olympics"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'FALSE'



# class Countries(db.Model):
#     __tablename__ = "noc_data"

#     noc = db.Column(db.String, primary_key=True)
#     country = db.Column(db.String(), nullable = False)

#     def __init__(self,noc,country):
#         self.noc = noc
#         self.country = country

# class AthleteData(db.Model):
#     __tablename__ = "athlete_data"

#     noc = db.Column(db.String)
#     country = db.Column(db.String(), nullable = False)
#     id = db.Column(db.Integer(), primary_key=True,nullable = False)
#     name = db.Column(db.String, nullable = False)
#     sex = db.Column(db.String)
#     age = db.Column(db.Integer)
#     year = db.Column(db.Integer, primary_key=True)
#     season = db.Column(db.String)
#     city = db.Column(db.String)
#     sport = db.Column(db.String)
#     event = db.Column(db.String, primary_key= True)
#     medal = db.Column(db.String)

#     def __init__(self,noc,country, id, name, sex,age, year, season, city, sport, event, medal):
#         self.noc = noc
#         self.country = country
#         self.id = id
#         self.name = name
#         self.sex = sex
#         self.age = age
#         self.year = year
#         self.season = season
#         self.city = city
#         self.sport = sport
#         self.event = event
#         self.medal = medal
    
    # def __repr__(self):
    #     return f"<The country is: {self.country}>"

@app.route("/")
def welcome():
    
    "List all available api routes."
    return (
            f"Available Routes:<br/>"
            f"<a href='/api/v1.0/countries'>countries</a><br/>"

        )


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

@app.route("/athleteData", methods=['GET'])
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

if __name__ == '__main__':
    app.run(debug=True)