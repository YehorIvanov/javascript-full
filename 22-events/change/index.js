// Добавьте обработчик на изменение текста в инпуте</p>
// <p><b>Основные требования:
// <li>Пример разметки в редакторе ниже</li>
// <li>Повесьте обработчик события 'change' на инпут с классом <code>.text-input</code></li>
// <li>Для назначения обработчика используйте <code>addEventListener</code></li>
// <li>При вводе текста в поле ввода текст из инпута нужно вывести в консоль</li>
// <li>Текст из инпута можно получить через свойство <code>value</code> DOM элемента (<code>inputElem.value</code>)

const input = document.querySelector(".text-input");
input.addEventListener("change", function () {
  console.log(input.value);
});
