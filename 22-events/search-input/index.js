// При клике на кнопку, считайте текст из поля ввода</p>
// <p><b>Основные требования:</b></p>
// <li>Пример разметки в редакторе ниже</li>
// <li>При клике на кнопку с классом <code>.search__btn</code>, выведите текст из инпута с классом <code>.search__input</code> в консоль</li>
// <li>Для назначения обработчика используйте <code>addEventListener</code>

// const searchBtnElem = document.querySelector(".search__btn");
// const searchInputElem = document.querySelector(".search__input");
// searchBtnElem.addEventListener("click", function () {
//   console.log(searchInputElem.value);
// });

document.querySelector(".search__btn").addEventListener("click", function () {
  console.log(document.querySelector(".search__input").value);
});
