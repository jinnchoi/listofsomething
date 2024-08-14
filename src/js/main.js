// 기존의 Weather_K import 제거
// import Weather_K from "./env/weather.js";

const lang = "en"; // Change language to English

function setTemperatureColor(temp) {
    let color;
    if (temp <= 0) {
        color = '#00f'; // Blue for freezing temperatures
    } else if (temp <= 15) {
        color = '#0cf'; // Light blue for cool temperatures
    } else if (temp <= 25) {
        color = '#0c0'; // Green for moderate temperatures
    } else if (temp <= 35) {
        color = '#ff0'; // Yellow for warm temperatures
    } else {
        color = '#f00'; // Red for hot temperatures
    }
    document.documentElement.style.setProperty('--temperature-color', color);
}

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Netlify Functions을 사용하여 날씨 정보를 가져옵니다.
    const url = `/.netlify/functions/getWeather?lat=${lat}&lon=${lon}&lang=${lang}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (!data || !data.name || !data.weather || !data.main) {
                console.error("Invalid weather data:", data);
                alert("Unable to fetch weather information.");
                return;
            }

            const city = document.querySelector("#weather .city");
            const weather = document.querySelector("#weather .weather-description");
            const temp = document.querySelector("#weather .temperature");

            city.innerText = `City: ${data.name}`;
            weather.innerText = `Weather: ${data.weather[0].description}`;
            temp.innerText = `Temperature: ${data.main.temp.toFixed(2)}°C`;

            setTemperatureColor(data.main.temp);

            const dateElement = document.querySelector("#date");
            const now = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} (${days[now.getDay()]})`;
            dateElement.innerText = formattedDate;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert("There was a problem fetching the weather information.");
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
});