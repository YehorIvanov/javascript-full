// Отобрази координаты выбранного места на стадионе по клику на это масто</p>
// <p>Дизайн в файле <a href="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson23/task2/design.png" target="_blank">design.png</a></p>
// <p><code>CSS</code> и стартовый <code>HTML</code> находятся в редакторе</p>
// <h4>Основные требования:</h4>
// <li>Отрисуй 3 сектора стадиона по 100 мест в каждом (10 х 10). Сектора нумеруются слева направо (1..3). Места нумеруются слева направо (1..10), ряды (CSS класс <code>.sector__line</code>) сверху вниз (1..10)</li>
// <li>По клику мыши по месту, должны отобразиться координаты места в отведенном для этого блоке. Формат текста <code>S 2 - L 7 - S 3</code>. Cледи за пробелами</li>
// <li>Секторы - CSS класс <code>.sector</code>, сидения - CSS класс <code>.sector__seat</code>, табло - CSS класс <code>.board</code>

const arenaElem = document.querySelector(".arena");
console.log(arenaElem);
const sectorElem = document.createElement("div");
sectorElem.classList.add("sector");
console.log(sectorElem);
arenaElem.innerHTML = sectorElem;
