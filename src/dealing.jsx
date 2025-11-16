import styles from "./dealing.module.css";
import React, { useState, useEffect, useRef } from 'react';
const Dealing= () => {
  const image1 = [
    "/photo1.avif",
    '/photo2.jpg',
    '/photo3.jpg'
  ];
  var interval=3000;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef(null);
  
    const totalSlides = image1.length;
  
    // Automatically change the slide
    useEffect(() => {
      const slideInterval = setInterval(() => {
        handleNextSlide();
      }, interval);
  
      return () => clearInterval(slideInterval);
    }, [currentSlide, interval]);
  
    // Handle moving to the next slide
    const handleNextSlide = () => {
      if (currentSlide === totalSlides - 1) {
        setCurrentSlide(totalSlides); // Move to the cloned slide
        setIsAnimating(true); // Enable transition
      } else {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(true); // Enable transition
      }
    };
  
    // Handle transition end to reset the slide position
    const handleTransitionEnd = () => {
      if (currentSlide === totalSlides) {
        setCurrentSlide(0);
        setIsAnimating(false); // Disable transition for instant reset
      }
    };
  
    // Handle indicator click to jump to the specific slide
    const handleIndicatorClick = (index) => {
      setCurrentSlide(index);
      setIsAnimating(true); // Enable transition
    };
  
return(
    <>
<div className={styles["dealingbanner"]}>
BEST DEALING BRAND
</div>
<div className={styles["dealingcontainer"]}>
<div
    className={styles["slider"]}
    style={{
      transform: `translateX(-${currentSlide * 100}%)`,
      transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
    }}
    onTransitionEnd={handleTransitionEnd}
    ref={sliderRef}
  >
    {/* Render all images */}
    {image1.map((image, index) => (
      <div key={index} className={styles["slide"]}>
        <img src={image} alt={`Slide ${index}`} className={styles["slide-image"]} />
      </div>
    ))}
    {/* Cloned first slide */}
    <div className={styles["slide"]}>
      <img src={image1[0]} alt="Slide 0 clone" className={styles["slide-image"]} />
    </div>
  </div>

  {/* Round indicators */}
  <div className={styles["indicators"]}>
    {image1.map((_, index) => (
      <div
        key={index}
        className={
          index === (currentSlide % totalSlides)
            ? `${styles["indicator"]} ${styles["active-indicator"]}`
            : styles["indicator"]
        }
        onClick={() => handleIndicatorClick(index)}
      />
    ))}
  </div>
</div>
</>
  );
};

export default Dealing;