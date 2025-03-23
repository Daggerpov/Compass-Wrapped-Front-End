import React from 'react';
import { useDropzone } from 'react-dropzone';
import compassCard from '../../assets/compass-card.svg';
import { Button } from '../../components/ui/button';

interface FileDropzoneProps {
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
  isUploaded: boolean;
  handleContinue: () => void;
  getTimeRangeText: () => string;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  getRootProps,
  getInputProps,
  isDragActive,
  isHovering,
  setIsHovering,
  isUploaded,
  handleContinue,
  getTimeRangeText
}) => {
  return (
    <>
      <div 
        {...getRootProps()} 
        className={`card p-6 text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-card animate-slide-up ${
          isDragActive 
            ? 'border-translink-blue border-2 bg-translink-light-blue/50 scale-[1.01]' 
            : isHovering
            ? 'border-translink-blue/30 bg-translink-light-blue/20'
            : 'hover:border-gray-200 border border-gray-100'
        }`}
        style={{ animationDelay: '0.3s' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <input {...getInputProps()} />
        <div className="mb-4">
          <div className={`w-10 h-10 mx-auto mb-3 bg-translink-blue/10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
            isDragActive ? 'scale-110 bg-translink-blue/20' : isHovering ? 'scale-105 bg-translink-blue/15' : ''
          }`}>
            <img src={compassCard} alt="Upload" className={`w-4 h-4 transition-all duration-300 ${isDragActive ? 'scale-110' : isHovering ? 'scale-105' : ''}`} />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            {isDragActive ? 'Drop your file here' : 'Drop your CSV file here'}
          </h3>
          <p className="text-gray-600 text-sm max-w-sm mx-auto">
            {isDragActive 
              ? 'Release to upload your Compass Card data' 
              : 'or click to select your Compass Card transaction history'}
          </p>
        </div>
      </div>

      {isUploaded && (
        <div className="mt-6 text-center animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <Button
            onClick={handleContinue}
            size="lg"
          >
            View Your {getTimeRangeText()} Insights
          </Button>
          <p className="mt-3 text-sm text-gray-500">See your transit patterns, favorite routes, and more</p>
        </div>
      )}
    </>
  );
};

export default FileDropzone; 