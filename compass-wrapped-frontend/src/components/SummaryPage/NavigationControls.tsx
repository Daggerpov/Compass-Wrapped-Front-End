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
    <div className="flex justify-between items-center mt-0">
      <button
        onClick={prevSlide}
        disabled={activeIndex === 0}
        className="px-3 py-1 rounded-md bg-translink-blue text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <div className="text-sm text-gray-500">
        {activeIndex + 1} / {totalSlides}
      </div>

      <button
        onClick={nextSlide}
        disabled={activeIndex === totalSlides - 1}
        className="px-3 py-1 rounded-md bg-translink-blue text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default NavigationControls; 