from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# , render_template
# from  import Migrate


app = Flask (__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/olympics"
db = SQLAlchemy(app)
# migrate = Migrate(app,db)

class Countries(db.Model):
    __tablename__ = "noc data"

    noc = db.Column(db.Varchar, primary_key=True)
    country = db.Column(db.String())

    def __init__(self,noc,country):
        self.noc = noc
        self.country = country
    
    def __repr__(self):
        return f"<Car {self.country}>"


@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"<a href='/api/v1.0/billingcountry'>billingcountry</a><br/>"
        f"<a href='/api/v1.0/countrytotal'>countrytotal</a><br/>"
        f"<a href='/api/v1.0/postcodes/USA'>postcodes/USA</a><br/>"
        f"<a href='/api/v1.0/countryitemtotals/USA'>countryitemtotals/USA</a><br/>"
        f"<a href='/api/v1.0/postcodeitemtotals/USA'>postcodeitemtotals/USA</a><br/>"
    )



# @app.route('/')
# def index():
#     return render_template('testConnect.html')

if '__name__' == '__main__':
    app.run()