// Сохраняем информацию на HTML элементах</p>
// <p>Основные требования:</p>
// <li>Стартовый <code>HTML</code> находится в редакторе ниже</li>
// <li>Напишите ф-цию <code>squaredNumbers</code>, которая считывает число из дата атрибута и записывает квадрат этого числа в другой дата атрибут</li>
// <li>Ищите элементы с классом <code>.number</code></li>
// <li>Считайте число из атрибута "data-number". Запишите квадрат этого числа в атрибут "data-squared-number"</li>
// <li>Считывайте и записывайте дата атрибуты с помощью свойства <code>dataset</code> у DOM элемента</li>
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем</li>

export const squaredNumbers = () => {
  //   document.querySelectorAll(".number")[0].dataset.squaredNumber =
  //     document.querySelectorAll(".number")[0].dataset.number *
  //     document.querySelectorAll(".number")[0].dataset.number;

  document.querySelectorAll(".number").forEach((value, key) => {
    document.querySelectorAll(".number")[key].dataset.squaredNumber =
      document.querySelectorAll(".number")[key].dataset.number *
      document.querySelectorAll(".number")[key].dataset.number;
  });
};
