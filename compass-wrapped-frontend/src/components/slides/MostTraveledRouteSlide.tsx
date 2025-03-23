import React from 'react';

interface MostTraveledRouteSlideProps {
  routeName?: string;
  routeDirection?: string;
}

const MostTraveledRouteSlide: React.FC<MostTraveledRouteSlideProps> = ({ 
  routeName = "University Blvd", 
  routeDirection = "Eastbound" 
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-translink-yellow text-translink-blue px-6 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-8">Your Most Used Stop</h2>
      
      {/* Route Name */}
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-translink-blue">{routeDirection}</div>
        <div className="text-5xl font-bold text-translink-blue">{routeName}</div>
      </div>
      
      <div className="mt-auto text-sm text-translink-blue opacity-80">
        <p>Looking like a real UBC student now...</p>
      </div>
    </div>
  );
};

export default MostTraveledRouteSlide; 