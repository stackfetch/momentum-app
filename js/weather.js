const _weather = document.querySelector("#weather div:first-child");
const API_KEY = "f756adc58325812ceba14650b426b1b8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.createElement("img");
      const div = document.createElement("div");
      const city = document.createElement("p");
      const desc = document.createElement("p");

      icon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
      icon.classList.add("weather-icon");
      city.innerText = data.name;
      city.classList.add("weather-city");
      desc.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      desc.classList.add("weather-desc");
      div.appendChild(city);
      div.appendChild(desc);

      _weather.appendChild(icon);
      _weather.appendChild(div);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
