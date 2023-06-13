// С помощью JavaScript создай недостающие элементы формы
// <h4>Основные требования:</h4>
// <li>Стартовый <code>HTML</code> находится в редакторе</li>
// <li>Напиши функцию <code>finishForm</code>, которая должна дополнить логин форму</li>
// <li><code>finishForm</code> должна вставить в начало формы инпут текстового типа с <code>name="login"</code>
// <li><code>finishForm</code> должна изменить атрибут <code>type</code> с <code>text</code> на
// <code>password</code> для инпута с паролем</li>
// <li>После того, как ф-ция отработает, HTML должен измениться следующим образом:
// <div class="description">
// <script src="https://gist.github.com/andrii142/76f06b54593b10c4cd901ef4f1208e7c.js"></script>
// <div class="description">
// <script src="https://gist.github.com/andrii142/ef2117bb8f46951af3895010945d02b9.js"></script>
// <li>Функция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем

export const finishForm = () => {
  document
    .querySelector("form")
    .firstElementChild.setAttribute("type", "password");
  document.querySelector("form").prepend(document.createElement("input"));
  document.querySelector("form").firstElementChild.setAttribute("type", "text");
  document
    .querySelector("form")
    .firstElementChild.setAttribute("name", "login");
  //   login.setAttribute('type', 'text')
  // login.setAttribute('name', 'login')
};
finishForm();
