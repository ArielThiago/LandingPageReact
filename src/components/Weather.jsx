import React, { useState, useEffect } from 'react';

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true';

        const getWeatherIcon = (code) => {
            if (code === 0) return '☀️'; // Céu limpo
            if ([1, 2, 3].includes(code)) return '⛅'; // Parcialmente nublado
            if ([45, 48].includes(code)) return '🌫️'; // Neblina
            if ([51, 53, 55].includes(code)) return '🌦️'; // Chuva leve
            if ([61, 63, 65].includes(code)) return '🌧️'; // Chuva
            if ([71, 73, 75].includes(code)) return '❄️'; // Neve
            if ([95, 96, 99].includes(code)) return '⛈️'; // Tempestade
            return '❓'; // Desconhecido
        };

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const weatherData = data.current_weather;
                if (weatherData) {
                    setWeather({
                        temperature: weatherData.temperature,
                        windspeed: weatherData.windspeed,
                        icon: getWeatherIcon(weatherData.weathercode),
                    });
                }
            })
            .catch((err) => {
                setError('Erro ao obter dados');
                console.error(err);
            });
    }, []);

    return (
        <div className="weather-card">
            <h2 className="weather-title">Clima Atual</h2>
            <div className="weather-details">
                {error ? (
                    <p className="weather-error">{error}</p>
                ) : weather ? (
                    <>
                        <p className="weather-icon">{weather.icon}</p>
                        <p className="weather-info">Temperatura: {weather.temperature}°C</p>
                        <p className="weather-info">Vento: {weather.windspeed} km/h</p>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            </div>
        </div>
    );
}