// С помощью JavaScript найдите элемент на странице и удалите его содержимое
// <p><b>Основные требования:</b></p>
// <li><code>HTML</code> находится в редакторе ниже</li>
// <li>DOM элементы на странице ищите с помощью метода <code>document.querySelector</code></li>
// <li>Напишите ф-цию <code>clearList</code>, которая должна найти на странице элемент <code>.categories</code> и установить его содержимое как пустую строку <code>''</code> с помощью <code>innerHTML</code></li>
// <li>Как видите, это один из способов удалить содержимое элемента</li>
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем</li>

export const clearList = () => {
  const categoriesElem = document.querySelector(".categories");
  categoriesElem.innerHTML = "";
};
