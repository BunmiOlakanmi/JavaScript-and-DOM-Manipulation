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
    //step 2
    var row = tbody.append("tr")
    //step 3
    Object.entries(UFO).forEach(function([key, value])
    {
        var cell = row.append("td")
        cell.text(value)
    })
});

//To handle search based on date/time
var text = d3.select('.form-control');
var button = d3.select('.btn-default');
button.on("click", processInput)
//form.on("select", processInput)


//Function to process input date/time by users
function processInput(){
   // var selected = text.property("value")
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

    tbody.html("")

    
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