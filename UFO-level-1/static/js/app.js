// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the UFO data from data.js
//console.log(tableData);

//Loop through 'data' and console.log each UFO object
data.forEach(function(UFOL1)
{
    //console.log(UFOL1);
    //step 2
    var row = tbody.append("tr")
    //step 3
    Object.entries(UFOL1).forEach(function([key, value])
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
    var selected = text.property("value")
    console.log(selected);
    // if(selected ==)
    filteredData= tableData.filter(d3 => d3.datetime == selected)
    console.log(filteredData);

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
}


