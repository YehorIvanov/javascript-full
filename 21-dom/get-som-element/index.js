// С помощью JavaScript найдите элемент на странице
// <p>Основные требования:</p>
// <li><code>HTML</code> находится в редакторе ниже</li>
// <li>DOM элементы на странице ищите с помощью метода <code>document.querySelector</code></li>
// <li>Напишите ф-цию <code>getTitleElement</code>, которая найдет на странице элемент с классом <code>.title</code>, выведет найденый элемент в консоль с помощью <code>console.dir(titleElem)</code> и вернет его</li>
// <li>Напишите ф-цию <code>getInputElement</code>, которая найдет на странице input c типом <code>text</code> выведет найденый элемент в консоль с помощью <code>console.dir(inputElem)</code> и вернет его</li>
// <li>Ф-ции должны быть в файле <code>index.js</code> и экспортироваться из него под своими именами</li>

export function getTitleElement() {
  const titleElem = document.querySelector(".title");
  console.dir(titleElem);
  return titleElem;
}

export const getInputElement = () => {
  const inputElem = document.querySelector("input");
  console.dir(inputElem);
  return inputElem;
};
