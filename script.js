document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    if (!addTaskButton || !todoInput || !todoList) {
        console.error("One or more elements not found!");
        return;
    }

    let tasks = [];

    addTaskButton.addEventListener("click", () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        tasks.push(newTask);
        todoInput.value = "";

        renderTasks();
    });

    function renderTasks() {
        todoList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = "flex justify-between items-center bg-gray-600 px-3 py-2 rounded mb-2";
            li.innerHTML = `<span>${index + 1}. ${task.text}</span>
                            <button onclick="deleteTask(${task.id})" class="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600">Delete</button>`;
            todoList.appendChild(li);
        });
    }

    window.deleteTask = (taskId) => {
        tasks = tasks.filter(task => task.id !== taskId);
        renderTasks();
    };
});
