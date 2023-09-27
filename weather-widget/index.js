// https://api.openweathermap.org/data/2.5/weather?
const key = "32ca5b9dd9c59cd53ad21c4277ef0a63";

async function getWeatherData(city) {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=uk`
    );
    const parsedData = await data.json();
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error("getWeatherData err");
    console.error(e);
    return e;
  }
}
async function renderWeather(city) {
  const weatherData = await getWeatherData(city);
  const cityElem = document.querySelector(".weather__city");
  const temptElem = document.querySelector(".weather__temp");
  const humidityElem = document.querySelector(".weather__humidity");
  const windElem = document.querySelector(".weather__wind");
  const weatherIconElem = document.querySelector(".weather__icon");

  cityElem.innerHTML = weatherData.name;
  temptElem.innerHTML = `${Math.round(weatherData.main.temp)}°`;
  humidityElem.innerHTML = `${weatherData.main.humidity}%`;
  windElem.innerHTML = `${weatherData.wind.speed}m/s`;
  weatherIconElem.src = `img/${weatherData.weather[0].main}.png`;
  // console.log(cityElem, temptElem, humidityElem, windElem);
  // console.log(`sunrise ${new Date(weatherData.sys.sunrise * 1000)}`);
  // console.log(`sunset ${new Date(weatherData.sys.sunset * 1000)}`);
}
function onCityChange() {
  const city = document.querySelector(".search__input").value;

  renderWeather(city);
}
function initWeather(city) {
  renderWeather(city);
  document
    .querySelector(".search__input")
    .addEventListener("change", onCityChange);
  document
    .querySelector(".search__button")
    .addEventListener("click", onCityChange);
}
initWeather("kyiv");
