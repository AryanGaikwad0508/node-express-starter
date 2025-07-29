const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log("Fetching from URL:", url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`${errorData.message} (code: ${errorData.cod})`);
        }

        const weatherData = await response.json();
        console.log('\nWeather Information:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp} °C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity} %`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);

    } catch (error) {
        console.error('Error:', error.message);
    }
};
