function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
}

function searchCity(city) {
  let apikey = "86etb03181f3f4bda15e2o0e83d08eaf";
  let apiurl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios.get(apiurl).then(change);
}

function change(response) {
  let city = response.data.city;
  //console.log(city);
  let temp = Math.round(response.data.temperature.current);
  //console.log(temp);
  let cond = response.data.condition.description;
  let icon = response.data.condition.icon_url;
  let hum = response.data.temperature.humidity;
  let wspeed = response.data.wind.speed;
}
