import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import TripSummarySlide from '../components/slides/TripSummarySlide';

// Define interfaces for data types
interface StopData {
  stop_id: string;
  stop_name?: string;
  count: number;
}

interface TransferData {
  from_stop_id: string;
  from_stop_name?: string;
  to_stop_id: string;
  to_stop_name?: string;
  count: number;
}

// Helper function to map achievement data from API to component props
const mapAchievements = (achievements: any[]): Achievement[] => {
  if (!achievements) return [];
  
  return achievements.map((achievement, index) => ({
    id: String(index),
    title: achievement.title,
    description: achievement.description,
    // Add appropriate icon mappings based on achievement title
    icon: achievement.title.toLowerCase().includes('early') ? 'early_bird' :
          achievement.title.toLowerCase().includes('distance') ? 'distance' : 
          achievement.title.toLowerCase().includes('night') ? 'night' :
          achievement.title.toLowerCase().includes('weekend') ? 'weekend' :
          achievement.title.toLowerCase().includes('explorer') ? 'explorer' : 
          achievement.title.toLowerCase().includes('regular') ? 'regular' : 'default',
    unlocked: true, // Assuming all achievements from the API are unlocked
  }));
};

const SummaryPage: React.FC = () => {
  const { analyticsData, loading, error, file } = useContext(DataContext);
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  useEffect(() => {
    // If no file is uploaded, redirect to home
    if (!file) {
      navigate('/');
    }
  }, [file, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-translink-blue"></div>
        <p className="mt-3 text-base text-gray-700">Analyzing your transit data...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg max-w-md shadow-sm">
          <p className="font-bold">Error</p>
          <p className="text-sm">{error}</p>
          <button 
            className="mt-3 bg-translink-blue hover:bg-translink-secondary text-white px-3 py-1.5 rounded text-sm transition-colors"
            onClick={() => navigate('/')}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  if (!analyticsData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-base text-gray-700">No data available. Please upload your CSV file.</p>
        <button 
          className="mt-3 bg-translink-blue hover:bg-translink-secondary text-white px-3 py-1.5 rounded text-sm transition-colors"
          onClick={() => navigate('/')}
        >
          Go to Upload
        </button>
      </div>
    );
  }

  // Get data for each slide from analyticsData
  const totalTrips = analyticsData.total_stats?.total_trips || 0;
  const uniqueRoutes = analyticsData.total_stats?.unique_routes || 0;
  const mostUsedStop = analyticsData.route_stats?.most_used_stops?.[0];
  const totalHours = analyticsData.time_stats?.total_commute_hours || 0;
  const mostCommonTransfer = analyticsData.transfer_stats?.most_common_transfers?.[0];
  const personalityType = analyticsData.personality?.personality_type || 'Traveler';
  const commonTime = analyticsData.personality?.common_time;
  const personalityDetails = analyticsData.personality?.details;
  const achievementsData = mapAchievements(analyticsData.achievements?.achievements || []);
  const missingTapIns = analyticsData.missing_taps?.missing_tap_ins || 0;
  const missingTapOuts = analyticsData.missing_taps?.missing_tap_outs || 0;
  const totalMissingTaps = missingTapIns + missingTapOuts;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - More compact and modern */}
      <div className="py-4 bg-white shadow-sm sticky top-0 z-20">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-translink-blue">Your Compass Wrapped</h1>
            <div className="flex items-center gap-2">
              <button 
                className="text-xs text-gray-600 hover:text-translink-blue px-2 py-1 rounded transition-colors"
                onClick={() => navigate('/')}
              >
                Upload New Data
              </button>
              <button 
                className="bg-translink-blue hover:bg-translink-secondary text-white text-xs px-3 py-1.5 rounded-md transition-colors flex items-center gap-1"
                onClick={() => navigate('/share')}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Your transit journey in review</p>
        </div>
      </div>
      
      {/* Slideshow Container - Improved layout */}
      <div className="flex-grow flex flex-col">
        <div className="container-custom py-4 flex-grow">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden h-[calc(100vh-12rem)] max-h-[800px]">
            <Slideshow
              activeIndex={activeSlideIndex}
              onChange={setActiveSlideIndex}
              showDots={true}
              showArrows={true}
              autoPlay={false}
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
                <TransferSlide transfer={mostCommonTransfer} />
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
                    description: 'Regularly catch the first train',
                    icon: 'early_bird',
                    unlocked: uniqueRoutes > 3
                  },
                  {
                    id: '3',
                    title: 'Distance Champion',
                    description: 'Traveled over 1000km on transit',
                    icon: 'distance',
                    unlocked: totalTrips > 100
                  },
                  {
                    id: '4',
                    title: 'Weekend Warrior',
                    description: 'Used transit on 10+ weekends',
                    icon: 'weekend',
                    unlocked: false
                  }
                ]}
                totalTrips={totalTrips}
              />
              
              {/* Slide 7: Missing Taps */}
              <MissingTapSlide 
                missingTapCount={totalMissingTaps} 
                totalTrips={totalTrips} 
              />

              {/* Slide 8: Trip Summary */}
              <TripSummarySlide 
                totalTrips={totalTrips}
                uniqueRoutes={uniqueRoutes}
                totalHours={totalHours}
              />
            </Slideshow>
          </div>
        </div>
      </div>
      
      {/* Navigation Footer - More compact and modern */}
      <div className="bg-white py-3 shadow-md z-10 border-t border-gray-100">
        <div className="container-custom flex justify-between items-center">
          <div className="text-xs text-gray-500">
            Slide {activeSlideIndex + 1} of 8
          </div>
          
          <div className="flex gap-3">
            <button 
              className="bg-white hover:bg-gray-50 text-translink-blue border border-translink-blue px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              onClick={() => navigate('/')}
            >
              Upload New Data
            </button>
            <button 
              className="bg-translink-blue hover:bg-translink-secondary text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5"
              onClick={() => navigate('/share')}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Create Shareable Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
