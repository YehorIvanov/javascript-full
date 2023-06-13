// С помощью JavaScript измените классы на элементах в соответствии с условиями ниже
// Основные требования:
// <li>Напишите ф-цию <code>manageClasses</code>, которая делает следующее:</li>
// <li>Должна добавить класс "selected" к элементу с классом "one"</li>
// <li>Должна удалить класс "selected" с элемента с классом "two"</li>
// <li>Должна переключить (toggle) класс "three_done" у элемента с классом "three"</li>
// <li>Должна добавить класс "another-class" для элемента с классом "four" если на нем есть класс "some-class"
// <li>После того, как ф-ция отработает, HTML должен измениться следующим образом:
// <li>Ф-ция должна быть в файле <code>index.js</code> и экспортироваться из него под своим именем

export const manageClasses = () => {
  document.querySelector(".one").classList.add("selected");
  document.querySelector(".two").classList.remove("selected");
  document.querySelector(".three").classList.toggle("three_done");
  if (document.querySelector(".four").classList.contains("some-class")) {
    document.querySelector(".four").classList.add("another-class");
  }
};
// manageClasses();
