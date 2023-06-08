//Assignment 15

//1.
function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}

// Input
var base = 2;
var raisedTo = 3;
var result = power(base, raisedTo);
document.write(result);

//2.
function isLeap(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// Input
var year = 2020;
var isLeap = isLeap(year);
document.write("<br/>" + isLeap);

//3.
//Used formula from question
function calcS(a, b, c) {
    return (a + b + c) / 2;
}

function calcAreaFromS(s, a, b, c) {
    var term1 = s - a;
    var term2 = s - b;
    var term3 = s - c;
    var area = Math.sqrt(s * term1 * term2 * term3);
    return area;
}

//Finally area calculation
function calcTriArea(a, b, c) {
    var s = calcS(a, b, c);
    var area = calcAreaFromS(s, a, b, c);
    return area;
}

// Input
var sideA = 3;
var sideB = 4;
var sideC = 5;
//calling area functions
var area = calcTriArea(sideA, sideB, sideC);
//Display result
document.write("<br>");
document.write(area);

//4.
function calcAvg(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var avg = totalMarks / 3;
    return avg;
}

function calcPercentage(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var percentage = (totalMarks / 300) * 100;
    return percentage;
}

function mainFunction() {
    var marks1 = 80;
    var marks2 = 85;
    var marks3 = 90;

    var avg = calcAvg(marks1, marks2, marks3);
    var percentage = calcPercentage(marks1, marks2, marks3);

    document.write("Average: " + avg);
    document.write("<br>");
    document.write("Percentage: " + percentage + "%");
}

// Call the main function
document.write("<br>");
mainFunction();
document.write("<br>");

//5.
function indexOfCharacter(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }
    return -1; // Character not found
}

// Input
var text = "Hello, World!";
var index = indexOfCharacter(text, "W");
document.write(index);
document.write("<br/>");

//6.
function removeVowels(inputSentence) {
    // array for vowels
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var sentence = "";
    for (var i = 0; i < inputSentence.length; i++) {
        //retrieves current character from input
        var char = inputSentence.charAt(i);
        //checks if it is not in the array
        if (!vowels.includes(char)) {
            sentence += char;
        }
    }
    //reurns sentence
    return sentence;
}

// Input
var sentence = "This is a sample sentence";
var updatedSentence = removeVowels(sentence);
document.write(updatedSentence);

//7.
function countSuccessiveVowels(text) {
    //array for vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    //initial count 
    var count = 0;
    // loop to verify count succcessive vowel
    for (var i = 0; i < text.length - 1; i++) {
        //declares current and second
        var currentChar = text[i].toLowerCase();
        var nextChar = text[i + 1].toLowerCase();
        //checks current and next character
        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count++;
        }
    }
    //returns succeive count of vowel result
    return count;
}

// Input
var sentence = "Pleases read this application and give me gratuity";
var count = countSuccessiveVowels(sentence);
document.write("<br/>");
document.write("Occurrences of three vowels in succession: " + count);
document.write("<br/>");

//8.
function convertKmToMeters(km) {
    return km * 1000;
}

function convertKmToFeet(km) {
    return km * 3280.84;
}

function convertKmToInches(km) {
    return km * 39370.08;
}

function convertKmToCentimeters(km) {
    return km * 100000;
}

// Input
var distanceInKm = 10;
var distanceInMeters = convertKmToMeters(distanceInKm);
var distanceInFeet = convertKmToFeet(distanceInKm);
var distanceInInches = convertKmToInches(distanceInKm);
var distanceInCentimeters = convertKmToCentimeters(distanceInKm);

document.write("Distance in meters: " + distanceInMeters);
document.write("<br/>");
document.write("Distance in feet: " + distanceInFeet);
document.write("<br/>");
document.write("Distance in inches: " + distanceInInches);
document.write("<br/>");
document.write("Distance in centimeters: " + distanceInCentimeters);
document.write("<br/>");

//9.
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimePay = 0;

    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}

// Input
var hoursWorked = 45;
var overtimePay = calculateOvertimePay(hoursWorked);
document.write("The overtime pay: Rs. " + overtimePay);
document.write("<br/>");

//10.
function calculateCurrencyNotes(amount) {
    //calculates 100 notes
    var hundreds = Math.floor(amount / 100);
    // calculates 50 notes from remaining amount
    amount %= 100;
    var fifties = Math.floor(amount / 50);
    // calculates 10 notes from remaining amount
    amount %= 50;
    var tens = Math.floor(amount / 10);

    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}

// Input
var withdrawalAmount = parseInt(prompt("Enter amount to withdraw in hundreds:"));

// Calculate currency notes
var notes = calculateCurrencyNotes(withdrawalAmount);

// Output
document.write("You will have " + notes.hundreds + " hundred notes, " + notes.fifties + " fifty notes, " + notes.tens + " ten notes.");
