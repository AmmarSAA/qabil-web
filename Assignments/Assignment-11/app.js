//Assignment 11

//1.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");
document.write("Hello, " + fullName + "! Welcome!");

//2.
var userInput = prompt("Enter your favorite mobile phone model:");

var length = userInput.length;

document.write("<br/>My favorite phone is " + userInput + "<br/>");
document.write("Length of string: " + length);

//3.
var word = "Pakistani";
var letter = "n";

var index = word.indexOf(letter);

document.write("<br/>String: " + word + "<br/>");
document.write("Index of '" + letter + "': " + index);

//4.
var word = "Hello World";
var letter = "l";

var lastIndex = word.lastIndexOf(letter);

document.write("<br/>String: " + word + "<br/>");
document.write("Last Index of '" + letter + "': " + lastIndex);

//5.
var word = "Pakistani";
var index = "3";

var letter = word.charAt(index);

document.write("<br/>String: " + word + "<br/>");
document.write("Character at index '" + index + "': " + letter + "<br/>");

//6.
var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");

var fullName = firstName.concat(" ", lastName);

document.write("Hello " + fullName + "! Welcome!");

//7.
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("<br/>City: " + city + "<br/>");
document.write("After replacement: " + newCity);

//8.
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.write("<br/>Original Message: " + message + "<br/>");
document.write("<br/>Replaced Message: " + newMessage);

//9.
var stringNumber = "472";
var convertedNumber = Number(stringNumber);

document.write("<br/>Value: " + stringNumber + "<br/>");
document.write("Type: " + typeof stringNumber + "<br/><br/>");
document.write("Value: " + convertedNumber + "<br/>");
document.write("Type: " + typeof convertedNumber);

//10.
var userInput = prompt("Enter your input:");
var upperCase = userInput.toUpperCase();

document.write("<br/>User Input: " + userInput + "<br/>");
document.write("Upper case: " + upperCase);

//11.
var userInput = prompt("Enter your input:");
var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1, userInput.lenght).toLowerCase();

document.write("User Input: " + userInput + "<br/>");
document.write("Title Case Input: " + titleCase);

//12.
var num = 35.36;
var strNum = num.toString();
var result = strNum.replace(".", "");

document.write("<br/>Number: " + num + "<br/>");
document.write("Result: " + result);

//13.
var username = prompt("Enter your username:");
var isValid = true;
//loop through each character and checks their ASCII code and compare with rules
for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
        isValid = false;
        break;
    }
}
//if true
if (isValid) {
    document.write("<br/>Your username: " + username);
    alert("Your username: " + username);
}
//if false 
else {
    alert("Please enter a valid username");
    document.write("<br/>Please enter valid username<br/>");
}

//14.
var menu = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?\n");
var isFound = false;

// Loop through the menu array
for (var i = 0; i < menu.length; i++) {
    if (userInput === menu[i]) {
        isFound = true;
        break;
    }
}

//if found output
if (isFound) {
    alert(userInput + " is available at index " + i + " in our bakery!");
    document.write("<br/>" + userInput + " is available at index " + i + " in our bakery!");
} else {
    alert("We are sorry. " + userInput + " is numt available in our bakery!");
    document.write("<br/>We are sorry. " + userInput + " is numt available in our bakery!");
}

//15.
var password = prompt("Enter password: ");

//Check if the password meets the requirements
//initially false
var hasAlphabet = false;
var hasNumber = false;
var startsWithNumber = false;
var hasLength = false;
var msg = "";

//Loop through each character in the password for verification
for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);

    //a.
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasAlphabet = true;
    } else {
        msg = "Password must contain Alphabet";
    }

    //a.
    if (charCode >= 48 && charCode <= 57) {
        hasNumber = true;
    } else {
        msg = "Password must contain Number";
    }

    //b.
    if (i === 0 && charCode >= 48 && charCode <= 57) {
        startsWithNumber = true;
    } else {
        msg = "Password must numt start with Number";
    }

    //c.
    if (password.length >= 6) {
        hasLength = true;
    } else {
        msg = "Password must numt be less than 6 characters";
    }
}

// Check if password meets all requirements
if (hasAlphabet && hasNumber && !startsWithNumber && password.length >= 6) {
    alert("Valid password!");
    document.write("<br/>Valid password!<br/>");
} else {
    alert(msg + "\nPlease enter a valid password!");
    document.write("<br/>" + msg + "<br/>Please enter a valid password!<br/>");
}

//16.
var university = "University of Karachi";
var array = university.split("");

// Display elements of array
for (var i = 0; i < array.length; i++) {
    document.write(array[i] + "<br/>");
}

//17.
// Prompt user for input
var userInput = prompt("Enter a string:");

// Display last character of  user input
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character: " + lastCharacter + "<br/>");

//18.
var text = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var wordCount = 0;
var words = text.split(" ");
for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === wordToSearch.toLowerCase()) {
        wordCount++;
    }
}
document.write("Occurrences of 'the': " + wordCount);
