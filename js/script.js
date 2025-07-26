console.log("Hello World!");
// This is a simple JavaScript file for managing a todo list application

// Global array to store tasks
const tasks = [];

function addTask() {
    // Function to add a task
    const taskInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    // Check if inputs are empty
    if (taskInput.value === "" || dateInput.value === "") {
        // Alert the user to enter both task and date
        alert("Please enter a task and a date.");
    } else {
        // Add the task to the tasks array
        tasks.push({
            task: taskInput.value,
            date: dateInput.value
         });

         console.log("Task added:", taskInput.value, "on", dateInput.value);
         console.log(tasks);

         renderTasks();
        }
}

function removeAllTask(){
    // Function to remove a task
    tasks = []; // Clear the tasks array

    renderTasks();
}

function renderTasks() {
    // Function to render tasks on the page
    const taskList = documebt.getElementById("todo-list");
    taskList.innerHTML = ""; // Clear the current list

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li class="todo-item flex justify-between item-center bg-white p-4 mb-2 rounded-lg shadow">
                    <span>${task.title}</span>
                     <div>
                        <button class="px-[10px] py-[2px] rounded-[8px] bg-green-500 text-white">Edit</button>
                        <button class="px-[10px] py-[2px] rounded-[8px] bg-red-500 text-white">Delete</button>
                     </div>
                </li>
        `;
    });
}