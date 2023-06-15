// Добавьте обработчик на клик по кнопке, который сработает только один раз</p>
// <p><b>Основные требования:</b></p>
// <li>Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'click' на кнопку с классом <code>.single-use-btn</code></li>
// <li>Для назначения обработчика используйте <code>addEventListener</code></li>
// <li>При клике на кнопку выведите в консоль текст <code>clicked</code></li>
// <li>при втором и следующих кликах текст выводиться не должен. Рекомендация - нужно отменить обработчик при первом клике
const singleClic = () => {
  console.log("clicked");
  document
    .querySelector(".single-use-btn")
    .removeEventListener("click", singleClic);
};
document.querySelector(".single-use-btn").addEventListener("click", singleClic);
