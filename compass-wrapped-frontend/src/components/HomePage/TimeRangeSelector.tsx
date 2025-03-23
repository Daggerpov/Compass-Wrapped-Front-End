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
    <div className="text-center mb-8 animate-slide-up">
      <span className="inline-block px-3 py-1 bg-translink-blue/15 text-translink-blue font-medium rounded-full mb-3 text-xs shadow-sm">
        Your Personal Transit Story
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
        Discover Your <span className="text-translink-blue bg-gradient-to-r from-translink-blue to-translink-secondary bg-clip-text text-transparent">
          {getTimeRangeText()}</span> Transit Journey
      </h1>
      <p className="text-base text-gray-600 mb-5 max-w-md mx-auto leading-relaxed">
        Upload your Compass Card data to see personalized insights about your transit habits
      </p>

      <div className="flex justify-center gap-2 mb-5">
        {['week', 'month', 'year'].map((range) => (
          <Button
            key={range}
            onClick={() => setTimeRange(range)}
            variant={timeRange === range ? 'default' : 'outline'}
            size="sm"
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}ly
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimeRangeSelector; 