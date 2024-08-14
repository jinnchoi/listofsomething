require('dotenv').config();

exports.handler = async function(event, context) {
    // node-fetch 모듈을 동적으로 import
    const fetch = (await import('node-fetch')).default;
    
    const API_KEY = process.env.WEATHER_API_KEY;
    const { lat, lon, lang = 'en' } = event.queryStringParameters;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&units=metric`;

    console.log("API Request URL:", url);

    try {
        const response = await fetch(url);

        // 응답 상태 코드 및 응답 텍스트 출력
        const responseText = await response.text();
        console.log("Response status:", response.status);
        console.log("Response Text:", responseText);

        // 상태 코드가 200이 아닌 경우 오류 처리
        if (response.status !== 200) {
            throw new Error(`Failed to fetch weather data: ${response.status}`);
        }

        // JSON으로 파싱하기 전에 응답이 JSON인지 확인
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
