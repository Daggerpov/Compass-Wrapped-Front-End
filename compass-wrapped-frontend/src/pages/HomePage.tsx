import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { uploadCSV, getAllAnalytics } from '../services/api';

const HomePage: React.FC = () => {
  const { setFile, setAnalyticsData, setLoading, setError } = useContext(DataContext);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-translink-blue mb-4">Compass Wrapped</h1>
          <p className="text-xl text-gray-600">See your TransLink transit usage insights for the year</p>
        </div>
        
        <div 
          className={`bg-white rounded-lg shadow-md p-8 mb-6 border-2 border-dashed transition-all ${
            isDragging ? 'border-translink-blue bg-blue-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <div className="mb-4">
              <svg className="mx-auto h-16 w-16 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-lg mb-2">Drag and drop your Compass data CSV file here</p>
            <p className="text-sm text-gray-500 mb-4">or</p>
            <label className="bg-translink-blue hover:bg-translink-secondary text-white py-2 px-4 rounded-lg cursor-pointer transition-colors">
              Browse Files
              <input 
                type="file" 
                className="hidden" 
                accept=".csv" 
                onChange={handleFileChange}
              />
            </label>
            <p className="mt-4 text-sm text-gray-500">Only CSV files are accepted</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3 text-translink-blue">How to get your Compass data</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Log in to your Compass Card account at <a href="https://www.compasscard.ca" target="_blank" rel="noopener noreferrer" className="text-translink-blue hover:underline">compasscard.ca</a></li>
            <li>Go to "Card Usage" section</li>
            <li>Select the date range for the year</li>
            <li>Click "Export" or "Download as CSV"</li>
            <li>Upload the downloaded file here</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 