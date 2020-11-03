d3.json("/api/athletesdata").then(data => {
    console.log(data);

let tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Create function to show full table
function showTable() {
  tableData.forEach((athleteentry) => {
    let row = tbody.append("tr");
    Object.values(athleteentry).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
}

// Show table when loading page
showTable();

// // Select the button
// button = d3.select("#filter-btn");
// clearButton = d3.select("#clear-btn");
// resetButton = d3.select("#reset-btn");

// const filterDate = () => {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Clear the previous table
//   tbody.html("");

//   // Define the input element and value property
//   let inputElement = d3.select("#year");
//   let inputValue = inputElement.property("value");

//   // Check inputValue
//   console.log(inputValue);

//   // Filter data
//   let filteredData = tableData.filter(
//     (athleteentry) => athleteentry.year === inputValue
//   );

//   if (filteredData.length == 0) {
//     alert(
//       "No olympics this year. Please try again."
//     );
//     clearText();
//   }

//   // Check filteredData
//   console.log(filteredData);

//   filteredData.forEach((selection) => {
//     let row = tbody.append("tr");
//     Object.values(selection).forEach((value) => {
//       let cell = row.append("td");
//       cell.text(value);
//     });
//   });
// };

// // Reset Table Function
// const resetTable = () => {
//   tableData.forEach((athleteentry) => {
//     let row = tbody.append("tr");
//     Object.values(athleteentry).forEach((value) => {
//       let cell = row.append("td");
//       cell.text(value);
//     });
//   });
// };

// function clearText() {
//   document.getElementById("year").value = "";
//   showTable();
// }

// Create event handlers
button.on("click", filterDate);
clearButton.on("click", clearText);
resetButton.on("click", resetTable);


  //   let tableData = data,
  //   tbody = d3.select("tbody")
  //   // button = d3.select("#filter-btn"),
  //   // form = d3.select("#form");

  //   tableData.forEach((athleteentry) => {
  //     // console.log(athleteentry);
  //     let datarow = tbody.append("tr");
  
  //     Object.entries(athleteentry).forEach(([key,value]) => {
  //         // console.log(key,value);
  //         let box = datarow.append("td");
  //         box.text(value);
  //     });
  //   });
  });



  // function tabulate(data, columns) {
  
	// 	var table = d3.select('body').append('data-table')
	// 	var thead = table.append('thead')
	// 	var	tbody = table.append('tbody');

	// 	// append the header row
	// 	thead.append('tr')
	// 	  .selectAll('th')
	// 	  .data(columns).enter()
	// 	  .append('th')
	// 	    .text(function (column) { return column; });

	// 	// create a row for each object in the data
	// 	var rows = tbody.selectAll('tr')
	// 	  .data(data.items[0].rows)
	// 	  .enter()
	// 	  .append('tr');

	// 	// create a cell in each row for each column
	// 	var cells = rows.selectAll('td')
	// 	  .data(function (row,i) {return row; })
	// 	  .enter()
	// 	  .append('td')
	// 	    .text(function (d) { return d; });

	//   return table;
	// }

	// // render the table(s)
 	// tabulate(data, data.items[0].columnNames); // data, columns table   