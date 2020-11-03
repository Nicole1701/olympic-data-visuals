# A Look At The Olympics (1896-2016)

![Olympic Rings](static/images/olympic_rings.png)

# Project Contributors (The Lofty Flying Llamas):

- [Kristy Anderson](https://github.com/kristyski)

- [Tony Cipolle](https://github.com/ajcipolle)

- [Nicole Cook](https://github.com/Nicole1701)

- [Debby Pulido](https://github.com/debbyps)

# Before You Begin

### Set Up Environment

1.  Clone this repo to you machine
2.  Open GitBash/ZSH:
    - Create a new environment using the following command:
      `conda create --name <env> python=3.6`
    - Navigate to the cloned folder with the requirements.txt folder and type:
      `pip install -r requirements.txt`
3.  Once everything is installed, use your editor of choice and activate your environment with either:
    `conda activate <env>` or `source activate <env>`

### Database

1.  Open pgAdmin4 and create a new database
2.  Load the schema file: [db_schema](static/data/db_schema.sql)
3.  Then load the tables in this order:
    - [noc_data](static/data/noc_data_clean.csv)
    - [athelete_data](static/data/merged_noc_athlete_data_clean.csv)

### API Keys/Passwords

1.  Open the [configEDIT.py](configEDIT.py):
    - Rename the file 'config.py'
    - Open file and replace the POSTGRES_LINK and insert your Postgres password and database name:
      `postgresql://postgres:[PASSWORD]]@localhost:5432/[DBNAME]`
    - Save the document and close
2.  Open the [configEDIT.js](static/js/configEDIT.js)
    - Navigate to the static -> js folder and rename the configEDIT.js file as config.js
    - Open the file and insert your [Mapbox](https://www.mapbox.com/) API key
    - Save the document and close

### Start App

1.  Run the app.py application and follow the link.

# Project Specifics

## Project Proposal

For our original project proposal, please go here: [Project Proposal](https://github.com/Nicole1701/olympic-data-visuals/tree/main/proposal)

## Data Sources

- **Main Data Source**: [120 Years of Olympic History](https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/home). This is a historical dataset on the modern Olympic Games, including all the Games from Athens 1896 to Rio 2016. Also includes a NOC (National Olympic Committee) dataset that will allow us to map each athlete to a country.

- **Lat/Long Coordinates by Country**: [Latitude and Longitude for Every Country and State](https://www.kaggle.com/paultimothymooney/latitude-and-longitude-for-every-country-and-state). This dataset will be used to get the lat/long coordinates of each country/city for map overlays.

## Data Cleaning

- The athlete data cleaned for duplicates
- The NOC data was used to add a country name to the file based on NOC code

### Considerations

- Analysis to be split out by Winter/Summer games.

- Athletes to be assigned a country based on their NOC code.
<hr>

## Project Challenges

Multiple challenges cropped up during this project:

- When looking at the total number of medals, our dataset includes everyone that took home a medal, including everyone who participated in a group sport. The official tallies only include one medal tally per sport, as the other way may weight countries who participate in more team sports more heavily. As there is no way to easy modify this in our data set, we decided to focus on the individuals who won per country. We compared our rankings with the official tallies, however, and saw that it produced little variation in the top 5 countries, so we felt this was an acceptable compromise.
- We initially ran into some issues with the Highcharts library. Most of the example code included static data and it was a challenge to get the charts to work with a JSON API call. Due to the limited time we had to finish this project, we decided to scale down some of the charts we initially wanted to include. Given more time, we are confident we could have adapted to most of the charts available in this library.
- We initially wanted to deploy our app to [Heroku](https://www.heroku.com/), but our data set was too large to qualify for the free account, so it was decided to just leave our site in the app.py file.

<hr>
 
## Analysis

From the 8th century B.C. to the 4th century A.D., the ancient Olympic Games were a time honored
tradition in ancient Greece. Every four years, the games were held on the north-western corner of the
Peloponnese in the honor of the god Zeus. These games have often been portrayed in movies, books and tv.

The modern Olympic Games started up in Athens, Greece in 1896 and continue to this day.
What started out as relatively small has grown into a massive undertaking and includes participation of
thousands of athletes from all over the world.

We decided to take a closer look at the data to see exactly how the modern Olympics has changed since
its somewhat humble beginnings. We wanted to see exactly how much the games have grown in terms of sheer
number of athletes, the number of sports included and how the gender makeup of the Games has changed over
the last 120 years.

### <u>Gender:</u>

**Is there a difference in the gender make up of Olympic athletes over time?**

<u>Summer Olympics</u><br />
Women competed in the Olympics for the first time in the Summer Games of 1900 with a total of 23 athletes competing across 5 different sports: Croquet, Equestrianism, Golf, Sailing and Tennis. That year they brought home 13 medals: 4 Gold, 4 Silver and 5 Bronze.

That first year, they made up less than 2% of all athletes, but over time their numbers have steadily increased and by 2016, they made up about 45% of total competitors and participated in 34 different sports.

The number of male athletes competing has also increased steadily from only 176 in 1896 to 6129 in 2016 across 32 different sports.

<u>Winter Olympics</u><br />
In the Winter Olympics in 1924, only 13 women participated (4%), all of which competed in Figure Skating (both Mixed Pairs and Women's Singles). As with the Summer Olympics, their numbers steadily increased, and by 2014 they made up 40% of all participants across 14 different sports.

The number of male athletes competing has similarly increased over the years and by 2014 their participation grew from 300 men competing across 10 sports to 1643 men competing across 15 different sports.

### <u>Medals</u>

**How many medals are actually brought home by each country?**<br />

Many other Olympic medal counts in the media only count team sport wins as a single medal for the country. Our dataset, however, counts the total number of medals brought home, which skew in favor of countries that often win team sports.

When a team wins an Olympic team event, all team members win a medal for their country including reserve and alternate team members as well. An example of this is the 2016 Olympics and the U.S. The U.S. brought home 121 medals for the country, however if you count every medal that was brought home in 2016, the U.S. collected a total of 264 medals.

The top five countries in total medals (counting all team members’ medals) for the last four Summer Olympics show that the U.S. consistently brings home significantly more medals than the second place team (40% more medals than Australia in 2004, 42% more medals than China in 2008, 43% more medals than Russia in 2012, and 39% more medals than Germany in 2016).

### <u>Sports</u>

**Have the number of official sports included in the Olympics changed over time?**<br />

The first modern Olympic Games, held in April 1896 in Athens, Greece, showcased 9 sports. The next games, held four years later, were when the reference to 'Summer' began. Winter games began in 1924, were held in Chamonix, France and showcased 10 events.

Sports are added or removed based on interest and have been removed due to the absence of an appropriate governing body. New sports are added first as a demonstration sports to gauge viewer response.

Curling was one of the original Winter sports in 1924, but due to lack of interest, was dropped and then reappears in 1998.

Based on this data, it appears that the number of sports will continue to increase and decrease based on the people who take an interest, or not, in the sports.

Note: Games were interrupted for World Wars I and II.

<hr>

## Visualizations

#### Gender - Summer

![Gender Summer](static/images/gender_summer.JPG)

#### Gender - Winter

![Gender Summer](static/images/gender_winter.JPG)

#### Medals Map

#### Medals Top 5

#### Sports

![Sports Chart](static/images/sports.JPG)

<hr>
  
## Project Specific Requirements

1. Your website must include:

- A Python Flask-powered API - **Done**

- HTML/CSS - **Done**

- JavaScript - **Done**

- At least one database (SQL, MongoDB, SQLite, etc.) - **PostGRES**

2. Your website can feature either:

- One complex, dynamic and interactive custom d3.js visualization

- Multiple leaflet, plotly or other d3-wrapper-type visualizations that update from the same data source

  **Multiple visualizations are included to cover three different areas of the Olympic Games**

3. Your website's dataset can come from:

- A single source or multiple sources as long as it has at least 100 records in it's final form

- Web scraping, API calls, or csv's that have ben ETL'd into your database, and live API calls

  **One large dataset was found on [Kaggle](https://www.kaggle.com/heesoo37/120-years-of-olympic-history-athletes-and-results/home) and then combined with a [smaller dataset](https://www.kaggle.com/paultimothymooney/latitude-and-longitude-for-every-country-and-state) to append country names to the file.**

4. Your website must include at least one JavaScript library we did not cover in class. See below for suggestions:

   **[Highcharts](https://www.highcharts.com/) was utilized in the creation of this project.**

5. Your website must have interactivity:

- The user must be able to dynamically change some aspect of the page

- You can accomplish this with inputs, buttons or menus

  **The legends on the gender charts add/remove data upon click and season selection with radio buttons at the top**<br />
  **The legends on the sports charts filter the data by season upon click**<br />
  **The medals Top 5 chart will change the data upon button click**<br />

6. Your website should allow for three distinct views of your data:

- If you've built one dynamic d3.js visualization you might have aspects of the visualization change based on user input, allowing for at least three different views.

- If you've built a dashboard of multiple visualizations, have at least three different visualizations that can be plots, charts, graphs or maps. You still have to work in some interactivity, though.

  **Multiple charts were created for this project**
