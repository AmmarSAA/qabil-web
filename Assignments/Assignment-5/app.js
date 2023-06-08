//Assignment 5
//1.
//Declare stage
var num1 = 3;
var num2 = 5;
//Result
var sum = num1 + num2;
//Output on web page
document.write("Result of " + num1 + " and " + num2 + " is " + sum + ", After Addition.<br/>");

//2.
//Subtraction
//Declare stage
var num1 = 3;
var num2 = 5;
//Result
var sum = num1 - num2;
//Output on web page
document.write("Result of " + num1 + " and " + num2 + " is " + sum + ", After Subtraction.<br/>");
//Multiplication
//Declare stage
var num1 = 3;
var num2 = 5;
//Result
var sum = num1 * num2;
//Output on web page
document.write("Result of " + num1 + " and " + num2 + " is " + sum + ", After Multiplication.<br/>");

//Division
//Declare stage
var num1 = 3;
var num2 = 5;
//Result
var sum = num1 / num2;
//Output on web page
document.write("Result of " + num1 + " and " + num2 + " is " + sum + ", After Division.<br/>");
//Modulus
//Declare stage
var num1 = 3;
var num2 = 5;
//Result
var sum = num1 % num2;
//Output on web page
document.write("Result of " + num1 + " and " + num2 + " is " + sum + ", After Using Modulus.<br/>");

//3.
//a.
var num;
//b.
document.write("Value after variable declaration is: " + num + "<br/>");
//c.
num = 5;
//d.
document.write("Initial value: " + num + "<br/>");
//e.
num++;
//f.
document.write("Value after increment is: " + num + "<br/>");
//g.
num += 7;
//h.
document.write("Value after addition is: " + num + "<br/>");
//i.
num--;
//j.
document.write("Value after decrement is: " + num + "<br/>");
//k.
var remainder = num % 3;
//l.
document.write("The remainder is: " + remainder + "<br/>");

//4.
//Declare and initialized variables
var ticketPrice = 600;
var numberOfTickets = 5;
//Total cost calculation
var totalCost = ticketPrice * numberOfTickets;
//Output on web page
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + "PKR");

//5.
var table = 9;
//Output on web page
document.write("<h1>Multiplication Table of " + table + "</h1>");
//Loop to write table upto 10
for (var i = 1; i <= 10; i++) {
    var result = table * i;
    //Output on web page
    document.write("<strong class='strong'>" + table + " x " + i + " = " + result + "</strong><br/>");
}

//6.
//output line break
document.write("<br/>");
//Celsius to Fahrenheit
var celsiusTemperature = 30;
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
//Output on web page
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br/>");
//Fahrenheit to Celsius
var fahrenheitTemperature2 = 86;
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
//Output on web page
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

//7.
//Store the prices
var item1Price = 650;
var item2Price = 100;
//Store the ordered quantity
var item1Quantity = 3;
var item2Quantity = 7;
//Store the shipping charges
var shippingCharges = 100;
//Total
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
//Displays receipt on web page
document.write("<h2>Receipt</h2>");
document.write("<p>Price of item 1 is " + item1Price + " PKR</p>");
document.write("<p>Quantity of item 1 is " + item1Quantity + "</p>");
document.write("<p>Price of item 2 is " + item2Price + " PKR</p>");
document.write("<p>Ordered quantity of item 2 is " + item2Quantity + "</p>");
document.write("<p>Shipping charges is " + shippingCharges + " PKR</p>");
document.write("<p>Total cost is " + totalCost + " PKR</p>");

//8.
//declare and initiliaze
var totalMarks = 980;
var marksObtained = 804;
//result in variable
var percentage = (marksObtained / totalMarks) * 100;
//total marks on web page
document.write("Total marks: " + totalMarks + "<br/>");
//marks obtained on web page
document.write("Marks obtained: " + marksObtained + "<br/>");
//Percentage on web page
document.write("Percentage: " + percentage + "%");

//9.
//declare and assigned value
var usDollars = 10;
var saudiRiyals = 25;
//Exchange rates
var usdToPkr = 104.80;
var sarToPkr = 28;
//To PKR
var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkr);
//Display Heading on web page
document.write("<h1 class='diaplay-2'>Currency in PKR</h1><br/>");
//Display one line result on web page
document.write("Total currency in PKR: " + totalPkr.toFixed(2));

//10.
//declare and assigned value
var num = 7;
//a.b.c.
var result = (((num + 5) * 10) / 2);
//Output on web page
document.write("Result: " + result);

//11.
//Display heading on web page
document.write("<h1 class='strong h1'>Age Calculator</h1><br/>")
//Current year
const currentYear = 2023;
//Birth Year
var birthYear = 2006;
//Age calculation
var age = currentYear - birthYear;
//Second age calculaiton
var age1 = age - 1;
//Current year on web page
document.write("Current Year: " + currentYear);
//Birth year on web page
document.write("<br/>Birth Year: " + birthYear);
//Final two age values on web page
document.write("<br/>Your age: " + age + " or " + age1 + " years.");

//12.
//heading
document.write("<h1>The Geometrizer</h1>");
//line break
document.write("<br/>");
//a.
//declare and assigned value radius
var radius = 20;
//b.
//calculate circumference
var circumference = 2 * Math.PI * radius;
//calculate area
var area = Math.PI * Math.pow(radius, 2);
//Output radius on web page
document.write("Radius of a circle: " + radius + "<br/>");
//Output circumference on web page
document.write("The circumference is: " + circumference + "<br/>");
//Output area on web page
document.write("The area is: " + area.toFixed(1));

//13.
//Output on web page
document.write("<h1>The Lifetime Supply Calculator</h1>");
//fav snack declared and assigned value to variable
var favSnack = "Chocolate Chip";
//current age declared and assigned value to variable
var currentAge = 15;
//maximum age declared and assigned value to variable
var maximumAge = 65;
//amount per day declared and assigned value to variable
var amountPerDay = 3;
// Calculate snacks you would need for the rest of your life
var remainingYears = maximumAge - currentAge;
var snacksPerYear = amountPerDay * 365;
//final result
var lifetimeSupply = snacksPerYear * remainingYears;
// Output the calculated result
//Favprite Snack on web page
document.write("Favorite Snack: " + favSnack + "<br/>");
//Current Age on web page
document.write("Current age: " + currentAge + "<br/>");
//maximum age on web page
document.write("Estimated Maximum Age: " + maximumAge + "<br/>");
//amount per day on web page
document.write("Amount of snacks per day: " + amountPerDay + "<br/>");
//Final reult on web page
document.write("You will need " + lifetimeSupply + " " + favSnack + " to last you until the ripe old age of " + maximumAge + ".");

