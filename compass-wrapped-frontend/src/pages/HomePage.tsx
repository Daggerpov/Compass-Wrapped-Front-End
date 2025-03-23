import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { getAllAnalytics } from '../services/api';
import { useDropzone } from 'react-dropzone';
import translinkLogo from '../assets/translink-logo.svg';
import compassCard from '../assets/compass-card.svg';
import skyline from '../assets/skyline.svg';
import skytrain from '../assets/skytrain.svg';
import CSVInstructions from '../components/CSVInstructions';

const HomePage: React.FC = () => {
  const { setFile, setAnalyticsData, setLoading, setError } = useContext(DataContext);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [timeRange, setTimeRange] = useState('month');
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log('Files uploaded:', acceptedFiles);
    setIsUploaded(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    }
  });

  const handleContinue = () => {
    navigate('/summary');
  };

  const getTimeRangeText = () => {
    switch (timeRange) {
      case 'week':
        return 'Weekly';
      case 'month':
        return 'Monthly';
      case 'year':
        return 'Yearly';
      default:
        return 'Transit';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <img
        src={skyline}
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none"
      />
      <img
        src={skytrain}
        alt=""
        className="absolute bottom-20 right-0 w-1/2 opacity-20 pointer-events-none animate-slide-right"
      />

      {/* Header */}
      <header className="header">
        <div className="container-custom py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <img src={translinkLogo} alt="TransLink Logo" className="img-logo" />
          </div>
          <div className="flex items-center gap-3">
            <img src={compassCard} alt="Compass Card" className="img-icon" />
            <h2 className="text-xl font-medium text-translink-blue">
              Compass {getTimeRangeText()} Insights
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="mb-4">Discover Your {getTimeRangeText()} Transit Journey</h1>
            <p className="text-lg text-gray-600 mb-8">
              Upload your Compass Card data to see your personalized {timeRange}ly transit insights
            </p>

            {/* Time Range Selection */}
            <div className="flex justify-center gap-4 mb-8">
              {['week', 'month', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    timeRange === range
                      ? 'bg-translink-blue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}ly
                </button>
              ))}
            </div>
          </div>

          {/* CSV Instructions */}
          <div className="mb-12">
            <CSVInstructions />
          </div>

          {/* Upload Area */}
          <div 
            {...getRootProps()} 
            className={`card p-8 text-center cursor-pointer transition-all duration-200 ${
              isDragActive ? 'border-translink-blue border-2' : ''
            }`}
          >
            <input {...getInputProps()} />
            <div className="mb-4">
              <img src={compassCard} alt="Upload" className="img-card mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-2">Drop your CSV file here</h3>
              <p className="text-gray-600">
                or click to select your Compass Card transaction history
              </p>
            </div>
          </div>

          {isUploaded && (
            <div className="mt-8 text-center animate-slide-up">
              <button
                onClick={handleContinue}
                className="btn btn-primary"
              >
                View Your {getTimeRangeText()} Insights
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="container-custom py-8">
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 TransLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 