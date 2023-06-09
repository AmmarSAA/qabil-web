//Assignment 19

//1.
// i.
const mainContent = document.getElementById("main-content");
document.write("<br/>");
// ii.
document.write(mainContent.children);
document.write("<br/>");
// iii.
const renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML);
}
document.write("<br/>");
// iv.
const firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";
document.write("<br/>");
// v.
const lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Doe";
document.write("<br/>");
const emailInput = document.getElementById("email");
emailInput.value = "johndoe@example.com";
document.write("<br/>");
//2.
// i.
const formContentNode = document.getElementById("form-content");
document.write("What is node type of element having id “form-content”?: " + formContentNode.nodeType);
document.write("<br/>");
// ii.
const lastNameNode = document.getElementById("lastName");
document.write("Show node type of element having id “lastName” and its child node.: " + lastNameNode.nodeType + ", " + lastNameNode.childNodes[0].nodeType);
document.write("<br/>");
// iii.
lastNameNode.childNodes[0].nodeValue = "Last Name: Smith";
document.write("<br/>");
// iv.
const mainContentElement = document.getElementById("main-content");
const firstChild = mainContentElement.firstChild;
const lastChild = mainContentElement.lastChild;
document.write("Get First and last child of id “main-content”.:" + firstChild + ", " + lastChild)
document.write("<br/>");
// v.
const lastNameElement = document.getElementById("lastName");
const nextSibling = lastNameElement.nextSibling;
const previousSibling = lastNameElement.previousSibling;
document.write("Get next and previous siblings of id “lastName”.:" + nextSibling + ", " + previousSibling);
document.write("<br/>");
// vi.
const emailElement = document.getElementById("email");
const parentNode = emailElement.parentNode;
document.write("Get parent node and node type of element having id “email”.:" + parentNode + ", " + emailElement.nodeType);
document.write("<br/>");