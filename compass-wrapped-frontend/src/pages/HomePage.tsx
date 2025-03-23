import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { getAllAnalytics } from '../services/api';
import translinkLogo from '../assets/translink-logo.svg';
import compassCard from '../assets/compass-card.svg';
import skyline from '../assets/vancouver-skyline.svg';
import skytrain from '../assets/skytrain.svg';
import CSVInstructions from '../components/CSVInstructions';

export default function HomePage() {
  const { setFile, setAnalyticsData, setLoading, setError } = useContext(DataContext);
  const [isUploaded, setIsUploaded] = useState(false);
  const [timeRange, setTimeRange] = useState('month');
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setLoading(true);
      setError(null);
      
      try {
        const response = await getAllAnalytics(file);
        setAnalyticsData(response.data);
        setFile(file);
        setIsUploaded(true);
      } catch (error) {
        setError('Error processing file. Please try again.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
  }, [setFile, setAnalyticsData, setLoading, setError]);

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements - Reduced size and opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-translink-blue/10 to-transparent opacity-50"></div>
        <img
          src={skyline}
          alt=""
          className="absolute bottom-0 left-0 w-full max-w-2xl mx-auto opacity-5"
        />
        <img
          src={skytrain}
          alt=""
          className="absolute bottom-20 right-0 w-1/6 max-w-[120px] opacity-10 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-translink-blue/5 to-transparent"></div>
        <div className="absolute top-20 left-20 w-10 h-10 rounded-full bg-translink-yellow/20 filter blur-lg"></div>
        <div className="absolute bottom-40 right-20 w-14 h-14 rounded-full bg-translink-secondary/20 filter blur-2xl"></div>
      </div>

      {/* Header - Streamlined */}
      <header className="header backdrop-blur-md bg-white/90 sticky top-0 z-50 shadow-sm">
        <div className="container-custom py-2 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-1 sm:mb-0 transition-transform duration-300 hover:scale-105">
            <img src={translinkLogo} alt="TransLink Logo" className="h-5 sm:h-6" />
          </div>
          <div className="flex items-center gap-1.5 bg-translink-blue/10 px-3 py-1 rounded-full transition-all duration-300 hover:bg-translink-blue/15">
            <img src={compassCard} alt="Compass Card" className="h-3.5 w-3.5" />
            <h2 className="text-sm font-medium text-translink-blue">
              Compass <span className="font-bold">{getTimeRangeText()}</span> Insights
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content - More compact */}
      <main className="container-custom py-8 sm:py-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <span className="inline-block px-3 py-1 bg-translink-blue/10 text-translink-blue font-medium rounded-full mb-3 text-xs">
              Your Personal Transit Story
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Discover Your <span className="text-translink-blue">{getTimeRangeText()}</span> Transit Journey
            </h1>
            <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
              Upload your Compass Card data to see personalized insights about your transit habits and patterns
            </p>

            {/* Time Range Selection - More compact */}
            <div className="flex justify-center gap-2 mb-6">
              {['week', 'month', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 transform ${
                    timeRange === range
                      ? 'bg-translink-blue text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}ly
                </button>
              ))}
            </div>
          </div>

          {/* CSV Instructions - More compact */}
          <div className="mb-6 animate-slide-up transform hover:translate-y-[-3px] transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <CSVInstructions />
          </div>

          {/* Upload Area - More compact */}
          <div 
            {...getRootProps()} 
            className={`card p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-lg animate-slide-up ${
              isDragActive 
                ? 'border-translink-blue border-2 bg-blue-50/70 scale-[1.01]' 
                : isHovering
                ? 'border-gray-300 bg-blue-50/30 scale-[1.005]'
                : 'hover:border-gray-300'
            }`}
            style={{ animationDelay: '0.4s' }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <input {...getInputProps()} />
            <div className="mb-4">
              <div className={`w-12 h-12 mx-auto mb-3 bg-translink-blue/10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
                isDragActive ? 'scale-110 bg-translink-blue/20' : isHovering ? 'scale-105 bg-translink-blue/15' : ''
              }`}>
                <img src={compassCard} alt="Upload" className={`w-7 h-7 transition-all duration-300 ${isDragActive ? 'scale-110' : isHovering ? 'scale-105' : ''}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {isDragActive ? 'Drop your file here' : 'Drop your CSV file here'}
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                {isDragActive 
                  ? 'Release to upload your Compass Card data' 
                  : 'or click to select your Compass Card transaction history'}
              </p>
            </div>
            <div className="flex justify-center">
              <div className={`flex items-center gap-1.5 text-xs text-translink-blue font-medium ${isDragActive ? 'opacity-0' : 'opacity-80'}`}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Your data remains private and never leaves your device</span>
              </div>
            </div>
          </div>

          {isUploaded && (
            <div className="mt-8 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={handleContinue}
                className="btn btn-primary shadow-md shadow-blue-200/60 hover:shadow-lg hover:shadow-blue-300/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Your {getTimeRangeText()} Insights
                <svg
                  className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
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
              <p className="mt-3 text-xs text-gray-500">See your transit patterns, favorite routes, and more</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer - Streamlined */}
      <footer className="container-custom py-6 relative z-10 border-t border-gray-100 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-3 sm:mb-0">© 2024 TransLink. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-translink-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-translink-blue transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-gray-500 hover:text-translink-blue transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
