// Добавьте возможность сортировки задач в Todo List</p>
//   <li>Дизайн в файле <a target="_blank" href="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson22/hw1/design.png">design.png</a></li>
//   <li>Как начальный код использовать решение из <a href="/courses/javascript-full/tasks/2782" target="_blank">урока 23</a></li>
//   <li>Выполненные задачи должны быть внизу, активные вверху</li>
//   <li>Выполненные задачи должны сортироваться по дате выполнения (только что завершенная задача должна быть вверху среди выполненных)</li>
//   <li>Не выполненные (активные) задачи должны сортироваться по дате добавления (самые новые вверху среди не выполненных)</li>
//   <li>Для реализации задачи метод sort нужно использовать один раз (!)

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
const setIdsAndDateForTasks = () => {
  let tempDate = new Date().getTime();
  tasks.forEach((elem) => {
    if (elem.id === undefined) {
      // eslint-disable-next-line no-param-reassign
      elem.id = getNewID();
    }
    if (elem.date === undefined || elem.date === tempDate) {
      // eslint-disable-next-line no-param-reassign
      elem.date = tempDate;
      tempDate += 1;
    }
  });
};

function renderTasks(tasksList) {
  const listElem = document.querySelector(".list");
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .sort((a, b) => {
      if (a.done !== b.done) {
        return a.done - b.done;
      }
      return b.date.toString().localeCompare(a.date.toString());
    })
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      // eslint-disable-next-line no-use-before-define
      checkbox.addEventListener("click", updateTaskStatus);
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElem.append(...tasksElems);
  console.log("<=render=>");
  tasks.forEach((elem) => {
    console.log(elem.text, elem.done, elem.date);
  });
}
function updateTaskStatus(event) {
  console.log("click");
  console.log(event.target);
  tasks.find((elem) => elem.id === +event.target.dataset.id).done =
    event.target.checked;
  tasks.find((elem) => elem.id === +event.target.dataset.id).date =
    new Date().getTime();
  renderTasks(tasks);
}

function addTaskAction() {
  const inputElem = document.querySelector(".task-input");
  if (inputElem.value !== "") {
    tasks.push({
      text: inputElem.value,
      done: false,
      id: getNewID(),
      date: new Date().getTime(),
    });
    inputElem.value = "";
    renderTasks(tasks);
  }
}

document
  .querySelector(".create-task-btn")
  .addEventListener("click", addTaskAction);
setIdsAndDateForTasks();
document.addEventListener("DOMContentLoaded", () => {
  renderTasks(tasks);
});
