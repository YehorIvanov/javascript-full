// Попрактикуемся с обработчиками на изменение состояния чекбокса</p>
// <h4>Основные требования:</h4>
// <li>Пример разметки в редакторе</li>
// <li>Повесь обработчик события 'change' на чекбокс с классом <code>.task-status</code></li>
// <li>Для назначения обработчика используй <code>addEventListener</code></li>
// <li>При клике на чекбокс выводите в консоль его состояние - <code>true</code>, если чекбокс отмечен и <code>false</code>, если нет</li>
// <li>Состояние (<code>true</code> / <code>false</code>) чекбокса  можно получить через свойство <code>checked</code> DOM элемента</li>
// <li>Ради интереса, проверь, чему равно значение свойства <code>value</code> DOM элемента (<code>checkboxElem.value</code>) при разном состоянии чекбокса

const checkboxElement = document.querySelector(".task-status");
const checkboxEvent = () => {
  console.log(checkboxElement.checked);
};
checkboxElement.addEventListener("change", checkboxEvent);
