'use client';
import { useState } from 'react';
import styles from './dashboard.module.css';
import { Sun, Cloud, CloudDrizzle, CloudRain, CloudSnow, Wind } from 'react-feather';

const weatherIcons = {
  Sunny: <Sun size={48} />,
  Cloudy: <Cloud size={48} />,
  Drizzle: <CloudDrizzle size={48} />,
  Rainy: <CloudRain size={48} />,
  Snowy: <CloudSnow size={48} />,
};

const dailyForecast = [
  { day: 'Mon', temp: 28, condition: 'Sunny' },
  { day: 'Tue', temp: 26, condition: 'Cloudy' },
  { day: 'Wed', temp: 24, condition: 'Drizzle' },
  { day: 'Thu', temp: 22, condition: 'Rainy' },
  { day: 'Fri', temp: 20, condition: 'Snowy' },
  { day: 'Sat', temp: 25, condition: 'Cloudy' },
  { day: 'Sun', temp: 29, condition: 'Sunny' },
];

export default function Dashboard() {
  const [city, setCity] = useState('Bangkok');
  const [currentWeather, setCurrentWeather] = useState({
    temp: 32,
    condition: 'Sunny',
    humidity: 60,
    wind: 10,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, you would fetch weather data here
    console.log(`Searching for weather in ${city}`);
  };

  return (
    <div className={styles.dashboard}>
    
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>RainCane</h1>
          <p className={styles.subtitle}>Your Daily Weather Companion</p>
          <p className={styles.description}>
            Get accurate and up-to-date weather information online.
          </p>

        </div>
      </div>
      
      <main className={styles.mainContent}>

        <div className={styles.forecast}>
          <h2>7-Day Forecast</h2>
          <div className={styles.dailyForecast}>
            {dailyForecast.map((day, index) => (
              <div key={index} className={styles.forecastItem}>
                <p>{day.day}</p>
                <div className={styles.forecastIcon}>{weatherIcons[day.condition]}</div>
                <p>{day.temp}°C</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.highlights}>
          <h2>Weather Highlights</h2>
          <ul>
            <li>
              <p><strong>UV Index:</strong> Low (2)</p>
            </li>
            <li>
              <p><strong>Sunrise:</strong> 6:00 AM</p>
            </li>
            <li>
              <p><strong>Sunset:</strong> 6:30 PM</p>
            </li>
            <li>
              <p><strong>Pollen Count:</strong> Moderate</p>
            </li>
          </ul>
        </div>
        

        <div className={styles.highlights}>
          <h2>Air Quality</h2>
          <ul>
            <li>
              <p><strong>PM2.5:</strong> 15 µg/m³ (Good)</p>
            </li>
            <li>
              <p><strong>Ozone:</strong> 40 ppb (Moderate)</p>
            </li>
            <li>
              <p><strong>NO2:</strong> 10 ppb (Good)</p> 
            </li>
          </ul>
        </div>


        <div className={styles.highlights}>
          <h2>Precipitation</h2>
          <ul>
            <li>
              <p><strong>Chance of Rain:</strong> 30%</p>
            </li>
            <li>
              <p><strong>Accumulation:</strong> 0.5 mm</p> 
            </li>
            <li>
              <p><strong>Last 24h:</strong> 0.2 mm</p>
            </li>
          </ul>
        </div>
        

        
      </main>
    </div>
  );
}
