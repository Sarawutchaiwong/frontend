import Image from 'next/image';
import Link from 'next/link';
import styles from './service.module.css';

export default function Service() {
  return (
    <div className={styles.servicePage}>
      <div className={styles.heroSection}>
        <h1>Comprehensive Weather Services</h1>
        <p>Your ultimate source for accurate and timely weather information, powered by advanced forecasting technology.</p>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.serviceBlock}>
          <Image src="/images/service1.png" alt="Real-time Updates" width={100} height={100} />
          <h2>Real-time Updates</h2>
          <p>Get instant access to current weather conditions, temperature, humidity, and wind speed for any location.</p>
          <Link href="#" className={styles.readMore}>Learn More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/service2.png" alt="Hourly Forecasts" width={100} height={100} />
          <h2>Hourly Forecasts</h2>
          <p>Plan your day with confidence using our detailed hourly forecasts, including precipitation chances and temperature changes.</p>
          <Link href="#" className={styles.readMore}>Learn More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/service3.png" alt="7-Day Outlook" width={100} height={100} />
          <h2>7-Day Outlook</h2>
          <p>Stay ahead of the weather with our reliable 7-day forecasts, helping you prepare for upcoming conditions.</p>
          <Link href="#" className={styles.readMore}>Learn More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/service4.png" alt="Severe Weather Alerts" width={100} height={100} />
          <h2>Severe Weather Alerts</h2>
          <p>Receive timely notifications for severe weather events, ensuring your safety and preparedness.</p>
          <Link href="#" className={styles.readMore}>Learn More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/service5.png" alt="Interactive Maps" width={100} height={100} />
          <h2>Interactive Maps</h2>
          <p>Explore weather patterns with our interactive radar and satellite maps, visualizing real-time data.</p>
          <Link href="#" className={styles.readMore}>Learn More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/service6.png" alt="Historical Data" width={100} height={100} />
          <h2>Historical Data</h2>
          <p>Access past weather information and trends for analysis, research, or simply to satisfy your curiosity.</p>
          <Link href="#" className={styles.readMore}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}