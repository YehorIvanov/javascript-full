// Добавьте обработчик на клик по кнопке</p>
// <p><b>Основные требования:</b></p>
// <li>Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'click' на кнопку с классом <code>.create-btn</code></li>
// <li>Для назначения обработчика используйте <code>addEventListener</code></li>
// <li>При клике на кнопку выведите в <code>alert</code> текст <code>done</code></li>

const button = document.querySelector(".create-btn");
button.addEventListener("click", function () {
  alert("done");
});
