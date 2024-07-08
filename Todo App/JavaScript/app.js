import { Task } from "./Classes/Task.js";
// const card = document.querySelector(".card");
const form = document.querySelector(".form");
const btn = document.querySelector("#addTaskBtn");
const input = document.querySelector("#taskInput");
const list = document.getElementById("lists");
const msg = document.getElementById("msg");

//! ShowMessages.....
const showMsg = (text, status) => {
  msg.textContent = text;
  msg.classList.add(`task-${status}`);
  setTimeout(() => {
    msg.textContent = "";
    msg.classList.remove(`task-${status}`);
  }, 1000);
};

//! Creating a new Task.....
const createTodo = (newTask) => {
  const li = document.createElement("li");
  li.id = newTask.id;
  li.classList.add("list-style");
  li.innerHTML = `<span>${newTask.value}</span>
  <span><button class="submit-btn" id="delete"><i class="fa fa-trash"></i></button></span>`;
  list.appendChild(li);
  li.querySelector("#delete").addEventListener("click", deleteTask);
};

//! Fetching And Deleting a Task.......
const deleteTask = (event) => {
  const selectedTask = event.target.parentElement.parentElement.parentElement;
  //console.log(selectedTask);
  list.removeChild(selectedTask);
  showMsg("Task deleted successfully!", "delete");

  //? Remove Task From Local Storage....
  //   const taskId = selectedTask.id;
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter((task) => task.id !== selectedTask.id);
  //console.log(updatedTasks);
  localStorage.setItem("myTask", JSON.stringify(updatedTasks));
};

//! Get Tasks From Local Storage.....
const getTasksFromLocalStorage = () => {
  return localStorage.getItem("myTask")
    ? JSON.parse(localStorage.getItem("myTask"))
    : [];
};
//! Add Task....
const addTask = (event) => {
  event.preventDefault();
  const task = input.value;
  //console.log(task);
  //? Unique Id.....
  const uniqueId = Date.now().toString();
  //console.log(uniqueId);
  //! Create Object of Class....
  const newTask = new Task(uniqueId, task);
  //console.log(newTask);
  createTodo(newTask);
  showMsg("Task added successfully!", "add");

  //? Set Tasks in Local Storage....
  const tasks = getTasksFromLocalStorage();
  //console.log(tasks);
  //tasks.push({ uniqueId, task });
  tasks.push(newTask);
  localStorage.setItem("myTask", JSON.stringify(tasks));
  input.value = "";
};

//! Add Eventlistener....
form.addEventListener("submit", addTask);

//! Add Eventlistener With Window....
window.addEventListener("DOMContentLoaded", () => {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach((task) => createTodo(task));
  //tasks.map((task) => createTodo(task.uniqueId, task.task));
});
