/*
const weatherDiv = document.querySelector("#weather");
const button = document.querySelector("button");

button.addEventListener("click", sendRequest);

function sendRequest() {
  fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58')
    .then((response) => response.json())
    .then((data) => {
      const weatherData = data.properties.timeseries;

      // Opprett en liste over værdata
      const weatherList = weatherData.map((weather) => {
        return `
          <li>
            <p>Dato: ${weather.time}</p>
            <p>Temperatur: ${weather.data.instant.details.air_temperature}°C</p>
            <p>Vindhastighet: ${weather.data.instant.details.wind_speed} m/s</p>
          </li>
        `;
      });

      // Oppdater #weather-div med værdataene
      weatherDiv.innerHTML = `
        <h2>Værmeldinger:</h2>
        <ul>
          ${weatherList.join("")}
        </ul>
      `;
    })
    .catch((error) => {
      // Håndter feil
      weatherDiv.textContent = "Kunne ikke hente værdata: " + error;
    });
}
*/












const weatherDiv = document.querySelector("#weather");
const button = document.querySelector("button");
const select = document.querySelector("select");
let days = [];
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => sendRequest(coordinates[0]));
btn2.addEventListener("click", () => sendRequest(coordinates[1]));
btn3.addEventListener("click", () => sendRequest(coordinates[2]));


window.onload = function() {
    sendRequest();
  }  
select.addEventListener("change", showSelectedDay);

function sendRequest() {
  fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58')
    .then((response) => response.json())
    .then((data) => {
      const weatherData = data.properties.timeseries;

      // Create a list of days
      days = weatherData.reduce((days, weather) => {
        const date = new Date(weather.time).toDateString();

        // Check if the day exists
        let day = days.find((day) => day.date === date);
        if (!day) {
          day = { date, hours: [] };
          days.push(day);
        }

        // Add the hour to the day
        day.hours.push({
          time: new Date(weather.time).toLocaleTimeString(),
          temperature: weather.data.instant.details.air_temperature,
          windSpeed: weather.data.instant.details.wind_speed,
        });

        return days;
      }, []);

      // Create a list of day options for the select element
      const dayOptions = days.map((day) => {
        return `
          <option value="${day.date}">${day.date}</option>
        `;
      });

      // Update the select element with the day options
      select.innerHTML = `<option value="">Velg en dag</option>` + dayOptions.join("");
    })
    .catch((error) => {
      // Handle errors
      weatherDiv.textContent = "Could not fetch weather data: " + error;
    });
}

function showSelectedDay() {
  // Get the selected day
  const selectedDay = select.value;

  // Get the information for the selected day
  const day = days.find((day) => day.date === selectedDay);
  if (!day) {
    weatherDiv.innerHTML = "";
    return;
  }

  // Create a list of hours for the selected day
  const hourList = day.hours.map((hour) => {
    return `
      <li>
        <p>Time: ${hour.time}</p>
        <p>Temperature: ${hour.temperature}°C</p>
        <p>Wind speed: ${hour.windSpeed} m/s</p>
      </li>
    `;
  });

  // Update the #weather-div with the selected day and hours
  weatherDiv.innerHTML = `
    <h2>Vær raport:</h2>
    <p>Dag: ${selectedDay}</p>
    <ul>
      ${hourList.join("")}
    </ul>
  `;
}














/*
const weatherDiv = document.querySelector("#weather");
const fetchWeatherButton = document.querySelector("#fetch-weather-button");

fetchWeatherButton.addEventListener("click", () => {
  // URL til APIet
  const apiUrl = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58";

  // Send request til APIet
  fetch(apiUrl)
    .then(response => {
      // Kontroller at responsen er i 200-status (OK)
      if (!response.ok) {
        throw new Error("Could not fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      // Bruk dataene til å oppdatere #weather-div
      weatherDiv.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      // Håndter feil
      weatherDiv.textContent = "Kunne ikke hente værdata: " + error;
    });
});
*/

/*
// Send a request to the API
async function sendRequest() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Organize data into days
  const days = {};
  data.properties.timeseries.forEach((time) => {
    const date = new Date(time.time);
    const day = date.toLocaleDateString();
    if (!days[day]) {
      days[day] = [];
    }
    days[day].push(time);
  });

  // Display data on the page
  const container = document.querySelector('.container');
  Object.entries(days).forEach(([day, times]) => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');

    const dayHeader = document.createElement('div');
    dayHeader.classList.add('day-header');
    dayHeader.innerText = day;
    dayHeader.addEventListener('click', () => toggleDayInfo(dayElement));
    dayElement.appendChild(dayHeader);

    const dayInfo = document.createElement('div');
    dayInfo.classList.add('day-info');
    times.forEach((time) => {
      const hour = document.createElement('div');
      hour.classList.add('hour');
      hour.innerText = new Date(time.time).toLocaleTimeString();
      hour.addEventListener('click', () => displayWeatherInfo(time));
      dayInfo.appendChild(hour);
    });
    dayElement.appendChild(dayInfo);

    container.appendChild(dayElement);
  });
}

// Display or hide detailed information for a day
function toggleDayInfo(dayElement) {
  const dayInfo = dayElement.querySelector('.day-info');
  dayInfo.style.display = dayInfo.style.display === 'none' ? 'block' : 'none';
}

// Display detailed weather information for a specific hour
function displayWeatherInfo(time) {
  alert(`Temperature: ${time.data.instant.details.air_temperature}`);
}

sendRequest();

*/

//Use a fetch API in a function

/*
function sendRequest() {
    
    fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58')
        .then((response) => response.json())
        .then((data) => showWeather(data) ); 

        //Her kommer koden der du forandrer HTML koden din med javascript og document.getElementById("");
        console.log(data.properties.timeseries[0].data.instant.details.air_temperature));

        let temp_now = data.properties.timeseries[0].data.instant.details.air_temperature;

}

function showWeather(data) {
    console.log(data.properties.timeseries[0].data.instant.details.air_temperature);
    let temp_now = data.properties.timeseries[0].data.instant.details.air_temperature;
}
*/
