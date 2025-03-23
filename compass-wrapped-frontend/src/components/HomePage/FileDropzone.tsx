import React from 'react';
import compassCardImg from '../../assets/new-from-figma/compass-card.png';
import compassCardTapImg from '../../assets/new-from-figma/compass-card-tap.png';
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
    <div className="w-full flex-col-center">
      <div 
        {...getRootProps()} 
        className={`card p-8 text-center cursor-pointer transition-all duration-300 shadow-md rounded-2xl hover:shadow-card animate-slide-up mx-auto w-full max-w-lg ${
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
        <div className="mb-6 flex-col-center">
          <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-translink-blue/20 to-translink-light-blue/40 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 shadow-inner ${
            isDragActive ? 'scale-110 bg-translink-blue/20' : isHovering ? 'scale-105 bg-translink-blue/15' : ''
          }`}>
            <img 
              src={isDragActive ? compassCardTapImg : compassCardImg} 
              alt="Upload" 
              className={`w-10 h-auto transition-all duration-300 ${isDragActive ? 'scale-110' : isHovering ? 'scale-105' : ''}`} 
            />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
            {isDragActive ? 'Drop to Upload Your File' : 'Upload Your CSV File'}
          </h3>
          <p className="text-gray-600 text-base max-w-md mx-auto leading-relaxed text-center">
            {isDragActive 
              ? 'Release to process your Compass Card data' 
              : 'Drag & drop your Compass Card transaction history or click to browse'}
          </p>
        </div>
      </div>

      {isUploaded && (
        <div className="mt-8 text-center animate-slide-up w-full flex-col-center" style={{ animationDelay: '0.45s' }}>
          <Button
            onClick={handleContinue}
            size="lg"
            className="bg-gradient-to-r from-translink-blue to-translink-secondary hover:shadow-lg px-8 py-6 text-base font-medium transition-all duration-300 mx-auto"
          >
            <img src={compassCardImg} alt="" className="w-5 h-5 mr-2" />
            Explore Your {getTimeRangeText()} Transit Insights
          </Button>
          <p className="mt-4 text-base text-gray-500 text-center mx-auto">See your transit patterns, favorite routes, and more</p>
        </div>
      )}
    </div>
  );
};

export default FileDropzone; 