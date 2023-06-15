// Добавьте обработчик на изменение состояния чекбокса</p>
// <p><b>Основные требования:</b></p>
// <li>Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'change' на чекбокс с классом <code>.task-status</code></li>
// <li>Для назначения обработчика используйте <code>addEventListener</code></li>
// <li>При клике на чекбокс выводите в консоль его состояние - <code>true</code>, если чекбокс отмечен и <code>false</code>, если нет</li>
// <li>Состояние (<code>true</code> / <code>false</code>) чекбокса  можно получить через свойство <code>checked</code> DOM элемента</li>
// <li>Состояние чекбокса нужно получить с помощью объекта <code>event</code> (<code>event.target.checked</code>)

const checkboxEvent = (event) => {
  console.log(event.target.checked);
};
document
  .querySelector(".task-status")
  .addEventListener("change", checkboxEvent);
