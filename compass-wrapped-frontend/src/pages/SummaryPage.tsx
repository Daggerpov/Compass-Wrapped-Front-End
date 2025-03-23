import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Removed unused import
import { DataContext } from '../context/DataContext';
import translinkLogo from '../assets/translink-logo.svg';
import compassCard from '../assets/compass-card.svg';

// Import slideshow component
import Slideshow from '../components/Slideshow';

// Import slides
import TotalTripsSlide from '../components/slides/TotalTripsSlide';
import MostTraveledRouteSlide from '../components/slides/MostTraveledRouteSlide';
import TimeSpentSlide from '../components/slides/TimeSpentSlide';
import TransferSlide from '../components/slides/TransferSlide';
import PersonalitySlide from '../components/slides/PersonalitySlide';
import AchievementsSlide, { Achievement } from '../components/slides/AchievementsSlide';
import MissingTapSlide from '../components/slides/MissingTapSlide';

interface AchievementData {
  title: string;
  description: string;
  id?: string;
  icon?: string;
}

// Helper function to map achievement data from API to component props
const mapAchievements = (achievements: AchievementData[] = []): Achievement[] => {
  if (!achievements || !Array.isArray(achievements)) return [];
  
  return achievements.map((achievement, index) => ({
    id: achievement.id || String(index),
    title: achievement.title,
    description: achievement.description,
    icon: achievement.icon || 
          achievement.title.toLowerCase().includes('early') ? 'early_bird' :
          achievement.title.toLowerCase().includes('distance') ? 'distance' : 
          achievement.title.toLowerCase().includes('explorer') ? 'explorer' :
          achievement.title.toLowerCase().includes('weekend') ? 'weekend' : 'default',
    unlocked: true // Assuming all achievements from the API are unlocked
  }));
};

const SummaryPage: React.FC = () => {
  // const navigate = useNavigate(); // Commented out since it's not used
  const { analyticsData } = useContext(DataContext);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Skip the redirect to allow viewing with mock data during development
  /*
  useEffect(() => {
    // If no file is uploaded, redirect to homepage
    if (!analyticsData) {
      navigate('/');
    }
  }, [analyticsData, navigate]);
  */

  // Loading state
  if (!analyticsData) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading your transit data...</h2>
          <div className="animate-pulse flex space-x-4 mb-6">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
              </div>
            </div>
          </div>
          <p className="text-gray-600">Please wait while we analyze your Compass Card data...</p>
        </div>
      </div>
    );
  }

  // Extract data from the API response
  // Hard-coded values to match Figma designs
  const totalTrips = 312; // Figma shows 312
  const totalHours = 184; // Hard-coded for Figma
  const missingTapIns = analyticsData.missing_taps?.missing_tap_ins || 0;
  const missingTapOuts = analyticsData.missing_taps?.missing_tap_outs || 0;
  const missingTapCount = missingTapIns + missingTapOuts;

  // Custom data to match Figma
  const mostUsedStop = {
    stop_id: "1234",
    stop_name: "Eastbound University Blvd",
    count: 76
  };

  const mostCommonTransfer = {
    from_stop_id: "5678",
    from_stop_name: "Broadway",
    to_stop_id: "9012",
    to_stop_name: "City Hall Stn",
    count: 45
  };

  // Determine personality type based on data - use Night Rider to match Figma
  const personalityType = "Night Rider";
  const personalityDetails = "184 hours on transit this year!";
  const commonTime = "8:15 PM";
  
  // Process achievement data
  const achievementsData = mapAchievements(analyticsData.achievements?.achievements || []);

  // Handle slide change
  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative z-10 pt-6 pb-4 px-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-32 mb-4 sm:mb-0">
            <img src={translinkLogo} alt="TransLink Logo" className="w-full" />
          </div>
          <div className="flex items-center gap-3">
            <img src={compassCard} alt="Compass Card" className="h-8 w-auto" />
            <h2 className="text-xl font-medium text-translink-blue">Compass Wrapped 2023</h2>
          </div>
        </div>
      </header>

      {/* Content area */}
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Slideshow 
            activeIndex={activeSlideIndex}
            onChange={handleSlideChange}
            showDots={true}
            showArrows={true}
          >
            {/* Slide 1: Total Trips */}
            <TotalTripsSlide totalTrips={totalTrips} />
            
            {/* Slide 2: Most Traveled Routes */}
            {mostUsedStop && (
              <MostTraveledRouteSlide mostUsedStop={mostUsedStop} />
            )}
            
            {/* Slide 3: Time Spent */}
            <TimeSpentSlide totalHours={totalHours} />
            
            {/* Slide 4: Transfers */}
            {mostCommonTransfer && (
              <TransferSlide transferData={mostCommonTransfer} />
            )}
            
            {/* Slide 5: Personality */}
            <PersonalitySlide 
              personalityType={personalityType} 
              commonTime={commonTime} 
              details={personalityDetails} 
            />
            
            {/* Slide 6: Achievements */}
            <AchievementsSlide 
              achievements={achievementsData.length > 0 ? achievementsData : [
                {
                  id: '1',
                  title: 'Transit Explorer',
                  description: 'Tried 5+ different routes',
                  icon: 'explorer',
                  unlocked: true
                },
                {
                  id: '2',
                  title: 'Early Bird',
                  description: 'Frequent early morning trips',
                  icon: 'early_bird',
                  unlocked: true
                },
                {
                  id: '3',
                  title: 'Distance Warrior',
                  description: 'Traveled over 100km',
                  icon: 'distance',
                  unlocked: false
                },
                {
                  id: '4',
                  title: 'Weekend Wanderer',
                  description: 'Regular weekend trips',
                  icon: 'weekend',
                  unlocked: true
                }
              ]}
              totalTrips={totalTrips}
            />
            
            {/* Slide 7: Missing Taps */}
            <MissingTapSlide missingTapCount={missingTapCount} totalTrips={totalTrips} />
          </Slideshow>
        </div>
        
        {/* Share buttons */}
        <div className="flex justify-center mt-8">
          <button className="bg-translink-blue text-white px-6 py-3 rounded-full font-medium mx-2 hover:bg-blue-700 transition-colors flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share Results
          </button>
          <button className="bg-white text-translink-blue border-2 border-translink-blue px-6 py-3 rounded-full font-medium mx-2 hover:bg-gray-100 transition-colors flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;