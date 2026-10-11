let taskCount = 0;

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    // Span to hold the task text so it can be neatly structured separately from the delete button
    const spanText = document.createElement("span");
    spanText.textContent = taskText;
    spanText.classList.add("task-text");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    // Delete task logic
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent triggering the completed toggle when clicking delete
        li.remove();
        taskCount--;
        taskCounter.textContent = taskCount;
    });

    // Mark task as completed logic
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Append elements safely using authorized methods
    li.appendChild(spanText);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskCount++;
    taskCounter.textContent = taskCount;

    // Reset input field and refocus
    taskInput.value = "";
    taskInput.focus();
}

// Event Listeners for button click and Enter key
addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});