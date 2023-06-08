//Assignment 8
const br = "<br/>";
//1.
//prompt for character
var input = prompt("Enter a character:");
//check if num
if (!isNaN(input) && input !== "") {
    alert("The input is a num.");
} else {
    //checks with ASCII character code liberary
    var charCode = input.charCodeAt(0);
    //final result
    if (charCode >= 65 && charCode <= 90) {
        alert("The input is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
        alert("The input is a lowercase letter.");
    } else {
        alert("The input is neither a num numr a letter.");
    }
}
document.write(br);

//2.
//prompt int input
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
//compares the values
if (num1 > num2) {
    document.write("The larger num is: " + num1);
} else if (num2 > num1) {
    document.write("The larger num is: " + num2);
} else {
    document.write("Both integers are equal.");
}
document.write(br);

//3.
var num = parseFloat(prompt("Enter a num:"));

if (num > 0) {
    document.write("The num is positive.");
} else if (num < 0) {
    document.write("The num is negative.");
} else {
    document.write("The num is zero.");
}
document.write(br);

//4.
//prompt for input of single character
var character = prompt("Enter a character:");
//check if single character
if (character.length === 1) {
    //convert to lowercase for easy comparision
    character = character.toLowerCase();
    switch (character) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            document.write("The character is a vowel.");
            break;
        default:
            document.write("The character is numt a vowel.");
    }
} else {
    document.write("Invalid input. Please enter a single character.");
}
document.write(br);

//5.
//correct password
var correctPassword = "12345678";
//prompt for password
var enteredPassword = prompt("Enter your password:");
// Validate the passwords
if (enteredPassword === "") {
    alert("Please enter your password.");
    document.write("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
    document.write("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
    document.write("Incorrect password.");
}
document.write(br);

//6.
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//7.
//prompt user input in 24 hrs
var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
//greeting as algorithm
if (time >= 0000 && time < 1200) {
    document.write("Good Morning!");
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    document.write("Good Afternumon!");
    alert("Good Afternumon!");
} else if (time >= 1700 && time < 2100) {
    document.write("Good Evening!");
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good Night!");
    alert("Good Night!");
} else {
    document.write("Invalid input. Please enter a valid time in 24-hour format.");
    alert("Invalid input. Please enter a valid time in 24-hour format.");
}
