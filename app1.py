############################################
################## Import ##################
############################################

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
app1 = Flask(__name__)


############################################
######### SQL DATABASE AND MODELS ##########
############################################
app1 = Flask(__name__)
app1.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/olympic"
db = SQLAlchemy(app1)
migrate = Migrate(app1, db)

db = SQLAlchemy(app1)
Migrate(app1, db)


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


@app1.route('/')
def index():
    return render_template('index.html')


################## Gender ##################
@app1.route('/gender.html')
def gender():
    return render_template('gender.html')


################## Medals ##################
@app1.route('/medals.html')
def medals():
    return render_template('medals.html')


################## Sports ##################
@app1.route('/sports.html')
def sports():
    return render_template('sports.html')


################## Data ##################
@app1.route('/athletesdata.html')
def data():
    return render_template('athletesdata.html')


if __name__ == '__main__':
    app1.run(debug=True)
