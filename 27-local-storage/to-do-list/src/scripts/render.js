import { getItem } from "./storage.js";
import updateTaskStatus from "./updateTask.js";

const renderTasks = () => {
  let tasksList = getItem("tasks");
  if (!tasksList) tasksList = [];
  const listElem = document.querySelector(".list");
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.dataset.id = id;
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElem.append(...tasksElems);

  Array.from(document.querySelectorAll(".list__item-checkbox")).forEach(
    (elem) => addEventListener("click", updateTaskStatus)
  );
};
export default renderTasks;
