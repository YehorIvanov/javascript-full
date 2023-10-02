const hoursElem = document.querySelector(".clock__hours");
const minutesElem = document.querySelector(".сlock__minutes");
const secondsElem = document.querySelector(".сlock__seconds");

function renderTime() {
  const timeIsNow = new Date();
  hoursElem.innerHTML = timeIsNow.getHours();
  minutesElem.innerHTML = timeIsNow.getMinutes();
  secondsElem.innerHTML = timeIsNow.getSeconds();
  console.log(
    timeIsNow.getHours() +
      ":" +
      timeIsNow.getMinutes() +
      ":" +
      timeIsNow.getSeconds()
  );
}

setInterval(renderTime, 1000);
