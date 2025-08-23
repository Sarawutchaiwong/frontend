'use client';

import styles from './service.module.css';
import ServiceSlider from '../component/ServiceSlider';

const services = [
  {
    imgSrc: "/images/service1.png",
    title: "Real-time Updates",
    description: "Get instant access to current weather conditions, temperature, humidity, and wind speed for any location.",
    details: "Our real-time updates are sourced from multiple high-resolution weather models, ensuring you get the most accurate and up-to-the-minute information available. Pinpoint your location for hyper-local data."
  },
  {
    imgSrc: "/images/service2.png",
    title: "Hourly Forecasts",
    description: "Plan your day with confidence using our detailed hourly forecasts, including precipitation chances and temperature changes.",
    details: "Our hourly forecasts provide a granular look at the next 48 hours. Track temperature, wind, and precipitation probability with our easy-to-read charts and graphs."
  },
  {
    imgSrc: "/images/service3.png",
    title: "7-Day Outlook",
    description: "Stay ahead of the weather with our reliable 7-day forecasts, helping you prepare for upcoming conditions.",
    details: "Get a comprehensive overview of the week ahead. Our 7-day outlook includes daily high and low temperatures, weather conditions, and sunrise/sunset times."
  },
  {
    imgSrc: "/images/service4.png",
    title: "Severe Weather Alerts",
    description: "Receive timely notifications for severe weather events, ensuring your safety and preparedness.",
    details: "Our alert system is connected directly to national weather services. Receive push notifications for thunderstorms, tornadoes, hurricanes, and other severe weather warnings in your area."
  },
  {
    imgSrc: "/images/service5.png",
    title: "Interactive Maps",
    description: "Explore weather patterns with our interactive radar and satellite maps, visualizing real-time data.",
    details: "Our interactive maps allow you to visualize weather data in real-time. Layer radar, satellite, and temperature data to see the full picture. Animate past and future weather patterns."
  },
  {
    imgSrc: "/images/service6.png",
    title: "Historical Data",
    description: "Access past weather information and trends for analysis, research, or simply to satisfy your curiosity.",
    details: "Curious about the weather on a specific date? Access our extensive archive of historical weather data. Analyze trends, compare seasons, and explore weather history for any location."
  },
];

export default function Service() {
  return (
    <div className="container text-white py-5">
      <div className={`text-center p-5 rounded-3 ${styles.heroSection}`}>
        <h1 className="display-4 fw-bold">Comprehensive Weather Services</h1>
        <p className="lead">
          Your ultimate source for accurate and timely weather information, powered by advanced forecasting technology.
        </p>
      </div>

      <ServiceSlider services={services} />
    </div>
  );
}