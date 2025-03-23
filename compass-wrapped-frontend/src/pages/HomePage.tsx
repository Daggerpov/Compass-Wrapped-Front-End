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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={skyline}
          alt=""
          className="absolute bottom-0 left-0 w-full opacity-5 transform scale-110"
        />
        <img
          src={skytrain}
          alt=""
          className="absolute bottom-20 right-0 w-1/2 opacity-10 animate-slide-right"
        />
      </div>

      {/* Header */}
      <header className="header backdrop-blur-sm bg-white/90 sticky top-0 z-50">
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
      <main className="container-custom py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Discover Your {getTimeRangeText()} Transit Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Upload your Compass Card data to see your personalized {timeRange}ly transit insights
            </p>

            {/* Time Range Selection */}
            <div className="flex justify-center gap-4 mb-8">
              {['week', 'month', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    timeRange === range
                      ? 'bg-translink-blue text-white shadow-md shadow-blue-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range.charAt(0).toUpperCase() + range.slice(1)}ly
                </button>
              ))}
            </div>
          </div>

          {/* CSV Instructions */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CSVInstructions />
          </div>

          {/* Upload Area */}
          <div 
            {...getRootProps()} 
            className={`card p-12 text-center cursor-pointer transition-all duration-300 hover:shadow-lg animate-slide-up ${
              isDragActive 
                ? 'border-translink-blue border-2 bg-blue-50/50' 
                : 'hover:border-gray-300'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <input {...getInputProps()} />
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                <img src={compassCard} alt="Upload" className="w-20 h-20 opacity-80" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Drop your CSV file here</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                or click to select your Compass Card transaction history
              </p>
            </div>
          </div>

          {isUploaded && (
            <div className="mt-8 text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={handleContinue}
                className="btn btn-primary shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-200/60 transform hover:-translate-y-0.5"
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
      <footer className="container-custom py-8 relative z-10">
        <div className="text-center text-sm text-gray-500">
          <p>© 2024 TransLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 