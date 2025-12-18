
const apikey = '5097f6c26db8b0f17571cc60961a4b9d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

async function checkWeather(){
    const city = 'Dhaka';
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apikey}`);
    const data = await response.json();
    console.log(data);
}

checkWeather();
