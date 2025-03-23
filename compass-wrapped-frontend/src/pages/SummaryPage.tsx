import { useState, useEffect } from 'react';
import { Header, SlideCarousel, NavigationControls } from '../components/SummaryPage';
import IntroSlide from '../components/slides/IntroSlide';
import MostTraveledRouteSlide from '../components/slides/MostTraveledRouteSlide';
import StopsSlide from '../components/slides/StopsSlide';
import TimeSpentSlide from '../components/slides/TimeSpentSlide';
import TransferSlide from '../components/slides/TransferSlide';
import PersonalitySlide from '../components/slides/PersonalitySlide';
import AchievementsSlide from '../components/slides/AchievementsSlide';
import ClosingSlide from '../components/slides/ClosingSlide';

interface SlideConfig {
  id: string;
  component: React.ComponentType<any>;
  title: string;
  props?: any;
}

const slides: SlideConfig[] = [
  { 
    id: 'intro', 
    component: IntroSlide, 
    title: 'Introduction', 
    props: { 
      totalTrips: 245,
      month: "MARCH",
      year: 2023 
    } 
  },
  { id: 'route', component: MostTraveledRouteSlide, title: 'Most Used Route', props: { routeDirection: "Eastbound", routeName: "University Blvd" } },
  { id: 'stops', component: StopsSlide, title: 'Top Stops' },
  { id: 'time-spent', component: TimeSpentSlide, title: 'Time Spent', props: { hoursSpent: 194, transit: "SkyTrain" } },
  { 
    id: 'transfer', 
    component: TransferSlide, 
    title: 'Transfer Spot',
    props: { 
      transferSpot: "Broadway-City Hall Stn"
    }
  },
  { 
    id: 'personality', 
    component: PersonalitySlide, 
    title: 'Transit Personality',
    props: {
      personalityType: "Night Rider",
      details: "You've spent 194 hours on SkyTrain this year!"
    }
  },
  { 
    id: 'achievements', 
    component: AchievementsSlide, 
    title: 'Achievements',
    props: {
      achievement: "Transit Veteran",
      milestoneReached: "You hit a major milestone this month!"
    }
  },
  {
    id: 'closing',
    component: ClosingSlide,
    title: 'Closing',
    props: {
      message: "Congrats! You had 6 amazing trips this month!",
      minutesThisMonth: 842
    }
  }
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
      <Header />
      
      <div className="container-custom py-0">
        <SlideCarousel 
          slides={slides}
          activeIndex={activeIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
        />
        
        <NavigationControls 
          activeIndex={activeIndex}
          totalSlides={slides.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>
    </div>
  );
}