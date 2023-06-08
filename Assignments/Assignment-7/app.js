//Assignment 7
const br = "<br/>";
//1.
//Take input for city name
var cityName = prompt("Enter city name: ");
//Check if the city name is Karachi
if (cityName.toLowerCase() === "karachi") {
    document.write("Welcome to the city of lights");
    alert("Welcome to the city of lights");
} else {
    document.write("Welcome to " + cityName);
    alert("Welcome to " + cityName);
}
document.write(br);

//2.
//prompt for gender
var gender = prompt("Enter your gender: ");
//Convert gender to lowercase for easy comparision
gender = gender.toLowerCase();
//Costum message as of gender
switch (gender) {
    //If male
    case "male":
        document.write("Good Morning Sir.");
        alert("Good Morning Sir.");
        break;
    //if female
    case "female":
        document.write("Good Morning Ma'am.");
        alert("Good Morning Ma'am.");
        break;
    //default
    default:
        document.write("Good Morning.");
        alert("Good Morning.");
        break;
}
document.write(br);

//3.
//prompt for signal color
var color = prompt("Enter the color of traffic signal:");
//Convert color to lowercase for easy comparision
color = color.toLowerCase();
// Check the color and display a corresponding message
switch (color) {
    case "red":
        document.write("Must Stop");
        alert("Must Stop");
        break;
    case "yellow":
        document.write("Ready to move");
        alert("Ready to move");
        break;
    case "green":
        document.write("Move numw");
        alert("Move numw");
        break;
    default:
        document.write("Invalid color");
        alert("Invalid color");
        break;
}
document.write(br);

//4.
//Prmopt for remaining fuel convert to float for easy comparision
var remainingFuel = parseFloat(prompt("Enter remaining fuel (in litres): "));
//fuel < 0.25 litres
if (remainingFuel < 0.25 || remainingFuel === " " || isNaN(remainingFuel) || remainingFuel === null) {
    document.write("Please refill the fuel in car!");
    alert("Please refill the fuel in car!");
} else {
    document.write("Good to go!");
    alert("Good to go!");
}
document.write(br);

//5.
document.write("5.Alert displays in every condition." + br);
//a. 
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
document.write("5.(a) - Output: given condition for variable a is TRUE" + br);
//b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
document.write("5.(b) - Output: given condition for variable b is FALSE" + br);
//c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
document.write("5.(c) - Outputs: CONDITION 2 & 4 is TRUE" + br);
//d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
document.write("5.(d) - Output: The cost equals" + br);
//e.
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
document.write("5.(e) - Output: True" + br);
//f..
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
document.write("5.(f) - Output: car is smaller than cat" + br);

//6.
//prompt for subject marks
var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));
//calculation
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;
//declare to store grade and remarks
var grade;
var remarks;
//grade assigning
switch (true) {
    case (percentage >= 80):
        grade = "A-one";
        remarks = "Excellent";
        break;
    case (percentage >= 70):
        grade = "A";
        remarks = "Good";
        break;
    case (percentage >= 60):
        grade = "B";
        remarks = "You need to improve";
        break;
    default:
        grade = "Fail";
        remarks = "Sorry";
        break;
}
//MarkSheet maker
document.write("<h1>Marks Sheet<br/></h1>");
document.write("<h3>Total marks: " + totalMarks + "<br/>");
document.write("Marks obtained: " + obtainedMarks + "<br/>");
document.write("Percentage: " + Math.round(percentage) + "%<br/>");
document.write("Grade: " + grade + "<br/>");
document.write("Remarks: " + remarks + "</h3><br/>");

//7.
//declarea and assigned value
var secretnum = 3;
var usrGuess = parseInt(prompt("Guess the secret num (between 1 and 10):"));
if (usrGuess === secretnum) {
    //a.
    alert("Bingo! Correct answer");
} else if (usrGuess === secretnum - 1 || usrGuess === secretnum + 1) {
    //b.
    alert("Close enumugh to the correct answer");
} else {
    //default
    alert("Wrong guess");
}

//8.
//prompt num
var num = parseFloat(prompt("Enter a num: "));
//checker
if (num % 3 === 0) {
    alert("The num is divisible by 3");
} else {
    alert("The num is numt divisible by 3");
}

//9.
//prompt num
var num = parseFloat(prompt("Enter a num: "));
//odd even checker
if (num % 2 === 0) {
    alert("The num is even");
} else {
    alert("The num is odd");
}

//10.
//prompt temperature
var T = parseInt(prompt("Enter the temperature:"));
//output
switch (true) {
    case (T > 40):
        //a.
        alert("It is too hot outside.");
        break;
    case (T > 30):
        //b.    
        alert("The Weather today is Normal.");
        break;
    case (T > 20):
        //c.    
        alert("Today's Weather is cool.");
        break;
    case (T > 10):
        //d.    
        alert("OMG! Today's weather is so Cool.");
        break;
    default:
        //default    
        alert("Temperature is too low.");
        break;
}

//11.
//prompt for user input
var firstNumber = parseFloat(prompt("Enter the first num:"));
var secondNumber = parseFloat(prompt("Enter the second num:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
//calculation
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation";
}
//final result
alert("Result: " + result);

