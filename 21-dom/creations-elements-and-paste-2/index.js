// С помощью JavaScript создайте недостающие элементы списка и добавьте их на свои места, чтобы дополнить список
// <p>Основные требования:</p>
// <li>Стартовый <code>HTML</code> находится в редакторе ниже</li>
// <li>Напишите ф-цию <code>finishList</code>, которая должна создать и добавить в список недостающие элементы<
// <li>Используйте <code>document.createElement</code> для создания элементов списка</li>
// <li>Текст в созданные элементы вставляйте с помощью <code>textContent</code></li>
// <li>Используйте методы <code>append</code>, <code>prepend</code>, <code>before</code>, <code>after</code> для вставки элементов на страницу</li>
// <li>После того, как ф-ция отработает, должен получиться список от 1 до 8.</li>
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем</li>


export const finishList = () => {
  const li1 = document.createElement('li');
  const li4 = document.createElement('li');
  const li6 = document.createElement('li');
  const li8 = document.createElement('li');
  li1.textContent = '1';
  li4.textContent = '4';
  li6.textContent = '6';
  li8.textContent = '8';
  const listElem = document.querySelector('.list');
  listElem.prepend(li1);
  listElem.children[2].after(li4);
  listElem.children[5].before(li6);
  listElem.append(li8);
}



// export const createButton = (buttonText) => {
//   const buttonElem = document.createElement("button");
//   buttonElem.textContent = buttonText;
//   const bodyElem = document.querySelector("body");
//   bodyElem.append(buttonElem);
// };
