//Assignment 1
alert("Error! Please enter a valid password.");
alert("Welcome To Qabil Web!\nGood Luck!")
alert("Welcome To Qabil Web!")
alert("Good Luck!")


//Task 1
var zakatPercent = 0.025
var userAsset = + prompt ("Asset Value")
var result = zakatPercent*userAsset
alert("Your Zakat="+result)


//Task 2
var fitrah;
var familyMembers;
var type;

//types in rs per person
var flour = 320;
var barley = 480;
var dates = 2800;
var raisin = 6400;

familyMembers = prompt("How many family members?");
type = prompt("Which type? \n1. flour \n2. barley \n3.dates \n4.raisin")

switch(type) {
    case "1":
      fitrah = flour * familyMembers;
      break;
    case "2":
        fitrah = barley * familyMembers;
      break;
    case "3":
        fitrah = dates * familyMembers;
      break;
    case "4":
        fitrah = raisin * familyMembers;
      break;;
}

alert("Your Fitrah =" + fitrah +"Rs.")

//Task 3
var secretNo = 3;
var usrGuess;

usrGuess = prompt("Guess the Secret No. from a Range of 1-10:");
if (usrGuess === secretNo){
	alert("Congatulations! You have guessed the secret no.");
}else if (usrGuess > secretNo ){
	alert("Incorrect! Guess is high, please try again.");
}else if (usrGuess < secretNo ){
	alert("Incorrect! Guess is low, please try again.");
}

//Task 4

var usrName = prompt("Please Enter Your Name:")


