// С помощью JavaScript найдите элемент задайте ему дочерние элементы
// <p>Основные требования:</p>
// <li>DOM элементы на странице ищите с помощью метода <code>document.querySelector</code></li>
// <li>Напишите ф-цию <code>setButton</code>, которая принимает единственный аргумент <code>buttonText</code>(строка)</li>
// <li><code>setButton</code> должна найти на странице элемент <code>body</code> и установит в него строку <code>'&lt;button&gt;button text&lt;/button&gt;'</code>, где button text - это строка, полученная в аргументе ф-ции</li>
// <li>Содержимое <code>body</code> устанавливайте с помощью <code>innerHTML</code></li>
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем</li>
// <li>Дополнительно. Попробуйте вставить ту же строку в <code>body</code>, но с помощью <code>textContent</code>. Как видите, <code>innerHTML</code> создал HTML кнопку, а <code>textContent</code> вставил текст "как есть"</li>

export const setButton = (buttonText) => {
  const bodyElement = document.querySelector("body");
  const buttonElement = document.createElement("button");
  buttonElement.innerHTML = buttonText;
  bodyElement.appendChild(buttonElement);
};
