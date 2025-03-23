import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import compassCardImg from '../../assets/new-from-figma/compass-card.png';
import compassCardTapImg from '../../assets/new-from-figma/compass-card-tap.png';
import { cn } from '@/lib/utils';

interface FileDropzoneProps {
  getRootProps?: any;
  getInputProps?: any;
  isDragActive?: boolean;
  isHovering?: boolean;
  setIsHovering?: (isHovering: boolean) => void;
  isUploaded?: boolean;
  handleContinue?: () => void;
  getTimeRangeText?: () => string;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  getRootProps = () => ({}),
  getInputProps = () => ({}),
  isDragActive = false,
  isHovering = false,
  setIsHovering = () => {},
  isUploaded = false,
  handleContinue = () => {},
  getTimeRangeText = () => "Annual"
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Card 
        {...getRootProps()} 
        className={cn(
          "w-full max-w-xl mx-auto p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-lg relative",
          isDragActive 
            ? "border-primary border-2 bg-primary/10 scale-[1.01]" 
            : isHovering
            ? "border-primary/30 bg-primary/5"
            : "hover:border-gray-200 border"
        )}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Upload indicator icon */}
        <div className="absolute -top-3 -right-3 bg-primary rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>

        <input {...getInputProps()} />
        <CardContent className="flex flex-col items-center p-0">
          <div className={cn(
            "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 shadow-inner",
            isDragActive ? "scale-110" : isHovering ? "scale-105" : ""
          )}>
            <img 
              src={isDragActive ? compassCardTapImg : compassCardImg} 
              alt="Upload" 
              className={cn(
                "w-10 h-auto transition-all duration-300",
                isDragActive ? "scale-110" : isHovering ? "scale-105" : ""
              )} 
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
        </CardContent>
      </Card>

      <div className="mt-6 flex gap-4 justify-center w-full">
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full shadow-sm border-primary/20 hover:border-primary hover:bg-primary/5"
        >
          View Example Insights
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full shadow-sm border-primary/20 hover:border-primary hover:bg-primary/5"
        >
          View CSV Instructions
        </Button>
      </div>

      {isUploaded && (
        <div className="mt-8 text-center w-full flex flex-col items-center animate-fade-in">
          <Button
            onClick={handleContinue}
            size="lg"
            variant="default"
            className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg px-8 py-6 text-base font-medium transition-all duration-300 mx-auto"
          >
            <img src={compassCardImg} alt="" className="w-5 h-5 mr-2" />
            Explore Your {getTimeRangeText()} Transit Insights
          </Button>
          <p className="mt-4 text-base text-gray-500 text-center mx-auto">
            See your transit patterns, favorite routes, and more
          </p>
        </div>
      )}
    </div>
  );
};

export default FileDropzone; 