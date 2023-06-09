//Assignment 6
//1.
//Declare variable and assigned value
var a = 10;
const br = "<br/>";
const hr = "<hr/>";
//Display the results
document.write("<br/>Result:<br/>");
//display the value of a
document.write("The value of a is: " + a + "<br/>");
document.write("....................................................<br/>");
//incrementation
document.write("The value of ++a is: " + ++a + "<br/>");
//display the updated value of a
document.write("Now the value of a is: " + a + "<br/>");
//line break for formatting
document.write(br);
//incrementation
document.write("The value of a++ is: " + a++ + "<br/>");
//display the updated value of a
document.write("Now the value of a is: " + a + "<br/>");
//line break for formatting
document.write(br);
//decrementation
document.write("The value of --a is: " + --a + "<br/>");
//display the updated value of a
document.write("Now the value of a is: " + a + "<br/>");
//line break for formatting
document.write(br);
//decrementation
document.write("The value of a-- is: " + a-- + "<br/>");
//display the updated value of a
document.write("Now the value of a is: " + a + "<br/>");

//2.
//stage 1
var heading = "<h1>Output:</h1>";
var a = 2, b = 1;
var result = --a;

var output = heading;
output += hr;
output += "A is: " + a + br;
output += "B is: " + b + br;
output += "Result is: " + result + br;
//stage 2
var a = 2, b = 1;
result = --a - --b;

output += heading;
output += hr;
output += "A is: " + a + br;
output += "B is: " + b + br;
output += "Result is: " + result + br;
//stage 3
var a = 2, b = 1;
result = --a - --b + ++b;

output += heading;
output += hr;
output += "A is: " + a + br;
output += "B is: " + b + br;
output += "Result is: " + result + br;
//stage 4
var a = 2, b = 1;
result = --a - --b + ++b + b--;

output += heading;
output += hr;
output += "A is: " + a + br;
output += "B is: " + b + br;
output += "Result is: " + result + br;

document.write(output);

//3.
//Prompt user for their name
var usrname = prompt("Enter your name:");
//Greet user
alert("Hello, " + usrname + "! Welcome!");
//Display the greeting in console
console.log("Hello, " + usrname + "! Welcome!");
//Display the greeting in document
document.write(br + "Hello, " + usrname + "! Welcome!");

//5.
//Prompt for num
var num = prompt("Enter a num:");
//If user don't enter a num or enters invalid value, use 5
if (isNaN(num) || num === null || num === "") {
  num = 5;
}
//display table
document.write("<h2>Multiplication Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
  var result = num * i;
  document.write(num + " x " + i + " = " + result + "<br/>");
}

//6.
//a.
var subject1 = prompt("Enter subject 1 name:");
var subject2 = prompt("Enter subject 2 name:");
var subject3 = prompt("Enter subject 3 name:");
//b.
const totalMarks = 100;
//c. d.
var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
//e.
//result calculation
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
//Display result
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + (obtainedMarks1 / totalMarks) * 100 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + (obtainedMarks2 / totalMarks) * 100 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + (obtainedMarks3 / totalMarks) * 100 + "%</td></tr>");
document.write("<tr><td>Total</td><td>" + (3 * totalMarks) + "</td><td>" + totalObtainedMarks + "</td><td>" + percentage + "%</td></tr>");
document.write("</table>");

