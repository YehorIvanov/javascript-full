// fetch("https://jsonplaceholder.typicode.com/todos/3")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error.message));

async function getDateNew(url) {
  let json;
  try {
    const res = await fetch(url);
    json = await res.json();
  } catch (e) {
    console.error(e.message);
  }
  return json;
}

// const getDate = (url) =>
//   new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => resolve(json))
//       .catch((error) => reject(error));
//   });

function getWindDirection(degrees) {
  if (degrees >= 337.5 || degrees < 22.5) {
    return "Північний";
  }
  if (degrees >= 22.5 && degrees < 67.5) {
    return "Північно-східний";
  }
  if (degrees >= 67.5 && degrees < 112.5) {
    return "Східний";
  }
  if (degrees >= 112.5 && degrees < 157.5) {
    return "Південно-східний";
  }
  if (degrees >= 157.5 && degrees < 202.5) {
    return "Південний";
  }
  if (degrees >= 202.5 && degrees < 247.5) {
    return "Південно-західний";
  }
  if (degrees >= 247.5 && degrees < 292.5) {
    return "Західний";
  }

  return "Північно-західний";
}
function getCurrentTime() {}

const wether1 =
  "https://api.weatherapi.com/v1/forecast.json?key=e60f41f634e4455792b152403232009&q=kiev&days=1&aqi=yes&alerts=yes";
const wetherKievUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=e60f41f634e4455792b152403232009&q=Kyiv&days=1&aqi=yes&alerts=yes";
const getWeather = async () => {
  const data = await getDateNew(wetherKievUrl);
  const bodyElem = document.querySelector("body");
  console.log(data);
  bodyElem.innerHTML = `В данний момент у ${data.location.name} досить ${
    data.current.condition.text
  }, температура  на вулиці ${data.current.temp_c} градуси. Відчувається як ${
    data.current.feelslike_c
  }. Відносна вологість повітря ${
    data.current.humidity
  }%.  Вітер ${getWindDirection(data.current.wind_degree)} ${
    data.current.wind_kph
  } км/год. `;
  bodyElem.style.fontSize = "32px";
  //   `${data.location.name}`;
};

getWeather();
// const data = await getDateNew(wether1);
// console.dir( await getDateNew(wether1));
