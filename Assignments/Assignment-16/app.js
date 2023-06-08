//Assignment 16

//1.
function alertMe() {
    alert("Alert message");
}

//2.
function showAlert(message) {
    alert(message);
}

//3.
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//4.
function changeImage(image) {
    var imgElement = document.getElementById("img");
    imgElement.src = image;
}

//5.
// Declaration stage
var counterElement = document.getElementById("counter");
var counter = 0;
//increases counter value
function increaseCounter() {
    counter++;
    updateCounter();
}
// Decreases counter value
function decreaseCounter() {
    counter--;
    updateCounter();
}
// Finally updates counter to display data in browser
function updateCounter() {
    counterElement.textContent = counter;
}