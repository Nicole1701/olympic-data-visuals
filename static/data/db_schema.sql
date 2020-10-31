--Create the tables, primary, and foreign keys
--Create the noc_data table first because it is the reference for the other table foreign keys
CREATE TABLE IF NOT EXISTS noc_data (
    NOC VARCHAR(3),
    country VARCHAR (255) NOT NULL,
    PRIMARY KEY (NOC)
);
--Create athlete even table to identify all particpation by athletes create a composite key
CREATE TABLE IF NOT EXISTS athlete_data(
	NOC VARCHAR(3) NOT NULL,
	country VARCHAR(255) NOT NULL,
	ID INTEGER NOT NULL,
	name VARCHAR(255) NOT NULL,
	sex VARCHAR(1) NOT NULL,
	age FLOAT, 
	year INTEGER NOT NULL, 
	season VARCHAR(10) NOT NULL,
	city VARCHAR(255), 
	sport VARCHAR(255),
	event VARCHAR(255) NOT NULL,
	medal VARCHAR(50),
	PRIMARY KEY (ID,year,event,medal),
	FOREIGN KEY (NOC) REFERENCES noc_data(NOC)
);