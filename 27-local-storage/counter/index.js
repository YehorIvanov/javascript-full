const containerElem = document.querySelector(".container");
const displayElem = document.querySelector(".display");

const renderCounter = () => {
  let counter = localStorage.getItem("counter");
  if (counter === null) {
    counter = 0;
    localStorage.setItem("counter", counter);
  }
  displayElem.innerHTML = counter;
};

const onButtonClick = (event) => {
  switch (event.target.dataset.id) {
    case "+":
      localStorage.setItem("counter", +localStorage.getItem("counter") + 1);
      renderCounter();
      break;
    case "-":
      localStorage.setItem("counter", +localStorage.getItem("counter") - 1);
      renderCounter();
      break;
    default:
      break;
  }
};

const initCounter = () => {
  containerElem.addEventListener("click", onButtonClick);
  renderCounter();
  window.addEventListener("storage", renderCounter);
};

document.addEventListener("DOMContentLoaded", initCounter);
