//Assignment 12

//1.
var num = parseFloat(prompt("Enter a positive num:"));
//a.
document.write("Number: " + num + "<br/>");
//b.
var roundOffValue = Math.round(num);
document.write("Round off value: " + roundOffValue + "<br/>");
//c.
var floorValue = Math.floor(num);
document.write("Floor value: " + floorValue + "<br/>");
//d.
var ceilValue = Math.ceil(num);
document.write("Ceil value: " + ceilValue + "<br/>");

//2.
var num = parseFloat(prompt("Enter a negative num:"));
//a.
document.write("Number: " + num + "<br/>");
//b.
var roundOffValue = Math.round(num);
document.write("Round off value: " + roundOffValue + "<br/>");
//c.
var floorValue = Math.floor(num);
document.write("Floor value: " + floorValue + "<br/>");
//d.
var ceilValue = Math.ceil(num);
document.write("Ceil value: " + ceilValue + "<br/>");

//3.
var num = parseFloat(prompt("Enter a num:"));
//absulute value
var absoluteValue = Math.abs(num);
//Display result
document.write("The absolute value of " + num + " is " + absoluteValue);

//4.
var diceValue = Math.floor(Math.random() * 6) + 1;
//Display result
document.write("<br/>Random dice value: " + diceValue);

//5.
var randomValue = Math.round(Math.random());

//Coin toss result calculation
var tossResult;
if (randomValue <= 0) {
  tossResult = "Heads";
} else {
  tossResult = "Tails";
}

//Display result
document.write("<br/>" + randomValue);
document.write("<br/>Random coin value: " + tossResult);

//6.
let x = Math.floor(Math.random() * 100) + 1;
//Display result
document.write("<br/>Random num between 1 and 100: " + x);

//7.
//prompt for weight
var userInput = prompt("Enter your weight:");
//saperate weight and unit
var splitInput = userInput.split("k");
//stores weight
var weight = splitInput[0];
// Display usear weight in browser
document.write("<br/>The weight of user is: " + weight + " kilgrams");

//8.
//variable for secret num and user guess
var secretNo = Math.floor(Math.random() * 10) + 1;
var usrGuess;
//shows secret num in console
console.log(secretNo);
//take user input and gives suitable output
usrGuess = prompt("Guess the Secret Number from a Range of 1-10:");
if (usrGuess === secretNo) {
  alert("Congatulations! You have guessed the secret num");
  document.write("<br/>Congatulations! You have guessed the secret num");
} else {
  alert("Try again!");
  document.write("<br/>Try again!");
}
