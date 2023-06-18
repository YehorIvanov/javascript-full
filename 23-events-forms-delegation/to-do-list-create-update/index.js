const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];
const getNewID = () => {
  return Math.floor(Math.random() * (998 - 1)) + 2 + new Date().getTime();
};
const setIdsForTasks = () => {
  tasks.forEach((elem) => {
    if (elem.id === undefined) {
      elem.id = getNewID();
    }
  });
};

const listElem = document.querySelector(".list");

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
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
};

const addTaskAction = () => {
  const inputElem = document.querySelector(".task-input");
  if (inputElem.value !== "") {
    tasks.push({
      text: inputElem.value,
      done: false,
      id: getNewID(),
    });
    inputElem.value = "";
    renderTasks(tasks);
  }
};

const updateTaskStatus = (event) => {
  console.log(event.target);
  tasks.find((elem) => elem.id === +event.target.dataset.id).done =
    event.target.checked;
  renderTasks(tasks);
};
setIdsForTasks();
renderTasks(tasks);

document
  .querySelector(".create-task-btn")
  .addEventListener("click", addTaskAction);
Array.from(document.querySelectorAll(".list__item-checkbox")).forEach((elem) =>
  addEventListener("click", updateTaskStatus)
);
