//Assignment 9
const br = "<br/>";
//1.
var array = [];

//2.
var studentNames = new Array();

//3.
var stringsArray = ["Apple", "Banana"];

//4.
var numbersArray = [1, 2, 3, 4];

//5.
var booleanArray = [true, false];

//6.
var mixedArray = ["Apple", 123, true];

//7.
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
//Shows list
document.write("<h1>Qualifications:<br/></h1>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<h3>" + (i + 1) + ") " + qualifications[i] + "<br/></h3>");
}

//8.
//declarea and assign
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;
//looping through array and outputting result
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br/>");
}

// Initialize an array with color names.
var colors = ["Red", "Green", "Blue"];
// Display the array elements in your browser.
document.write("Initial array: " + colors + "<br/>");

// a.
var colorToAddBegin = prompt("Color to add at the beginning of array: ");
// Added color to the beginning
colors.unshift(colorToAddBegin);
// Display the updated array in your browser.
document.write("Updated Array: " + colors + "<br/>");

// b.
var colorToAddEnd = prompt("Color to add at the end of the array: ");
// Add color to the end
colors.push(colorToAddEnd);
// Display the updated array in your browser
document.write("Updated Array after adding color to end: " + colors + "<br/>");

// c.
colors.unshift("Yellow", "Orange");
// Display the updated array in your browser
document.write("Updated Array after adding two colors from beginning: " + colors + "<br/>");

// d.
colors.shift();
// Display the updated array in your browser
document.write("Updated Array after deleting first color: " + colors + "<br/>");

// e.
colors.pop();
// Display the updated array in your browser
document.write("Updated Array after deleting last color: " + colors + "<br/>");

// f.
// stores index for storing data in it
var colorIndexAdd = prompt("Index at which you want to add color: ");
// stores color to be added at the particular index
var colorOnIndex = prompt("Color you want to add at that index: ");
// add the color to desired position/index
colors.splice(parseInt(colorIndexAdd), 0, colorOnIndex);
// Display the updated array in your browser
document.write("Updated Array after adding color at " + colorIndexAdd + "(index): " + colors + "<br/>");

// g.
var colorIndexDelete = prompt("Index from where you want to delete colors: ");
var colorToDeleteNumber = prompt("Number of colors you want to delete: ");
// remove the same num of color(s) from the user-defined position/index
colors.splice(parseInt(colorIndexDelete), parseInt(colorToDeleteNumber));
// Display the updated array in your browser
document.write("Updated Array after deleting colors at the specified index: " + colors);
document.write("<br/>");

//10.
//store student scores in an array
var scores = [320, 230, 480, 120];
//Dislpay array
document.write("Scores of Students: " + scores + "<br/>");

//sort the array in ascending order using Array’s sort method.
scores.sort(function (a, b) {
    return a - b;
});
//Display the sorted array
document.write("Ordered Scores of Students: " + scores);
document.write(br);

//11.
//initialize an array with city names.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//Display the cities
document.write("Cities list: " + cities + "<br/>");
//Copy three array elements from cities to selectedCities
var selectedCities = cities.slice(2, 5);
//Display the selected cities
document.write("Selected cities list: " + selectedCities);

//12.
var myArray = ["This", "is", "my", "cat"];
//create a single string from the array
var myString = myArray.join(" ");
//Display the array and the resulting string
document.write(br);
document.write("<h1>Array: " + myArray.join(", "));
document.write(br);
document.write("String: " + myString + "</h1>");

//13.
var devices = ["keyboard", "mouse", "printer", "monitor"];
//FIFO
for (let i = 0; i < devices.length; i++) {
    const element = devices[i];
    document.write("Out: " + element + "<br/>");

}

//14.
var devices = ["keyboard", "mouse", "printer", "monitor"];
//LIFO
for (let i = 0; i < devices.length; i++) {
    option = devices.length - (i + 1);
    const element = devices[option];
    document.write("Out: " + element + "<br/>");

}

//15.
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//Create dropdown menu
document.write("<select>");
//Loop in manufuctureres for each value
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}
//End dropdown menu
document.write("</select>");
