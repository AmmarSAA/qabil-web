//Assignment 3

//1.
var age = 17;
alert("I'm " + age + " Years Old");

//2.
//Output web page line
document.write("<body><p>You have visited this site <span id='visitCount'>showCount()</span> times.</p></body>");
//Declare a variable to store and retrieve the visitor count from local storage
//Set to 0 if numt created already
var visitCount = localStorage.getItem('visitCount') || 0;
//Increment the visit count
visitCount++;
//Store the updated visit count in local storage
localStorage.setItem('visitCount', visitCount);
//Display the visit count on the web page
function showCount() {
    document.getElementById('visitCount').textContent = visitCount;
}
//Call showCount() to display visit count
showCount();
//output alert
alert("You have visited this site " + visitCount + " times.");

//3.
//Declare and assign
var birthYear = 2006;
//output line
document.write("<p class='text-dark'>My birth year is " + birthYear + "<br/>");
document.write("Data type of my declared variable is " + typeof birthYear + "</p>");

//4.
//a.
var visitorName = "John Doe";
//b.
var productTitle = "T-shirt";
//c.
var quantity = 5;
//final output in variable
var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
//final output in web page
document.write(message);