//Assignment 17

//1.
const form = document.getElementById("signupForm");
const formDataDiv = document.getElementById("formData");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const password = form.elements["password"].value;

	const formData = `Name: ${name}<br>Email: ${email}<br>Password: ${password}<br><br>`;
	formDataDiv.innerHTML += formData;

	form.reset();
});

//2.
function toggleDetails(button) {
	const item = button.parentNode;
	const fullDetails = item.querySelector(".full-details");

	if (fullDetails.style.display === "none") {
		fullDetails.style.display = "block";
		button.textContent = "Read Less";
	} else {
		fullDetails.style.display = "none";
		button.textContent = "Read More";
	}
}

//3.
// Declaration Stage
// Get elements from the form
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const updateForm = document.getElementById("updateForm");
const updateId = document.getElementById("updateId");
const updateName = document.getElementById("updateName");
const updateClass = document.getElementById("updateClass");
// Declare an array to store student data
let studentData = [];

// Event listener for the student form submission
studentForm.addEventListener("submit", function (event) {
	event.preventDefault();
	// Get values from the form inputs
	const stdntName = document.getElementById("stdntName").value;
	const stdntClass = document.getElementById("stdntClass").value;
	const id = generateId();
	const student = { id, stdntName, stdntClass };
	// Add the student to the array
	studentData.push(student);
	// Display the student in the table
	displayStudent(student);
	// Reset the form inputs
	studentForm.reset();
});

// Function to display a student in the table
function displayStudent({ id, stdntName, stdntClass }) {
	const row = studentTable.insertRow();
	const stdntNameCell = row.insertCell();
	const stdntClassCell = row.insertCell();
	const actionCell = row.insertCell();

	stdntNameCell.textContent = stdntName;
	stdntClassCell.textContent = stdntClass;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function () {
		deleteStudentRow(row);
	});
	actionCell.appendChild(deleteButton);

	const updateButton = document.createElement("button");
	updateButton.textContent = "Update";
	updateButton.addEventListener("click", function () {
		showUpdateForm(id);
	});
	actionCell.appendChild(updateButton);
}

// Function to delete a student row
function deleteStudentRow(row) {
	const rowIndex = row.rowIndex - 1;
	row.remove();
	// Remove the student from the array
	studentData.splice(rowIndex, 1);
}

// Function to show the update form with pre-filled values
function showUpdateForm(id) {
	const student = studentData.find(student => student.id === id);
	if (student) {
		updateId.value = id;
		updateName.value = student.stdntName;
		updateClass.value = student.stdntClass;
		updateForm.classList.remove("hidden-form");
	}
}

// Function to cancel the update and reset the form
function cancelUpdate() {
	updateForm.reset();
	updateForm.classList.add("hidden-form");
}

// Event listener for the update form submission
updateForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const id = updateId.value;
	const stdntName = updateName.value;
	const stdntClass = updateClass.value;

	const studentIndex = studentData.findIndex(student => student.id === id);
	if (studentIndex !== -1) {
		const updatedStudent = { id, stdntName, stdntClass };
		// Update the student in the array
		studentData.splice(studentIndex, 1, updatedStudent);

		const row = studentTable.rows[studentIndex + 1];
		row.cells[0].textContent = stdntName;
		row.cells[1].textContent = stdntClass;
	}

	updateForm.reset();
	updateForm.classList.add("hidden-form");
});

// Function to generate a unique ID for students
function generateId() {
	return "_" + Math.random().toString(36).substr(2, 9);
}
