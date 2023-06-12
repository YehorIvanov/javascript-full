// С помощью JavaScript создайте DOM элемент и добавьте его на страницу</p>
// <p>Основные требования:</p>
// <li>Напишите ф-цию <code>createButton</code>, которая принимает единственный аргумент <code>buttonText</code>(строка)</li>
// <li><code>createButton</code> должна создать DOM элемент <code>button</code> c помощью <code>document.createElement</code> и вставить его в body с помощью <code>append</code>. Текст кнопки передается в аргументе ф-ции <code>createButton</code></li>
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем</li>
// <li>Используйте <code>textContent</code> для назначения текста кнопке</li>
// <li>Пример работы: <code>createButton('Send Email')</code> добавит <code>&lt;button&gt;Send Email&lt;/button&gt;</code> в тело документа</li>

export const createButton = (buttonText) => {
  const buttonElem = document.createElement("button");
  buttonElem.textContent = buttonText;
  const bodyElem = document.querySelector("body");
  bodyElem.append(buttonElem);
};
