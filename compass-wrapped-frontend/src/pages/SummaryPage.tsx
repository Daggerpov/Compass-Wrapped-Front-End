import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

// Define interfaces for component props
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

interface AchievementData {
  title: string;
  description: string;
}

interface TotalStatsProps {
  data: {
    total_trips: number;
    unique_routes: number;
    [key: string]: unknown;
  } | null | undefined;
}

interface RouteStatsProps {
  data: {
    most_used_stops: StopData[];
    [key: string]: unknown;
  } | null | undefined;
}

interface TimeStatsProps {
  data: {
    total_commute_hours: number;
    time_by_day_of_week?: Record<string, number>;
    [key: string]: unknown;
  } | null | undefined;
}

interface TransferStatsProps {
  data: {
    most_common_transfers: TransferData[];
    [key: string]: unknown;
  } | null | undefined;
}

interface PersonalityProps {
  data: {
    personality_type: string;
    common_time?: string;
    details?: string;
    [key: string]: unknown;
  } | null | undefined;
}

interface AchievementsProps {
  data: {
    achievements: AchievementData[];
    [key: string]: unknown;
  } | null | undefined;
}

interface MissingTapsProps {
  data: {
    missing_tap_ins: number;
    missing_tap_outs: number;
    [key: string]: unknown;
  } | null | undefined;
}

interface CarbonFootprintProps {
  data: {
    carbon_saved_kg: number;
    [key: string]: unknown;
  } | null | undefined;
}

// Components for each section
const TotalStats: React.FC<TotalStatsProps> = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="card mb-6 bg-white">
      <h2 className="text-2xl font-bold text-translink-blue mb-4">Your Transit Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-4xl font-bold text-translink-blue">{data.total_trips || 0}</p>
          <p className="text-gray-600">Total Trips</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-4xl font-bold text-translink-blue">{data.unique_routes || 0}</p>
          <p className="text-gray-600">Unique Routes</p>
        </div>
      </div>
    </div>
  );
};

