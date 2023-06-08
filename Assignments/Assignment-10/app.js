//Assignment 10

//1.
var multiArray = [[]];

//2.
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
//looping through each array in 2d array
for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" "));
    document.write("<br/>");
}

//3.
for (var c = 1; c <= 10; c++) {
    document.write("<br/>" + c);
}
document.write("<br/>")

//4.
var tableOf = parseInt(prompt("Enter the num for multiplication table: "));
var tableTill = parseInt(prompt("Enter the length of the multiplication table: "));
//looping to write table
for (var i = 1; i <= tableTill; i++) {
    var result = tableOf * i;
    document.write(tableOf + " x " + i + " = " + result + "<br/>");
}

//5.
//string value in array
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// islpay the items of array
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br/>");
}
// Displaying with their index
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br/>");
}

//6.
//a.
var counting = "";
for (var i = 1; i <= 15; i++) {
    counting += i + ",";
}
document.write("Counting: " + counting + "<br/>");

//b.
var reverseCounting = "";
for (var i = 10; i >= 1; i--) {
    reverseCounting += i + ",";
}
document.write("Reverse counting: " + reverseCounting + "<br/>");

//c.
var even = "";
for (var i = 0; i <= 20; i += 2) {
    even += i + ",";
}
document.write("Even: " + even + "<br/>");

//d.
var odd = "";
for (var i = 1; i <= 19; i += 2) {
    odd += i + ",";
}
document.write("Odd: " + odd + "<br/>");

//e.
var series = "";
for (var i = 2; i <= 20; i += 2) {
    series += i + "k,";
}
document.write("Series: " + series + "<br/>");

//7.
var menu = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?\n");
var isFound = false;
//loop thorough menu
for (var i = 0; i < menu.length; i++) {
    if (menu[i] === userInput) {
        isFound = true;
        break;
    }
}

if (isFound) {
    alert(userInput + " is available at index" + i + " in our bakery!");
    document.write("<br/>" + userInput + " is available at index" + i + " in our bakery!");
} else {
    alert("We are sorry." + userInput + " is numt available in our bakery!");
    document.write("<br/>We are sorry." + userInput + " is numt available in our bakery!");
}

//8.
var num = [24, 53, 78, 91, 12];
var largestNo = num[0];
//loop through numbers and compares num if it's larger than stores
for (var i = 1; i < num.length; i++) {
    if (num[i] > largestNo) {
        largestNo = num[i];
    }
}
document.write("<br/>Array items: " + num)
document.write("<br/>The largest num is: " + largestNo);

//9.
var num = [24, 53, 78, 91, 12];
var smallestNo = num[0];
//loop through numbers and compares num if it's smaller than stores
for (var i = 1; i < num.length; i++) {
    if (num[i] < smallestNo) {
        smallestNo = num[i];
    }
}
document.write("<br/>Array items: " + num)
document.write("<br/>The smallest num is: " + smallestNo);
document.write("<br/>");

//10.
for (let m = 5; m <= 100; m += 5) {
    document.write(m + ",");
}
