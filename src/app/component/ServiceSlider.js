'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './ServiceSlider.module.css';

export default function ServiceSlider({ services }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrackContainer}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.slideImage}>
                <Image src={service.imgSrc} alt={service.title} layout="responsive" width={500} height={300} objectFit="cover" />
              </div>
              <div className={styles.slideInfo}>
                <h2 className={styles.slideTitle}>{service.title}</h2>
                <p className={styles.slideDescription}>{service.description}</p>
                <button className={styles.learnMoreBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className={`${styles.btn} ${styles.prevBtn}`}>‹</button>
      <button onClick={nextSlide} className={`${styles.btn} ${styles.nextBtn}`}>›</button>
      <div className={styles.dots}>
        {services.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
