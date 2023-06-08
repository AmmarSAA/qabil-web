//Assignment 13

// Current Date (now)
const now = new Date();
//all months array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// All week days array
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Calculate milliseconds to
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

//1.
// Display date time in browser
document.write(now);

//2.
//Get current month
var currentMonth = months[now.getMonth()];
// Display month in browser
document.write("<br/>Current month: " + currentMonth);
//Alert month in browser
alert("Current month: " + currentMonth);

//Get current month
var currentMonth = now.toLocaleString('default', { month: 'long' });
// Display month in browser
document.write("<br/>Current month: " + currentMonth);
// Alert month in browser
alert("Current month: " + currentMonth);

//3.
//Get current day
var currentDay = weekdays[now.getDay()].slice(0, 3);
// Display Day in browser
document.write("<br/>Current Day: " + currentDay);
// Alert Day in browser
alert("Current Day: " + currentDay);

//4.
// day index (0-6)
var dayIndex = now.getDay();
// Whether Saturday (6) or Sunday (0)
if (dayIndex === 6 || dayIndex === 0) {
    alert("It's Fun day");
    document.write("<br/>It's Fun day");
} else {
    alert("It's not Fun day");
    document.write("<br/>It's not Fun day");
}

//5.
// Get date
var date = now.getDate();
// Whether day is less than 16
if (date < 16) {
    alert("First fifteen days of the month");
    document.write("<br/>First fifteen days of the month");
} else {
    alert("Last days of the month");
    document.write("<br/>Last days of the month");
}

//6
// determines the milliseconds since midnight, Jan. 1, 1970
var millisecondsSinceMidnightJan = Date.now();

// determines the minutes since midnight, Jan. 1, 1970
var minutesSinceMidnightJan = millisecondsSinceMidnightJan / minute;

// Output
document.write("<br/>Current Date: " + now);
document.write("<br/>Elapsed milliseconds since January 1, 1970: " + millisecondsSinceMidnightJan);
document.write("<br/>Elapsed minutes since January 1, 1970: " + minutesSinceMidnightJan);

//7.
// Get the current hour
var currentHour = now.getHours();
// Check if it's noon
if (currentHour < 12) {
    alert("It's AM");
    document.write("<br/>It's AM");
} else {
    alert("It's PM");
    document.write("<br/>It's PM");
}

//8.
//Date object for the last day of the last month of 2020
var laterDate = new Date(2020, 11, 31);

// Display laterDate
console.log(laterDate);
document.write("<br/>" + laterDate);

//9.
//starting date of Ramadan
var startingDate = new Date(2015, 5, 18); // Months are zero-based, so 5 represents June

// Calculate nober of milliseconds from starting date of Ramadan
var millisecondsPassed = now - startingDate;

// Convert milliseconds to days
var daysPassed = Math.floor(millisecondsPassed / (hour * 24));

// alert the nober of days passed since 1st Ramadan
alert(daysPassed + " days passed since 1st Ramadan");
document.write("<br/>" + daysPassed + " days passed since 1st Ramadan");

//10.
//reference date
var referenceDate = new Date("December 5, 2015 22:50:16");

//beginning of 2015
var beginningDate = new Date("January 1, 2015");

// Calculate seconds between reference beginning date
var secondsElapsed = (referenceDate.getTime() - beginningDate.getTime()) / 1000;

// Display result
document.write("<br/>On reference date " + referenceDate + ", " + secondsElapsed + " seconds had passed since the beginning of 2015.");

//11.
// Extract hours
var currentHours = now.getHours();

// Reset date hour before
now.setHours(currentHours - 1);

// Display current date and the date one hour ago
document.write("<br/>Current date: " + new Date() + "<br/>");
document.write("1 hour ago, it was: " + now);

//12.
// reset to 100 years back
now.setFullYear(now.getFullYear() - 100);
//d show the date in an alert box
alert("Current date: " + new Date() + "\n100 years back, it was: " + now);
// Display in browser
document.write("<br/>Current date: " + new Date() + "<br/>100 years back, it was: " + now);
// reset now for later use
now.setFullYear(now.getFullYear() + 100);

//13.
// ask the user about his age
var age = prompt("Enter your age:");
// Calculate his birth year
var currentYear = now.getFullYear();
var birthYear = currentYear - age;
// show his birth year in your browser
document.write("<br/>Your birth year is: " + birthYear);

//14.
// Bill details
var customerName = "ABC Customer";
var currentMonth = months[now.getMonth()];
var unitConsume = 410;
var chargePerUnit = 16;
var latePaymentSurcharge = 350;
// bill calculation
var netAmount = unitConsume * chargePerUnit;
var grossAmount = netAmount + latePaymentSurcharge;
//generates ke bill
var kElectricBill = ("<hr>")
kElectricBill += ("<h1>K- Electric Bill</h1>")
kElectricBill += ("<hr>")
kElectricBill += ("Customer Name:<b> " + customerName + "</b>")
kElectricBill += ("<br/>Month: <b>" + currentMonth + "</b>")
kElectricBill += ("<br/>Number Of Units: <b>" + Math.round(unitConsume.toFixed(2)) + "</b>")
kElectricBill += ("<br/>Charges Per Unit: <b>" + Math.round(chargePerUnit.toFixed(2)) + "</b>")
kElectricBill += ("<br/>")
kElectricBill += ("<br/>Net Amount Payable(within Due Date): <b>" + Math.round(netAmount.toFixed(2)) + "</b>")
kElectricBill += ("<br/>Late Payment Surcahrge: <b>" + Math.round(latePaymentSurcharge.toFixed(2)) + "</b>")
kElectricBill += ("<br/>Gross Amount payable(after Due Date): <b>" + Math.round(grossAmount.toFixed(2)) + "</b>")
kElectricBill += ("<hr>")
// Displays ke bill
document.write(kElectricBill)
