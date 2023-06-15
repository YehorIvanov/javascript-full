// Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'click' на все кнопки с классом <code>.pagination__page</code></li>
// <li>Для назначения обработчика используйте <code>addEventListener</code></li>
// <li>Передавайте в <code>addEventListener</code> для всех обработчиков одну и ту же ф-цию с именем <code>handleClick</code></li>
// <li>При клике на кнопку, нужно вывести в консоль данные из дата атрибута <code>data-page-number</code></li>
// <li>Для получения дата атрибута спользуйте объект <code>event
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};
document
  .querySelectorAll(".pagination__page")
  .forEach((elem) => elem.addEventListener("click", handleClick));
