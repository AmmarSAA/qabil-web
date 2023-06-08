//Assignment 2

//1.
var username;

//2.
var myName = "Syed Ammar Ahmed";

//3.
//a.
var message;
//b. 
message = "Hello World";
//c.
alert(message);

//4.
//Stores stdnt name
var stdntName = prompt('What is your name?');
//Stores stdnt age
var stdntAge = prompt('What is your age?');
//Stores stdnt course
var stdntCourse = prompt('What is your selected course?');
//saperate data output
alert(stdntName);
alert(stdntAge + " years old");
alert(stdntCourse);
//all data at once output
var stdntData = alert('The User Named, ' + stdntName + ' is ' + stdntAge + ' Years Old and selected course, ' + stdntCourse + '.')

//5.
//Declaration stage
var word = 'PIZZA';
var output = "";
//for loop for reducing one char and looping until 0
for (var i = word.length; i > 0; i--) {
    output += word.slice(0, i) + "\n";
}
//output in alert
alert(output);

//6.
var email = "s.amamrahmed14@gmail.com";
var msg = "My email address is " + email;
//output
alert(msg);

//7.
var book = "A Smarter Way To Learn JavaScript";
//output
alert("I'm trying to learn from the Book, " + book + ".");

//8.
document.write("<h1 class='display-1'>Yah! I can write HTML content through JavaScript.</h1>");

//9.
var style = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(style);
document.write(style);
