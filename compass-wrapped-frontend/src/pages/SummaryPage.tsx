import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import translinkLogo from '../assets/translink-logo.png';
import compassCard from '../assets/compass-card.svg';
import TripSummarySlide from '../components/slides/TripSummarySlide';
import StopsSlide from '../components/slides/StopsSlide';
import TimelineSlide from '../components/slides/TimelineSlide';
import PersonalitySlide from '../components/slides/PersonalitySlide';
import AchievementsSlide from '../components/slides/AchievementsSlide';

const slides = [
  { id: 'summary', component: TripSummarySlide, title: 'Monthly Overview' },
  { id: 'stops', component: StopsSlide, title: 'Top Stations' },
  { id: 'timeline', component: TimelineSlide, title: 'Travel Timeline' },
  { id: 'personality', component: PersonalitySlide, title: 'Transit Personality' },
  { id: 'achievements', component: AchievementsSlide, title: 'Achievements' },
];

export default function SummaryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => {
    if (activeIndex < slides.length - 1) {
      goToSlide(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="header">
        <div className="container-custom py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <img src={translinkLogo} alt="TransLink Logo" className="img-logo" />
          </div>
          <div className="flex items-center gap-3">
            <img src={compassCard} alt="Compass Card" className="img-icon" />
            <h2 className="text-xl font-medium text-translink-blue">Monthly Transit Summary</h2>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <div className="container-custom py-8" {...handlers}>
        <div className="card overflow-hidden">
          <div className="relative h-[600px]">
            {slides.map((slide, index) => {
              const Component = slide.component;
              return (
                <div
                  key={slide.id}
                  className="carousel-slide p-6"
                  style={{
                    transform: `translateX(${(index - activeIndex) * 100}%)`,
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                >
                  <Component />
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="carousel-nav">
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

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevSlide}
            className={`btn ${activeIndex === 0 ? 'btn-outline opacity-50' : 'btn-outline'}`}
            disabled={activeIndex === 0}
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          <button
            onClick={nextSlide}
            className={`btn ${activeIndex === slides.length - 1 ? 'btn-outline opacity-50' : 'btn-primary'}`}
            disabled={activeIndex === slides.length - 1}
          >
            Next
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Swipe Instructions */}
        <div className="swipe-instruction">
          Swipe or use arrow keys to navigate
        </div>
      </div>
    </div>
  );
}