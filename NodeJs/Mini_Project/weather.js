
import readline from 'readline/promises'

// Weathermap API Datails
const API_KEY = '27cf8d0c48df5f0809ecc450b5cff7'
const BASE_URL = 'https://api.openweathermap.org/data/3.0/weather';



//CLI Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=&{API_KEY}&units=metric`;      //Query String

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('city not found. Please check the city name. ')

        }
        const weatherData = await response.json();
        console.log(weatherData);
        console.log('weather Information: ');
        console.log(`city: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp} °C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity} %`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);

    }
    catch (error) {
        console.log(error);
    }
}
const city = await rl.question('Enter a city name to get its weather: ');
await getWeather(city);
rl.close();


// fetchAPI