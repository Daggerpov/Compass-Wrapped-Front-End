import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { toPng } from 'html-to-image';
import translinkLogo from '../assets/translink-logo.svg';
import compassCard from '../assets/compass-card.svg';

const SharePage: React.FC = () => {
  const { analyticsData, file } = useContext(DataContext);
  const navigate = useNavigate();
  const shareableRef = useRef<HTMLDivElement>(null);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);
  
  // Redirect if no data
  React.useEffect(() => {
    if (!file || !analyticsData) {
      navigate('/');
    }
  }, [file, analyticsData, navigate]);
  
  const generateImage = async () => {
    if (shareableRef.current) {
      try {
        const dataUrl = await toPng(shareableRef.current, { quality: 0.95 });
        setDownloadURL(dataUrl);
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };
  
  if (!analyticsData) {
    return null;
  }
  
  // Extract key stats
  const totalTrips = analyticsData.total_stats?.total_trips || 0;
  const totalHours = analyticsData.time_stats?.total_commute_hours || 0;
  const mostUsedStop = analyticsData.route_stats?.most_used_stops?.[0]?.stop_name || 
                       analyticsData.route_stats?.most_used_stops?.[0]?.stop_id || 'Unknown';
  const personalityType = analyticsData.personality?.personality_type || 'Transit Rider';
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="relative z-10 pt-6 pb-4 px-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="w-48 mb-4 sm:mb-0">
            <img src={translinkLogo} alt="TransLink Logo" className="w-full" />
          </div>
          <div className="flex items-center gap-3">
            <img src={compassCard} alt="Compass Card" className="h-10 w-auto" />
            <h2 className="text-xl font-medium text-translink-blue">Compass Wrapped 2023</h2>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-translink-blue mb-2">Share Your Compass Wrapped</h1>
          <p className="text-gray-600">Generate an image to share your transit year in review</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8" ref={shareableRef}>
          <div className="bg-gradient-to-r from-translink-blue to-translink-secondary text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-2xl font-bold text-center">My Compass Wrapped 2023</h2>
          </div>
          
          <div className="p-6 bg-white rounded-b-lg">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-translink-blue">{totalTrips}</p>
                <p className="text-gray-600">Total Trips</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-translink-blue">{totalHours.toFixed(1)}</p>
                <p className="text-gray-600">Hours on Transit</p>
              </div>
            </div>
            
            <div className="text-center mb-6 border-t border-b border-gray-200 py-4">
              <p className="text-lg">Most frequent stop</p>
              <p className="text-2xl font-bold text-translink-blue">{mostUsedStop}</p>
            </div>
            
            <div className="text-center">
              <p className="text-lg">My transit personality</p>
              <p className="text-3xl font-bold text-translink-secondary">{personalityType}</p>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">Generated at compasswrapped.example.com</p>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          {!downloadURL ? (
            <button 
              className="bg-translink-blue hover:bg-translink-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              onClick={generateImage}
            >
              Generate Image
            </button>
          ) : (
            <>
              <p className="text-green-600 font-semibold">Image generated successfully!</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href={downloadURL} 
                  download="compass-wrapped.png"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  Download Image
                </a>
                <button 
                  className="bg-translink-blue hover:bg-translink-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                  onClick={() => setDownloadURL(null)}
                >
                  Regenerate
                </button>
              </div>
            </>
          )}
          
          <div>
            <button 
              className="text-translink-blue hover:underline font-semibold mt-4"
              onClick={() => navigate('/summary')}
            >
              Back to Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage; 