// С помощью JavaScript найдите все элементы на странице, которые удовлетворяют условие селектора
// <p>Основные требования:</p>
// <li><code>HTML</code> находится в редакторе ниже</li>
// <li>DOM элементы на странице ищите с помощью метода <code>document.querySelectorAll</code></li>
// <li>Напишите ф-цию <code>getItemsList</code>, которая найдет на странице все элементы с классом <code>.technology</code>, выведет полученные элементы в консоль с помощью <code>console.dir(elementsList)</code> и вернет список из ф-ции</li>
// <li>Напишите ф-цию <code>getItemsArray</code>, которая найдет на странице все элементы с классом <code>.tool</code>, преобразует полученный список в массив, выведет этот массив в консоль с помощью <code>console.dir(elementsArray)</code> и вернет массив из ф-ции. Преобразуйте полученный список (<code>NodeList</code>) в массив с помощь <code>Array.from</code></li>
// <li>Ф-ции должны быть в файле <code>index.js</code> и экспортироваться из него под своими именами</li>

export const getItemsList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll(".tool"));
  console.dir(elementsArray);
  return elementsArray;
};
