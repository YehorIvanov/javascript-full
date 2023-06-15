// Напишите инструмент для демонстрации работы событий</p>
// <p>Основные требования:</p>
// <li><code>CSS</code> и пример разметки находятся в редакторе ниже</li>
// <li>Дизайн в файле <a target="_blank" href="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson22/task1/design.png">design.png</a></li>
// <li>По клику на квадрат в списке попадает список элементов, на которых сработали обработчики: серый - на погружении, зеленый - на всплытии. Добавляйте в <code>.events-list</code> спаны вида <code>&lt;span style="color: grey; margin-left: 8px;"&gt;div&lt;/span&gt;</code></li>
// <li>По умолчанию <code>.events-list</code> должен быть пуст</li>
// <li>Кнопка "Clear" чистит поле с событиями</li>
// <li>Кнопка "Attach handlers" включает обработчики для квадратов</li>
// <li>Кнопка "Remove handlers" выключает обработчики для квадратов</li>
// <li>По умолчанию все обработчики должны быть включены
const logTarget = (text, color) => {
  document.querySelector(
    ".events-list"
  ).innerHTML += `<span style="color: ${color}; margin-left: 8px;"> ${text} </span>`;
};

const clearAction = () => {
  document.querySelector(".events-list").innerHTML = "";
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "grey");
const logGreyP = logTarget.bind(null, "P", "grey");
const logGreySpan = logTarget.bind(null, "SPAN", "grey");

const attachHandlersAction = () => {
  document
    .querySelector(".rect_div")
    .addEventListener("click", logGreyDiv, true);
  document.querySelector(".rect_div").addEventListener("click", logGreenDiv);
  document.querySelector(".rect_p").addEventListener("click", logGreyP, true);
  document.querySelector(".rect_p").addEventListener("click", logGreenP);
  document
    .querySelector(".rect_span")
    .addEventListener("click", logGreySpan, true);
  document.querySelector(".rect_span").addEventListener("click", logGreenSpan);
};
const removeHandlersAction = () => {
  document
    .querySelector(".rect_div")
    .removeEventListener("click", logGreyDiv, true);
  document.querySelector(".rect_div").removeEventListener("click", logGreenDiv);
  document
    .querySelector(".rect_p")
    .removeEventListener("click", logGreyP, true);
  document.querySelector(".rect_p").removeEventListener("click", logGreenP);
  document
    .querySelector(".rect_span")
    .removeEventListener("click", logGreySpan, true);
  document
    .querySelector(".rect_span")
    .removeEventListener("click", logGreenSpan);
};

document.querySelector(".clear-btn").addEventListener("click", clearAction);
document
  .querySelector(".remove-handlers-btn")
  .addEventListener("click", removeHandlersAction);
document
  .querySelector(".attach-handlers-btn")
  .addEventListener("click", attachHandlersAction);

attachHandlersAction();
