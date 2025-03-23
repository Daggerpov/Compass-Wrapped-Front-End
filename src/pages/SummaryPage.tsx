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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-translink-blue"></div>
        <p className="mt-4 text-lg">Analyzing your transit data...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <button 
            className="mt-4 bg-translink-blue hover:bg-translink-secondary text-white px-4 py-2 rounded"
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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-lg">No data available. Please upload your CSV file.</p>
        <button 
          className="mt-4 bg-translink-blue hover:bg-translink-secondary text-white px-4 py-2 rounded"
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
    <div className="min-h-screen bg-gray-100">
      <div className="text-center pt-8 pb-4 bg-white">
        <h1 className="text-4xl font-bold text-translink-blue">Your Compass Wrapped</h1>
        <p className="text-xl text-gray-600 mt-2">Here's your transit year in review</p>
      </div>
      
      <div className="h-[calc(100vh-10rem)] w-full">
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
        </Slideshow>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white py-4 shadow-md z-10">
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-translink-blue hover:bg-translink-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center"
            onClick={() => navigate('/share')}
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Create Shareable Image
          </button>
          <button 
            className="bg-white hover:bg-gray-100 text-translink-blue border border-translink-blue px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            onClick={() => navigate('/')}
          >
            Upload New Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage; 