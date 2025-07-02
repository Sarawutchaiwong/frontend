'use client';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="bg-light p-3 rounded-5 shadow-sm position-relative border border-gray">
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner rounded-4">
          <div className="carousel-item active">
            <Image src="/images/slider1.png" className="d-block w-100" alt="..." width={1920} height={960} />
          </div>
          <div className="carousel-item">
            <Image src="/images/slider2.png" className="d-block w-100" alt="..." width={1920} height={960} />
          </div>
          <div className="carousel-item">
            <Image src="/images/slider3.png" className="d-block w-100" alt="..." width={1920} height={960} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

