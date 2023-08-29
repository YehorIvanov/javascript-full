import renderTasks from "./render.js";
import { getItem, setItem } from "./storage.js";

const updateTaskStatus = (event) => {
  const taskId = +event.target.dataset.id;
  const tasks = getItem("tasks");
  const taskToUpdate = tasks.find((task) => task.id === taskId);
  if (taskToUpdate) {
    taskToUpdate.done = !taskToUpdate.done;
  }
  setItem("tasks", tasks);
  renderTasks(tasks);
};
export default updateTaskStatus;
