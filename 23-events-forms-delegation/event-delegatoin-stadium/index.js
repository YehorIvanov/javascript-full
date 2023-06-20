// Отобрази координаты выбранного места на стадионе по клику на это масто</p>
// <p>Дизайн в файле <a href="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson23/task2/design.png" target="_blank">design.png</a></p>
// <p><code>CSS</code> и стартовый <code>HTML</code> находятся в редакторе</p>
// <h4>Основные требования:</h4>
// <li>Отрисуй 3 сектора стадиона по 100 мест в каждом (10 х 10). Сектора нумеруются слева направо (1..3). Места нумеруются слева направо (1..10), ряды (CSS класс <code>.sector__line</code>) сверху вниз (1..10)</li>
// <li>По клику мыши по месту, должны отобразиться координаты места в отведенном для этого блоке. Формат текста <code>S 2 - L 7 - S 3</code>. Cледи за пробелами</li>
// <li>Секторы - CSS класс <code>.sector</code>, сидения - CSS класс <code>.sector__seat</code>, табло - CSS класс <code>.board</code>

// const arenaElem = document.querySelector(".arena");

// const sectorLineElem = document.createElement("div");
// sectorLineElem.classList.add("sector__line");

// sectorElem.classList.add("sector");
const showSeatNumber = (event) => {
  console.log(event.target.dataset);
  document.querySelector(".board__selected-seat").innerHTML =
    event.target.dataset.seat;
};

const arenaRender = () => {
  for (let sector = 1; sector < 4; sector += 1) {
    console.log(sector);
    const sectorElem = document.createElement("div");
    sectorElem.classList.add("sector");
    for (let line = 1; line < 11; line += 1) {
      const sectorLineElem = document.createElement("div");
      sectorLineElem.classList.add("sector__line");
      for (let seat = 1; seat < 11; seat += 1) {
        const seatElem = document.createElement("div");
        seatElem.classList.add("sector__seat");
        seatElem.addEventListener("click", showSeatNumber);
        seatElem.dataset.seat = `S ${sector} - L ${line} - S ${seat}`;
        sectorLineElem.appendChild(seatElem);
      }
      sectorElem.appendChild(sectorLineElem);
    }
    document.querySelector(".arena").appendChild(sectorElem);
  }
};

arenaRender();

// sectorLineElem.appendChild(seatElem);
// sectorElem.appendChild(sectorLineElem);
