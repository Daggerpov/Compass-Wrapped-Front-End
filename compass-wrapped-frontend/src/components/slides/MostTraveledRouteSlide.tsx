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
    <div className="width-container h-full">
      <div 
        className={`border-2 border-dashed rounded-xl p-0 flex-col-center h-full`}>
        <div className="w-full h-full flex flex-col items-center justify-center bg-translink-yellow text-translink-blue relative py-8 px-4">
          {/* Title */}
          <h2 className="text-xl font-semibold text-center mb-4">Your Most Used Stop</h2>
          
          {/* Route Name */}
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-translink-blue">{routeDirection}</div>
            <div className="text-5xl font-bold text-translink-blue">{routeName}</div>
          </div>
          
          {/* Bus stop sign image */}
          <div className="my-4 flex-grow flex items-center justify-center">
            <img 
              src="/src/assets/new-from-figma/bus-stop-sign-example-sg-n10-removebg-preview 1.png" 
              alt="Bus Stop Sign" 
              className="h-44 object-contain"
            />
          </div>
          
          <div className="text-sm text-translink-blue opacity-80 mt-2">
            <p>Looking like a real UBC student now...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostTraveledRouteSlide; 