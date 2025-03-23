import React, { useState, useRef } from 'react';
import compassCardImg from '../assets/new-from-figma/compass-card.png';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useData } from '../hooks/useData';

const FileDropzone: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { processCSVData } = useData();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    setError(null);
    
    try {
      if (file.type !== 'text/csv') {
        setError('Please upload a CSV file.');
        return;
      }
      
      const success = await processCSVData(file);
      
      if (success) {
        navigate('/summary');
      } else {
        setError('There was a problem processing your CSV file. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while processing your file. Please try again.');
      console.error(err);
    }
  };

  return (
    <>
      <div 
        className={`border-2 border-dashed rounded-xl p-6 flex-col-center cursor-pointer transition-all ${
          isDragging 
            ? 'border-translink-blue bg-translink-blue/5' 
            : 'border-gray-200 hover:border-translink-blue/50 hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <img 
          src={compassCardImg} 
          alt="Compass Card" 
          className={`w-24 h-auto mb-4 transition-transform ${isDragging ? 'scale-110' : ''}`}
        />
        
        <h3 className="text-lg font-medium text-gray-800 mb-2 text-center">
          Upload Your Compass Card CSV
        </h3>
        
        <p className="text-gray-600 mb-4 text-center max-w-md">
          Drag and drop your CSV file here, or click to browse
        </p>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          className="hidden"
          accept=".csv"
        />

        {error && (
          <div className="text-red-500 mt-2 text-center">
            {error}
          </div>
        )}
      </div>

      <div className="mt-6 flex-center">
        <Button
          variant="outline"
          onClick={() => navigate('/summary')}
          className="flex items-center gap-2"
        >
          View Example Insights
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default FileDropzone; 