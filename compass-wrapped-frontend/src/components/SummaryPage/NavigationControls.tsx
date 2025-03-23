import React from 'react';

interface NavigationControlsProps {
  activeIndex: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  activeIndex,
  totalSlides,
  nextSlide,
  prevSlide
}) => {
  return (
    <>
      <div className="flex justify-between mt-8">
        <button
          onClick={prevSlide}
          className={`btn ${activeIndex === 0 ? 'btn-outline opacity-50' : 'btn-outline'}`}
          disabled={activeIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className={`btn ${activeIndex === totalSlides - 1 ? 'btn-outline opacity-50' : 'btn-primary'}`}
          disabled={activeIndex === totalSlides - 1}
        >
          Next
        </button>
      </div>

      <div className="swipe-instruction">
        Swipe or use arrow keys to navigate
      </div>
    </>
  );
};

export default NavigationControls; 