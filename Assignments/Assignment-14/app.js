//Assignment 14

//1.
function currentDateTime() {
    // current date and time
    var currentDate = new Date();

    // Display date and time in browser
    document.write("<br/>" + currentDate);
}
// Calling function
currentDateTime();

//2.
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    var greeting = "Hello, " + fullName + "! Welcome!";
    alert(greeting);
    document.write("<br/>" + greeting);
}
// Calling function and propmting for first and lastt names
greetUser(prompt("Enter your first name:"), prompt("Enter your last name:"));

//3.
function add2Nos(Num1, Num2) {
    if (isNaN(Num1 && Num2) || Num1 && Num2 === null || Num1 && Num2 === "") {
        var Num1 = parseFloat(prompt("Enter the first num: "));
        var Num2 = parseFloat(prompt("Enter the second num: "));
    }
    var sum = Num1 + Num2;
    return sum;
}
// Call the function and store the result in a variable
var result = add2Nos();

// Display result
alert("The sum of the two numbers is: " + result);
document.write("<br/>The sum of the two numbers is: " + result);

//4.
function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}
//calling function
var result = calculator(prompt("Enter Number 1: "), prompt("Enter Number 2: "), prompt("Enter Operator: "));

// Display result
document.write("<br/>The result is: " + result);

//5.
function square(num) {
    return num * num;
}

var num = 5;
var result = square(num);
document.write(result);

//6.
function calculateFactorial(n) {
    var n = parseInt(n);
    var factorial = 1;

    // Calculate factorial
    // Looping from 1 till n
    // e.g 5 = 1x2x3x4x5
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }

    // Display result
    document.write("<br/>The factorial of " + n + " is: " + factorial);
}

// Call the function
calculateFactorial(prompt("Enter a positive integer:"));


//7.
function count(start, end) {
    for (var i = start; i <= end; i++) {
        document.write("<br/>" + i);
    }
}

count(prompt("Start Count From:"), prompt("Count Till:"));

//8.
//Hypotenuse2 = Base2 + Perpendicular2
//Hypotenuse = Hyp
//Perpendicular = normal
function calculateHypotenuse(base, normal) {
    function calculateSquare(no) {
        return no * no;
    }
    //Squaring
    var baseSquare = calculateSquare(base);
    var normalSquare = calculateSquare(normal);
    var hypSquare = baseSquare + normalSquare;
    // Under Rooting for fianl value
    var hyp = Math.sqrt(hypSquare);

    return hyp;
}
//Inputs
var base = 3;
var normal = 4;
// Calling function
var result = calculateHypotenuse(base, normal);
// Display result
document.write("<br/>Hypotenuse is: " + result);

//9.
// area calculation function
function calculateArea(width, height) {
    return width * height;
}

// Arguments as value
var result = calculateArea(5, 3);
document.write("<br/> Arguments as value: ");
document.write(result);
// Arguments as variables
// Inputs
var width = 5;
var height = 3;
var result = calculateArea(width, height);
document.write("<br/> Arguments as variables: ");
document.write(result);

//10.
function isPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
// input
var string = "madam";
//Calling Funcion
var result = isPalindrome(string);
// Display the result
document.write("<br/>");
document.write(result);

//11.
function upperCaseFirstChar(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i][0].toUpperCase();
        words[i] = firstLetter + words[i].slice(1)
    }
    return words.join(" ");
}

// Input
var string = "the Quick brown fox";
// Caling Function
var result = upperCaseFirstChar(string);
// display the result
document.write("<br/>" + result);

//12.
function longestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

// Input
var string = "Web Development Tutorial";
// Calling function
var result = longestWord(string);
// Displayinf the result
document.write("<br/>" + result);

//13.
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// Input
var string = "JSResourceS.com";
var letter = "o";
// Calling function
var result = countOccurrences(string, letter);
// Dislpay result
document.write("<br/>" + result);

//14.
// calculate circumference of circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("<br/>The circumference is: " + circumference);
}

// calculat area of circle
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("<br/>The area is: " + area);
}

// Input
var radius = 5;
// Calculate and display the circumference
calcCircumference(radius);
// Calculate and display the area
calcArea(radius);
document.write("<br>");


