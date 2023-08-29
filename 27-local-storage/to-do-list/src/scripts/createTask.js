import renderTasks from "./render.js";
import { getItem, setItem } from "./storage.js";

const getNewID = () => {
  return Math.floor(Math.random() * (998 - 1)) + 2 + new Date().getTime();
};

const addTaskAction = () => {
  const inputElem = document.querySelector(".task-input");
  if (inputElem.value !== "") {
    let tasks = getItem("tasksList");
    if (!Array.isArray(tasks)) {
      tasks = [];
    }
    tasks.push({
      text: inputElem.value,
      done: false,
      id: getNewID(),
    });
    setItem("tasksList", tasks);
    inputElem.value = "";
    renderTasks(tasks);
  }
};

export default addTaskAction;
