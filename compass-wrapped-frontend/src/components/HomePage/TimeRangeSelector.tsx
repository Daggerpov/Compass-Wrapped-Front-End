import React from 'react';
import { Button } from '../../components/ui/button';

interface TimeRangeSelectorProps {
  timeRange: string;
  setTimeRange: (range: string) => void;
  getTimeRangeText: () => string;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ 
  timeRange, 
  setTimeRange, 
  getTimeRangeText 
}) => {
  return (
    <div className="text-center mb-10 animate-slide-up">
      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-translink-blue/15 to-translink-light-blue/30 text-translink-blue font-medium rounded-full mb-4 text-xs shadow-sm">
        Your Personal Transit Journey
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight tracking-tight">
        Discover Your <span className="bg-gradient-to-r from-translink-blue to-translink-secondary bg-clip-text text-transparent">
          {getTimeRangeText()}</span> Transit Story
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg mx-auto leading-relaxed">
        Upload your Compass Card data to visualize and explore your transit habits and patterns
      </p>

      <div className="flex justify-center gap-3 mb-6">
        {['week', 'month', 'year'].map((range) => (
          <Button
            key={range}
            onClick={() => setTimeRange(range)}
            variant={timeRange === range ? 'default' : 'outline'}
            size="sm"
            className={`px-5 py-2 ${timeRange === range ? 'shadow-md' : ''} transition-all duration-300`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}ly
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimeRangeSelector; 