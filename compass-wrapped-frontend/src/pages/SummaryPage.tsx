import { useState, useEffect } from 'react';
import { Header, SlideCarousel, NavigationControls } from '../components/SummaryPage';
import TripSummarySlide from '../components/slides/TripSummarySlide';
import StopsSlide from '../components/slides/StopsSlide';
import TimelineSlide from '../components/slides/TimelineSlide';
import PersonalitySlide from '../components/slides/PersonalitySlide';
import AchievementsSlide from '../components/slides/AchievementsSlide';

interface PersonalitySlideProps {
  personalityType: string;
  commonTime: string;
  details: string;
}

interface SlideConfig {
  id: string;
  component: React.ComponentType<any>;
  title: string;
  props?: any;
}

const slides: SlideConfig[] = [
  { id: 'summary', component: TripSummarySlide, title: 'Monthly Overview' },
  { id: 'stops', component: StopsSlide, title: 'Top Stations' },
  { id: 'timeline', component: TimelineSlide, title: 'Travel Timeline' },
  { 
    id: 'personality', 
    component: PersonalitySlide, 
    title: 'Transit Personality',
    props: {
      personalityType: "Night Rider",
      commonTime: "8:15 PM",
      details: "184 hours on transit this month!"
    }
  },
  { 
    id: 'achievements', 
    component: AchievementsSlide, 
    title: 'Achievements',
    props: {
      totalTrips: 342,
      achievements: [
        {
          id: "early_bird",
          title: "Early Bird",
          description: "Caught the first train 20+ times",
          icon: "early_bird",
          unlocked: true
        },
        {
          id: "distance",
          title: "Distance Champion",
          description: "Traveled over 1000km on transit",
          icon: "distance",
          unlocked: true
        },
        {
          id: "explorer",
          title: "City Explorer",
          description: "Used 25+ different routes",
          icon: "explorer",
          unlocked: false
        },
        {
          id: "weekend",
          title: "Weekend Warrior",
          description: "Used transit on 15+ weekends",
          icon: "weekend",
          unlocked: true
        },
        {
          id: "night",
          title: "Night Owl",
          description: "Took 10+ trips after 10pm",
          icon: "night",
          unlocked: false
        },
        {
          id: "regular",
          title: "Regular Commuter",
          description: "Used transit 20+ days in a row",
          icon: "regular",
          unlocked: true
        }
      ]
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
      
      <div className="container-custom py-8">
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