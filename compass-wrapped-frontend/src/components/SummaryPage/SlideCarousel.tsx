import React from 'react';
import { useSwipeable } from 'react-swipeable';

interface SlideProps {
  [key: string]: any;
}

interface SlideConfig {
  id: string;
  component: React.ComponentType<SlideProps>;
  title: string;
  props?: SlideProps;
}

interface SlideCarouselProps {
  slides: SlideConfig[];
  activeIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

const SlideCarousel: React.FC<SlideCarouselProps> = ({
  slides,
  activeIndex,
  nextSlide,
  prevSlide,
  goToSlide
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true
  });

  return (
    <div {...handlers} className="card overflow-hidden">
      <div className="relative h-[450px]">
        {slides.map((slide, index) => {
          const Component = slide.component;
          return (
            <div
              key={slide.id}
              className="carousel-slide"
              style={{
                transform: `translateX(${(index - activeIndex) * 100}%)`,
                opacity: index === activeIndex ? 1 : 0,
              }}
            >
              <Component {...(slide.props || {})} />
            </div>
          );
        })}
      </div>

      <div className="carousel-nav pb-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${slide.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideCarousel; 