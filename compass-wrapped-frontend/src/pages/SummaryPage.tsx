import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Removed unused import
import { DataContext } from '../context/DataContext';

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
  const totalTrips = analyticsData.total_stats?.total_trips || 0;
  const totalHours = analyticsData.time_stats?.total_commute_hours || 0;
  const missingTapIns = analyticsData.missing_taps?.missing_tap_ins || 0;
  const missingTapOuts = analyticsData.missing_taps?.missing_tap_outs || 0;
  const missingTapCount = missingTapIns + missingTapOuts;
  
  const mostUsedStop = analyticsData.route_stats?.most_used_stops?.[0] || null;
  const mostCommonTransfer = analyticsData.transfer_stats?.most_common_transfers?.[0] || null;
  
  // Determine personality type based on data
  const personalityType = analyticsData.personality?.personality_type || 'Early Bird';
  const personalityDetails = analyticsData.personality?.details || 'You tend to start your journeys early in the day.';
  const commonTime = analyticsData.personality?.common_time || '7:30 AM';
  
  // Process achievement data
  const achievementsData = mapAchievements(analyticsData.achievements?.achievements || []);

  // Handle slide change
  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-translink-blue mb-8">
          Your 2023 Transit Wrapped
        </h1>
        
        {/* Main content area - slideshow */}
        <div className="max-w-2xl mx-auto">
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