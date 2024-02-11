// carousel.jsx

import React, { useState } from 'react';
import './carousel.scss';
import LArrow from '/LArrow.svg';
import RArrow from '/RArrow.svg';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPictures = pictures.length;
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
        <div className="carousel">
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="carousel-controls">
          <button onClick={goToPrevious} aria-label="Previous Image">
            <img src={LArrow} alt="Left Arrow" />
          </button>
          <button onClick={goToNext} aria-label="Next Image">
            <img src={RArrow} alt="Right Arrow" />
          </button>
        </div>
        <div className="carousel-counter">
          <span>{`${currentIndex + 1} / ${totalPictures}`}</span>
        </div>
      </div>
    );
  }
  
  export default Carousel;