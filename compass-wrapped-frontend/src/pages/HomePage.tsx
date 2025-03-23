import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { uploadCSV, getAllAnalytics } from '../services/api';
import translinkLogo from '../assets/translink-logo.svg';
import compassCard from '../assets/compass-card.svg';
import skyline from '../assets/vancouver-skyline.svg';
import skytrain from '../assets/skytrain.svg';

const HomePage: React.FC = () => {
  const { setFile, setAnalyticsData, setLoading, setError } = useContext(DataContext);
  const [isDragging, setIsDragging] = useState(false);
  const [animateTrain, setAnimateTrain] = useState(false);
  const navigate = useNavigate();

  // Animation effects when component mounts
  useEffect(() => {
    // Animate train
    setTimeout(() => {
      setAnimateTrain(true);
    }, 500);
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.endsWith('.csv')) {
        handleFileUpload(file);
      } else {
        setError('Please upload a CSV file');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      setLoading(true);
      setFile(file);
      
      // Upload the file
      await uploadCSV(file);
      
      // Get all analytics
      const response = await getAllAnalytics(file);
      setAnalyticsData(response.data);
      
      // Navigate to summary page
      navigate('/summary');
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error processing your data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background image - skyline with reduced size */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-48 z-0">
        <img src={skyline} alt="Vancouver Skyline" className="w-full h-full object-cover object-bottom" />
      </div>
      
      {/* Animated SkyTrain with reduced size */}
      <div className={`absolute bottom-48 transition-all duration-10000 ease-linear ${animateTrain ? 'left-full -translate-x-full' : '-left-40'}`}>
        <img src={skytrain} alt="SkyTrain" className="h-12 w-auto" />
      </div>
      
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
      
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 relative z-10">
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 py-8">
          {/* Left side - Compass Card */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end transform hover:rotate-3 transition-transform">
            <div className="w-full max-w-xs mx-auto mb-6">
              <img src={compassCard} alt="Compass Card" className="w-full drop-shadow-lg" />
            </div>
          </div>
          
          {/* Right side - Upload Form */}
          <div className="w-full lg:w-3/5 lg:pl-4">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-translink-blue mb-4">Compass Wrapped 2023</h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover your transit journey patterns, most visited stops, and much more with your personalized year in review.
              </p>
              
              {/* Upload Area */}
              <div 
                className={`bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-dashed transition-all ${
                  isDragging ? 'border-translink-blue bg-blue-50 scale-105' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <svg className="mx-auto h-16 w-16 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">Upload Your Compass Data</h3>
                  <p className="text-gray-600 mb-4">
                    Drag and drop your Compass Card CSV file here
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="h-px bg-gray-300 flex-grow mr-4"></div>
                    <p className="text-sm text-gray-500">OR</p>
                    <div className="h-px bg-gray-300 flex-grow ml-4"></div>
                  </div>
                  <div className="mt-4">
                    <label className="bg-translink-blue hover:bg-translink-secondary text-white py-3 px-6 rounded-lg cursor-pointer transition-colors inline-block font-medium">
                      Browse Files
                      <input 
                        type="file" 
                        className="hidden" 
                        accept=".csv" 
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">Only CSV files are accepted</p>
                </div>
              </div>
              
              {/* How to get data */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-translink-blue flex items-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  How to get your Compass data
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                  <li className="pb-2 border-b border-gray-100">Log in to your Compass Card account at <a href="https://www.compasscard.ca" target="_blank" rel="noopener noreferrer" className="text-translink-blue hover:underline font-medium">compasscard.ca</a></li>
                  <li className="py-2 border-b border-gray-100">Go to "Card Usage" section in your account dashboard</li>
                  <li className="py-2 border-b border-gray-100">Select the date range for the year <span className="text-gray-500">(Jan 1, 2023 - Dec 31, 2023)</span></li>
                  <li className="py-2 border-b border-gray-100">Click "Export" or "Download as CSV" button</li>
                  <li className="pt-2">Upload the downloaded file using the form above</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p className="mb-2">Compass Wrapped is an unofficial tool and not affiliated with TransLink.</p>
          <p>TransLink and Compass Card are trademarks of the South Coast British Columbia Transportation Authority.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 