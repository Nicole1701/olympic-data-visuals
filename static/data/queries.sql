/*Country summary of athlete count of those who have wone medals by olympic year*/
select country 
,year
,count(distinct ad.id) ATHLETE_COUNT
--,season --can add back in if we want to include season breakdown
,count(medal) as MEDAL_COUNT
from athlete_data ad
where ad.medal <> 'None'
group by ad.country, ad.year, ad.season
order by ad.year desc, count(ad.medal) desc;

/*Country summary of Male athletes who have won medals by olympic year.*/
select country 
,year
,sex
,count(distinct ad.id) ATHLETE_COUNT
--,season --can add back in if we want to include season breakdown
,count(medal) as MEDAL_COUNT
from athlete_data ad
where ad.medal <> 'None'
-- and ad.sex = 'M'
group by ad.country, ad.year, ad.sex,ad.season
order by ad.year desc, count(ad.medal) desc;

/*Country summary of Female athletes who have won medals by olympic year.*/
select country 
,year
,sex
,count(distinct ad.id) ATHLETE_COUNT
--,season --can add back in if we want to include season breakdown
,count(medal) as MEDAL_COUNT
from athlete_data ad
where ad.medal <> 'None'
and ad.sex = 'F'
group by ad.country, ad.year, ad.sex
order by ad.year desc, count(ad.medal) desc;

/*Olympics Gender Inclusion History*/
select 
sex
,year
,count(distinct ad.id) ATHLETE_COUNT
from athlete_data ad
group by ad.sex, ad.year
order by ad.year desc;

/*Olympics Gender Inclusion History by Country*/
select 
ad.country
,sex
,year
,count(distinct ad.id) ATHLETE_COUNT
from athlete_data ad
group by ad.country, ad.sex, ad.year
order by ad.year desc;

/*Olympics Gender Inclusion History by Sport*/
select 
ad.sport
,sex
,year
,count(distinct ad.id) ATHLETE_COUNT
from athlete_data ad
group by ad.sport, ad.sex, ad.year
order by ad.year desc;

/*Olympics # of Sport, per Season*/
SELECT year, season, COUNT(DISTINCT sport)
FROM athlete_data
GROUP BY year, season
ORDER BY year;

/*Olympics # of Sport, per Season, Summer only*/
SELECT year, COUNT(DISTINCT sport)
FROM athlete_data
WHERE season = 'Summer'
GROUP BY year
ORDER BY year;

/*Olympics # of Sport, per Season, Winter only*/
SELECT year, COUNT(DISTINCT sport)
FROM athlete_data
WHERE season = 'Winter'
GROUP BY year
ORDER BY year;