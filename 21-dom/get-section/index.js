// Есть 2 <code>div</code>, в каждом по 3 <code>span</code>. Найдите <code>span</code> по дата атрибуту и определите его родителя
// <p>Основные требования:</p>
// <li>Стартовый <code>HTML</code> находится в редакторе ниже</li>
// <li>Напишите ф-цию <code>getSection</code>, которая принимает как единственный аргумент - число (<code>num</code>)
// <li>Найдите <code>span</code>, у которого значение атрибута <code>data-number</code> равно <code>num</code> и верните из ф-ции значение атрибута <code>data-section</code> у родительского для <code>span</code> элемента с классом <code>box</code></li>
// <li>Обратите внимание, что ф-ция принимает число, а значение атрибутов всегда строка. Не забывайте, что иногда необходимо привидение типов при сравнении</li>
// <li>Подсказка: чтобы найти нужный элемент по дата атрибуту, понадобится такой селектор <code>`span[data-number="${num}"]`</code></li>
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем</li>

export const getSection = (num) => {
  return document.querySelector(`[data-number="${num}"]`).parentElement.dataset
    .section;
};
