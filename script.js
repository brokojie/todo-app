// Get form, input and ul elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(e) {
    e.preventDefault();  // Prevent the form from submitting

    // Get the task text and create a new list item
    const task = taskInput.value;
    const li = document.createElement('li');
    li.textContent = task;

        // Add an event listener to the list item (listen for click of task and remove it)
        li.addEventListener('click', function() {
            this.remove();
        });
    
    // Add the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Attach the function to the form's submit event
taskForm.addEventListener('submit', addTask);
