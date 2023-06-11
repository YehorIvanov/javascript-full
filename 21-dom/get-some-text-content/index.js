// HTML</code> находится в редакторе ниже</li>
// <li>DOM элементы на странице ищите с помощью метода <code>document.querySelector</code></li>
// <li>Напишите ф-цию <code>getTitle</code>, которая найдет на странице элемент с классом <code>.title</code> и вернет его текстовый контент с помощью <code>textContent</code></li>
// <li>Напишите ф-цию <code>getDescription</code>, которая найдет на странице элемент с классом <code>.about</code> и вернет его текстовый контент с помощью <code>innerText</code></li>
// <li>Напишите ф-цию <code>getPlans</code>, которая найдет на странице элемент с классом <code>.plans</code> и вернет его текстовый контент с помощью <code>innerHTML</code></li>
// <li>Напишите ф-цию <code>getGoal</code>, которая найдет на странице элемент с классом <code>.goal</code> и вернет его текстовый контент с помощью <code>outerHTML</code></li>
// <li>Ф-ции должны быть в файле <code>index.js</code> и экспортироваться из него под своими именами</li>

export function getTitle() {
  const titleElement = document.querySelector(".title");
  return titleElement.textContent;
}

export function getDescription() {
  const descriptionElement = document.querySelector(".about");
  return descriptionElement.innerText;
}

export function getPlans() {
  const plansElement = document.querySelector(".plans");
  return plansElement.innerHTML;
}

export function getGoal() {
  const goalElement = document.querySelector(".goal");
  return goalElement.outerHTML;
}
