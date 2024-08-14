require('dotenv').config();
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const API_KEY = process.env.WEATHER_API_KEY;
    const { lat, lon, lang = 'en' } = event.queryStringParameters;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`;

    console.log("API Request URL:", url);

    try {
        const response = await fetch(url);

        // 응답 데이터를 텍스트로 읽어서 출력
        const responseText = await response.text();
        console.log("Response Text:", responseText);

        // 텍스트를 JSON으로 파싱
        const data = JSON.parse(responseText);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: "Failed to fetch weather data" }),
        };
    }
};
