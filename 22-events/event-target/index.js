// Достаньте текст с кнопки при клике на нее</p>
// <p><b>Основные требования:
// <li>Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'click' обе кнопки с классом <code>btn</code></li>
// <li>Для назначения обработчиков используйте <code>addEventListener</code></li>
// <li>Передавайте в <code>addEventListener</code> для обоих обработчиков одну и ту же ф-цию с именем <code>handleClick</code></li>
// <li>При клике на кнопку, нужно вывести в консоль текст этой кнопки</li>
// <li>Используйте аргумент <code>event</code> у ф-ции <code>handleClick</code>, чтобы получить доступ к кнопке через <code>event.target</code></li>
// <li>Текст с кнопки считайте с помощью <code>textContent</code>. То есть текст вам буде доступен через <code>event.target.textContent</code> внутри <code>handleClick</code>

const handleClick = (event) => {
  console.log(event.target.textContent);
};
document
  .querySelectorAll(".btn")
  .forEach((elem) => elem.addEventListener("click", handleClick));
