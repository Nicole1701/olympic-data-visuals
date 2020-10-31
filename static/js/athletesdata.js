let allAthleteData = d3.json("/api/athletesdata").then(data => {
    console.log(data);
  });
