const clockElement = document.querySelector("div#clock");
const dateElement = document.querySelector("div#date");

function getClock(datetime) {
    const localTime = new Date(datetime);

    const hours = String(localTime.getHours()).padStart(2, "0");
    const minutes = String(localTime.getMinutes()).padStart(2, "0");
    const seconds = String(localTime.getSeconds()).padStart(2, "0");

    const year = localTime.getFullYear();
    const month = String(localTime.getMonth() + 1).padStart(2, "0");
    const day = String(localTime.getDate()).padStart(2, "0");

    dateElement.innerText = `${year}-${month}-${day}`;
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

async function setLocationTime(lat, lon) {
    try {
        const response = await fetch('/.netlify/functions/getTimeZone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ lat, lon })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }

        // 매초 datetime을 업데이트합니다.
        setInterval(() => getClock(data.datetime), 1000);
    } catch (error) {
        console.error('Error fetching time zone:', error);
    }
}

navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLocationTime(lat, lon);
}, error => {
    console.error('Error getting geolocation:', error);
    // 기본적으로 UTC 시간을 표시
    const defaultDatetime = new Date().toISOString();
    setInterval(() => getClock(defaultDatetime), 1000);
});
