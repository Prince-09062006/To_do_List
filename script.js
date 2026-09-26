const taskInput = document.getElementById("taskInput");
const taskInput2 = document.getElementById("taskInput2");
const taskInput3 = document.getElementById("taskInput3");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

addButton.addEventListener("click", function () {

const taskText = taskInput.value.trim();
const taskDate = taskInput2.value;
const taskTime = taskInput3.value;

if (taskText === "") {
alert("Please enter a task.");
return;
}

const li = document.createElement("li");
const span = document.createElement("span");

span.textContent = taskText + " | " + taskDate + " | " + taskTime;
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

li.appendChild(span);
li.appendChild(deleteButton);
taskList.appendChild(li);

li.addEventListener("click", function () {
li.classList.toggle("completed");
});

deleteButton.addEventListener("click", function (event) {
event.stopPropagation();
li.remove();
});

taskInput.value = "";
taskInput2.value = "";
taskInput3.value = "";
});

clearButton.addEventListener("click", function () {
taskList.innerHTML = "";
});
