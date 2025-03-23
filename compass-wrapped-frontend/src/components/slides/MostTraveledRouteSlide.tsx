import React from 'react';

interface MostUsedStop {
  stop_id: string;
  stop_name?: string;
  count: number;
}

interface MostTraveledRouteSlideProps {
  mostUsedStop: MostUsedStop;
}

const MostTraveledRouteSlide: React.FC<MostTraveledRouteSlideProps> = ({ mostUsedStop }) => {
  const stopName = mostUsedStop.stop_name || `Stop ${mostUsedStop.stop_id}`;
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-translink-yellow px-6 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-8">Your Most Used Stop</h2>
      
      {/* Stop Name */}
      <div className="text-center">
        <div className="text-3xl font-bold text-black mb-4">{stopName}</div>
      </div>
      
      {/* My Top Stop with larger display */}
      <div className="mt-4 mb-8">
        <div className="text-center">
          <p className="text-sm font-medium text-gray-800">My Top Stop</p>
          <div className="text-4xl font-bold text-black mt-2">{stopName}</div>
          <p className="mt-8 text-sm text-gray-800">
            You visited this stop {mostUsedStop.count} times
          </p>
        </div>
      </div>
    </div>
  );
};

export default MostTraveledRouteSlide; 