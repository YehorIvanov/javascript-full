// Программист Петя разрабатывает платформу для изучения английского языка. Ему необходимо добавить регистрацию пользователей на сайт. Для этого нужно уметь считывать данные формы</p>
// <p>Визуализация задания в файле <a href="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson23/task1/example.png" target="_blank">example.png</a></p>
// <p>В редакторе чуть более детально расписано, как можно получить данные с формы в виде объекта и находится начальный код</p>
// <h4>Основные требования:</h4>
// <li>После подтверждения формы вывести значение полей формы в <code>alert</code> в виде объекта</li>
// <li>Формат объекта <code>{"inputName":"inputValue", ...}</code></li>
// <li>Если инпут не удовлетворяет атрибуты валидации, он должен обводиться красной границей</li>
// <li>При изменении значений в полях ввода, если значение поля не валидно, нужно показать сообщение про ошибку ввода. Ошибку вывести под соответствующим полем ввода и отобразить красным цветом</li>
// <li>Правила валидаций: поле <code>email</code> должно быть не пустое (текст ошибки 'Required') и содержать символ <code>'@'</code> (текст ошибки 'Should be an email')</li>
// <li>Правила валидаций: Поле <code>password</code> должно быть не пустое (текст ошибки 'Required')</li>

// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

const emailInputElem = document.querySelector("#email");
const passwordInputElem = document.querySelector("#password");
const emailErrorElem = document.querySelector(".error-text_email");
const passwordErrorElem = document.querySelector(".error-text_password");
const formElem = document.querySelector(".login-form");

const isRequired = (value) => (value ? undefined : "Required");
const isEmail = (value) =>
  value.includes("@") ? undefined : "Should be an Email";

const onEmailChenge = (event) => {
  const errorText = [isRequired, isEmail]
    .map((validator) => validator(event.target.value))
    .filter((errorText) => errorText)
    .join(", ");
  emailErrorElem.textContent = errorText;
};
const onPasswordChenge = (event) => {
  const errorText = [isRequired]
    .map((validator) => validator(event.target.value))
    .filter((errorText) => errorText)
    .join(", ");
  passwordErrorElem.textContent = errorText;
};
const onFormSubmit = (event) => {
  event.preventDefault();
  console.log(Object.fromEntries(new FormData(formElem)));
  alert(JSON.stringify(Object.fromEntries(new FormData(formElem))));
};
emailInputElem.addEventListener("input", onEmailChenge);
passwordInputElem.addEventListener("input", onPasswordChenge);
formElem.addEventListener("submit", onFormSubmit);
