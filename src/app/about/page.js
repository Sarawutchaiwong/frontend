import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.hero}>
        <h1>About RainCane</h1>
        <p>We are a team of passionate individuals dedicated to creating innovative solutions that make a difference.</p>
      </div>

      <div className={styles.timeline}>
        
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}></div>
          <div className={styles.timelineContent}>
            <h3>2020 - The Spark</h3>
            <p>RainCane was born from a shared vision to revolutionize the weather industry. We started with a small team and a big idea.</p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}></div>
          <div className={styles.timelineContent}>
            <h3>2021 - Growth & Innovation</h3>
            <p>We launched our first product and received overwhelming support. Our team expanded, and we continued to innovate.</p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineIcon}></div>
          <div className={styles.timelineContent}>
            <h3>2022 - Looking Ahead</h3>
            <p>We are excited about the future and the opportunities it holds. We are committed to pushing the boundaries of what's possible.</p>
          </div>
        </div>
      </div>

      <div className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <Image src="/images/roblox2.png" alt="Team Member 1" width={150} height={150} />
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/roblox3.png" alt="Team Member 2" width={150} height={150} />
            <h4>Jane Smith</h4>
            <p>Lead Designer</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/roblox4.png" alt="Team Member 3" width={150} height={150} />
            <h4>Peter Jones</h4>
            <p>Lead Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}