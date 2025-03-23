import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { getAllAnalytics } from '../services/api';
import CSVInstructions from '../components/CSVInstructions';
import { 
  Header, 
  Background, 
  TimeRangeSelector, 
  FileDropzone, 
  Footer 
} from '../components/HomePage';

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
    <div className="flex-col-center min-h-screen bg-gradient-to-b from-translink-blue/5 via-white to-translink-gray/20 relative overflow-hidden">
      <Background />
      <div className="w-full">
        <Header timeRangeText={getTimeRangeText()} />
      </div>

      <main className="center-container py-14 sm:py-16 relative z-10">
        <div className="width-container flex-col-center">
          <TimeRangeSelector 
            timeRange={timeRange} 
            setTimeRange={setTimeRange} 
            getTimeRangeText={getTimeRangeText} 
          />

          <div className="w-full mb-8 animate-slide-up transform hover:shadow-lg hover:translate-y-[-2px] transition-transform duration-300 shadow-md rounded-2xl overflow-hidden" style={{ animationDelay: '0.15s' }}>
            <CSVInstructions />
          </div>

          <FileDropzone
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            isHovering={isHovering}
            setIsHovering={setIsHovering}
            isUploaded={isUploaded}
            handleContinue={handleContinue}
            getTimeRangeText={getTimeRangeText}
          />
        </div>
      </main>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
