const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const { lat, lon } = JSON.parse(event.body);

    // 위도와 경도에 따라 시간대 URL 설정 (근사치)
    const url = `http://worldtimeapi.org/api/timezone/Etc/GMT${Math.sign(lon) >= 0 ? '+' : ''}${Math.round(lon/15)}`;

    try {
        // API 호출
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Error fetching time zone data:', error.message);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ error: 'Failed to fetch time zone data: ' + error.message }),
        };
    }
};
