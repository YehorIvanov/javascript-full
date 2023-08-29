import renderTasks from "./render.js";
import addTaskAction from "./createTask.js";
import { getItem, setItem } from "./storage.js";

window.addEventListener("DOMContentLoaded", () => {
  if (!Array.isArray(getItem("tasksList"))) setItem("tasksList", []);

  renderTasks();

  document
    .querySelector(".create-task-btn")
    .addEventListener("click", addTaskAction);

  window.addEventListener("storage", renderTasks);
});