const RouteStats: React.FC<RouteStatsProps> = ({ data }) => {
  if (!data || !data.most_used_stops) return null;
  
  const chartData = {
    labels: data.most_used_stops.map((item) => item.stop_name || `Stop ${item.stop_id}`),
    datasets: [
      {
        label: 'Times Used',
        data: data.most_used_stops.map((item) => item.count),
        backgroundColor: [
          '#0066B3',
          '#004B8D',
          '#1A85FF',
          '#2F9FF3',
          '#44B9FF',
        ],
        borderColor: '#FFFFFF',
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className="card mb-6">
      <h2 className="text-2xl font-bold text-translink-blue mb-4">Most Traveled Routes</h2>
      <div className="mb-4">
        <p className="text-lg">Your most tapped-in stop is <span className="font-bold">{data.most_used_stops[0]?.stop_name || `Stop ${data.most_used_stops[0]?.stop_id}`}</span>, used {data.most_used_stops[0]?.count} times this year!</p>
      </div>
      <div className="h-64">
        <Pie data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

const TimeStats: React.FC<TimeStatsProps> = ({ data }) => {
  if (!data) return null;
  
  // Format hours into days and hours
  const totalHours = data.total_commute_hours || 0;
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  
  return (
    <div className="card mb-6">
      <h2 className="text-2xl font-bold text-translink-blue mb-4">Time on Transit</h2>
      <div className="text-center mb-4">
        <p className="text-5xl font-bold text-translink-blue mb-2">{totalHours.toFixed(1)}</p>
        <p className="text-xl">Hours spent on transit</p>
        {days > 0 && (
          <p className="text-gray-600 mt-2">That's {days} days and {hours.toFixed(1)} hours!</p>
        )}
      </div>
      
      {data.time_by_day_of_week && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Time Spent by Day of Week</h3>
          <Bar 
            data={{
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              datasets: [{
                label: 'Hours',
                data: [
                  data.time_by_day_of_week.Monday || 0,
                  data.time_by_day_of_week.Tuesday || 0,
                  data.time_by_day_of_week.Wednesday || 0,
                  data.time_by_day_of_week.Thursday || 0,
                  data.time_by_day_of_week.Friday || 0,
                  data.time_by_day_of_week.Saturday || 0,
                  data.time_by_day_of_week.Sunday || 0
                ],
                backgroundColor: '#0066B3',
              }]
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Hours'
                  }
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

const TransferStats: React.FC<TransferStatsProps> = ({ data }) => {
  if (!data || !data.most_common_transfers) return null;
  
  return (
    <div className="card mb-6">
      <h2 className="text-2xl font-bold text-translink-blue mb-4">Favorite Routes & Transfers</h2>
      <div className="space-y-4">
        {data.most_common_transfers.map((transfer, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <p className="font-bold">Transfer #{index + 1}</p>
            <p>From: {transfer.from_stop_name || `Stop ${transfer.from_stop_id}`}</p>
            <p>To: {transfer.to_stop_name || `Stop ${transfer.to_stop_id}`}</p>
            <p className="text-translink-blue font-semibold">Used {transfer.count} times</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PersonalityType: React.FC<PersonalityProps> = ({ data }) => {
  if (!data) return null;
  
  const getPersonalityDescription = (type: string) => {
    switch (type) {
      case 'Early Bird':
        return 'You rise with the sun and catch the early transit!';
      case 'Daytime Rider':
        return 'You prefer traveling during the busy daytime hours.';
      case 'Night Rider':
        return 'The night is your time to travel the city.';
      case 'City Explorer':
        return 'You love to explore new routes and areas!';
      case 'Vanilla':
        return 'You stick to your trusty regular routes.';
      case 'Sleeper':
        return 'You probably catch some Zs during your commute.';
      default:
        return 'A unique transit rider with your own style.';
    }
  };
  
  return (
    <div className="card mb-6 bg-gradient-to-r from-translink-blue to-translink-secondary text-white">
      <h2 className="text-2xl font-bold mb-4">Your Commuter Personality</h2>
      <div className="text-center">
        <p className="text-5xl font-bold mb-4">{data.personality_type}</p>
        <p className="text-xl">{getPersonalityDescription(data.personality_type)}</p>
        
        {data.common_time && (
          <p className="mt-4">You usually tap in at <span className="font-bold">{data.common_time}</span></p>
        )}
        
        {data.details && (
          <p className="mt-2">{data.details}</p>
        )}
      </div>
    </div>
  );
};

const Achievements: React.FC<AchievementsProps> = ({ data }) => {
  if (!data || !data.achievements) return null;
  
  return (
    <div className="card mb-6">
      <h2 className="text-2xl font-bold text-translink-blue mb-4">Your Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
            <div className="bg-translink-yellow rounded-full p-2 mr-3">
              <svg className="h-6 w-6 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold">{achievement.title}</p>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MissingTaps: React.FC<MissingTapsProps> = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="card mb-6">
      <h2 className="text-2xl font-bold text-translink-blue mb-4">Missing Tap-ins</h2>
      <div className="text-center">
        <p className="text-4xl font-bold mb-2 text-translink-secondary">{data.missing_tap_ins || 0}</p>
        <p>times you forgot to tap in</p>
        
        <p className="text-4xl font-bold mb-2 mt-4 text-translink-secondary">{data.missing_tap_outs || 0}</p>
        <p>times you forgot to tap out</p>
        
        <p className="mt-6 text-gray-600">Remember to always tap in and out to avoid fare disputes!</p>
      </div>
    </div>
  );
};

const CarbonFootprint: React.FC<CarbonFootprintProps> = ({ data }) => {
  if (!data || !data.carbon_saved_kg) return null;
  
  const treesSaved = Math.round(data.carbon_saved_kg / 20); // Rough estimation: 1 tree absorbs about 20kg CO2 per year
  
  return (
    <div className="card mb-6 bg-gradient-to-r from-green-500 to-green-700 text-white">
      <h2 className="text-2xl font-bold mb-4">Your Environmental Impact</h2>
      <div className="text-center">
        <p className="text-5xl font-bold mb-4">{data.carbon_saved_kg} kg</p>
        <p className="text-xl">CO₂ saved by choosing transit</p>
        
        {treesSaved > 0 && (
          <p className="mt-4">That's like planting {treesSaved} trees!</p>
        )}
      </div>
    </div>
  );
};

const SummaryPage: React.FC = () => {
  const { analyticsData, loading, error, file } = useContext(DataContext);
  const navigate = useNavigate();
  
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
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-translink-blue">Your Compass Wrapped</h1>
          <p className="text-xl text-gray-600 mt-2">Here's your transit year in review</p>
        </div>
        
        <div className="space-y-8">
          <TotalStats data={analyticsData.total_stats} />
          <RouteStats data={analyticsData.route_stats} />
          <TimeStats data={analyticsData.time_stats} />
          <TransferStats data={analyticsData.transfer_stats} />
          <PersonalityType data={analyticsData.personality} />
          <Achievements data={analyticsData.achievements} />
          <MissingTaps data={analyticsData.missing_taps} />
          <CarbonFootprint data={analyticsData.carbon_footprint} />
          
          <div className="text-center">
            <button 
              className="bg-translink-blue hover:bg-translink-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              onClick={() => navigate('/share')}
            >
              Create Shareable Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage; 