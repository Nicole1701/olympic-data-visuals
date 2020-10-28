############################################
################## Import ##################
############################################

import os
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
app = Flask(__name__)


############################################
######### SQL DATABASE AND MODELS ##########
############################################
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/olympic"
db = SQLAlchemy(app)
migrate = Migrate(app, db)

db = SQLAlchemy(app)
Migrate(app, db)


class athletes(db.Model):
    __tablename__ = 'athletes_data'

    id = db.Column(db.Integer, primary_key=True)
    sex = db.Column(db.String())
    country = db.Column(db.String())

    def __init__(self, sex, country):
        self.sex = sex
        self.country = country

    def __repr__(self):
        return f"<Country {self.country}>"

############################################
################## Routes ##################
############################################

################## Home ##################


@app.route('/')
def index():
    return render_template('index.html')


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
@app.route('/athletesdata.html')
def data():
    return render_template('athletesdata.html')


if __name__ == '__main__':
    app.run(debug=True)
