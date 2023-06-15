// Добавьте обработчик на изменение текста в инпуте</p>
// <p><b>Основные требования:</b></p>
// <li>Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'change' на инпут с классом <code>.text-input</code></li>
// <li>Для назначения обработчика используйте <code>addEventListener</code></li>
// <li>При вводе текста в поле ввода текст из инпута нужно вывести в консоль</li>
// <li>Текст из инпута нужно получить с помощью объекта <code>event</code> (<code>event.target.value</code>)

const handleClick = (event) => {
  console.log(event.target.value);
};
document
  .querySelectorAll(".text-input")
  .forEach((elem) => elem.addEventListener("change", handleClick));
