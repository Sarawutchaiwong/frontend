'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { src: '/images/slider1.jpg', alt: 'Slider 1' },
    { src: '/images/slider2.jpg', alt: 'Slider 2' },
    { src: '/images/slider3.jpg', alt: 'Slider 3' },
    { src: '/images/slider4.jpg', alt: 'Slider 4' },
    { src: '/images/slider5.jpg', alt: 'Slider 5' },
    { src: '/images/slider6.jpg', alt: 'Slider 6' },
    { src: '/images/slider7.jpg', alt: 'Slider 7' },
    { src: '/images/slider8.jpg', alt: 'Slider 8' },
    { src: '/images/slider9.jpg', alt: 'Slider 9' },
    { src: '/images/slider10.jpg', alt: 'Slider 10' }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carouselTrack}
        style={{ transform: `translateX(calc(25% - ${activeIndex * 50}%))` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}>
            <Image src={slide.src} width={500} height={300} layout="responsive" alt={slide.alt} className={styles.image}/>
          </div>
        ))}
  );
}
