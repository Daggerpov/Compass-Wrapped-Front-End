import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
  interval?: number;
}

export const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    
    if (images.length > 1) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [images, interval]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
}; 