import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  id: string;
}

const Slide: React.FC<SlideProps> = ({ children, id }) => {
  return (
    <div id={id} className="w-full h-full flex-shrink-0 snap-center">
      {children}
    </div>
  );
};

interface SlideshowProps {
  children: ReactNode[];
  activeIndex?: number;
  onChange?: (index: number) => void;
  showDots?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

const Slideshow: React.FC<SlideshowProps> = ({
  children,
  activeIndex = 0,
  onChange,
  showDots = true,
  showArrows = true,
  autoPlay = false,
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(activeIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const totalSlides = React.Children.count(children);

  // Required minimum swipe distance in pixels
  const minSwipeDistance = 50;

  // Update internal state when activeIndex prop changes
  useEffect(() => {
    if (activeIndex !== currentSlide) {
      setCurrentSlide(activeIndex);
    }
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      nextSlide();
    } else if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }

    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollToSlide = (index: number) => {
    if (slideContainerRef.current) {
      const slideWidth = slideContainerRef.current.offsetWidth;
      slideContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      const newIndex = currentSlide + 1;
      setCurrentSlide(newIndex);
      if (onChange) onChange(newIndex);
    } else if (autoPlay) {
      const newIndex = 0; // Loop back to first slide
      setCurrentSlide(newIndex);
      if (onChange) onChange(newIndex);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      const newIndex = currentSlide - 1;
      setCurrentSlide(newIndex);
      if (onChange) onChange(newIndex);
    } else if (autoPlay) {
      const newIndex = totalSlides - 1; // Loop to last slide
      setCurrentSlide(newIndex);
      if (onChange) onChange(newIndex);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (onChange) onChange(index);
  };

  useEffect(() => {
    scrollToSlide(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay) {
      intervalId = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoPlay, interval, currentSlide]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={slideContainerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <Slide key={index} id={`slide-${index}`}>
            {child}
          </Slide>
        ))}
      </div>
      
      {showArrows && (
        <>
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md z-10 text-translink-blue hover:bg-opacity-100 transition-all focus:outline-none md:flex hidden items-center justify-center"
            onClick={prevSlide}
            disabled={currentSlide === 0 && !autoPlay}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md z-10 text-translink-blue hover:bg-opacity-100 transition-all focus:outline-none md:flex hidden items-center justify-center"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1 && !autoPlay}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-translink-blue w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow;
export { Slide }; 