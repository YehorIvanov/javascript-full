import renderTasks from "./render.js";
import addTaskAction from "./createTask.js";

window.addEventListener("DOMContentLoaded", () => {
  renderTasks();

  document
    .querySelector(".create-task-btn")
    .addEventListener("click", addTaskAction);

  window.addEventListener("storage", renderTasks);
});
