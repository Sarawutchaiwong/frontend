import Image from 'next/image';
import Link from 'next/link';
import styles from './service.module.css';

export default function Service() {
  return (
    <div className={styles.servicePage}>
      <div className={styles.heroSection}>
        <h1>Our Services</h1>
        <p>We offer a variety of services designed to meet your needs and exceed your expectations.</p>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.serviceBlock}>
          <Image src="/images/roblox.png" alt="Happy Face" width={100} height={100} />
          <h2>Happy Face</h2>
          <p>A service that brings a smile to your face and brightens your day.</p>
          <Link href="#" className={styles.readMore}>Read More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/roblox2.png" alt="Exciting Face" width={100} height={100} />
          <h2>Exciting Face</h2>
          <p>Experience thrilling moments and add excitement to your life with this service.</p>
          <Link href="#" className={styles.readMore}>Read More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/roblox3.png" alt="Handsome Face" width={100} height={100} />
          <h2>Handsome Face</h2>
          <p>Boost your confidence and enhance your appearance with our specialized service.</p>
          <Link href="#" className={styles.readMore}>Read More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/roblox4.png" alt="Crazy Face" width={100} height={100} />
          <h2>Crazy Face</h2>
          <p>Unleash your wild side and enjoy unforgettable, adventurous experiences.</p>
          <Link href="#" className={styles.readMore}>Read More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/roblox.png" alt="New Service 1" width={100} height={100} />
          <h2>New Service 1</h2>
          <p>This is a description for the first new service.</p>
          <Link href="#" className={styles.readMore}>Read More</Link>
        </div>

        <div className={styles.serviceBlock}>
          <Image src="/images/roblox2.png" alt="New Service 2" width={100} height={100} />
          <h2>New Service 2</h2>
          <p>This is a description for the second new service.</p>
          <Link href="#" className={styles.readMore}>Read More</Link>
        </div>
      </div>
    </div>
  );
}