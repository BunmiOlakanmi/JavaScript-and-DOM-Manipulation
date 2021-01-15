// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the UFO data from data.js
console.log(tableData);

//Loop through 'data' and console.log each UFO object
data.forEach(function(UFO)
{
    console.log(UFO);
    //step 2: Create table rows 
    var row = tbody.append("tr")

    //step 3: Create cells to write the table data on the wep page
    Object.entries(UFO).forEach(function([key, value])
    {
        var cell = row.append("td")
        cell.text(value)
    })
});

//To handle search based on user input
var text = d3.select('.form-control');
var button = d3.select('.btn-default');
button.on("click", processInput)

//Function to process input of date/time, city, state, country and shape by users
function processInput(){
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    console.log(date, city, state, country, shape);

    let filteredData = tableData;

    if (date) {

        filteredData = filteredData.filter(row => row.datetime == date)
    }

    if (city) {

        filteredData = filteredData.filter(row => row.city == city)
    }
    if (state) {

        filteredData = filteredData.filter(row => row.state == state)
    }
    if (country) {

        filteredData = filteredData.filter(row => row.country == country)
    }
    else if (shape) {

        filteredData = filteredData.filter(row => row.shape == shape)
    }

    // Delete the table before writing new table contents, based on user input (search criteria)
    tbody.html("")

    // Create table rows and cells to write search results, based on user input (search criteria)
    filteredData.forEach((data) => 
    {
        var row = tbody.append("tr")
        Object.entries(data).forEach(function([key, value])
        {
            var cell = row.append("td")
            cell.text(value)
        })
    });
}; 