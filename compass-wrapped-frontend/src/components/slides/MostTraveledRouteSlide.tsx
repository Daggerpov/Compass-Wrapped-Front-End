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
  const stopName = mostUsedStop.stop_name || `Bus Stop ${mostUsedStop.stop_id}`;
  const useCount = mostUsedStop.count;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-translink-blue text-center">Most Traveled Routes</h2>
      
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl p-6 mb-8">
        {/* Map-like background */}
        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#e5e7eb" />
            <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="0.5" />
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="#f9fafb" stroke="#d1d5db" strokeWidth="0.5" />
            <line x1="0" y1="20" x2="100" y2="20" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="0" y1="40" x2="100" y2="40" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="0" y1="60" x2="100" y2="60" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="0" y1="80" x2="100" y2="80" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="20" y1="0" x2="20" y2="100" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="40" y1="0" x2="40" y2="100" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="60" y1="0" x2="60" y2="100" stroke="#d1d5db" strokeWidth="0.2" />
            <line x1="80" y1="0" x2="80" y2="100" stroke="#d1d5db" strokeWidth="0.2" />
          </svg>
        </div>
        
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-translink-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-lg font-medium text-gray-500">Your Most Used Stop</span>
          </div>
          
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-translink-blue rounded-lg transform rotate-1"></div>
            <div className="relative bg-white border-2 border-translink-blue rounded-lg px-6 py-3 transform -rotate-1">
              <div className="flex items-center justify-center mb-1">
                <svg className="w-6 h-6 text-translink-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <h3 className="text-xl font-bold text-translink-blue">{stopName}</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center mb-4">
          <div className="w-24 h-24 rounded-full bg-translink-blue flex items-center justify-center text-white">
            <div className="text-center">
              <span className="block text-3xl font-bold">{useCount}</span>
              <span className="text-xs">times</span>
            </div>
          </div>
        </div>
        
        <p className="text-center text-gray-600">
          Looks like you really love this route!
        </p>
      </div>
      
      {/* Heat map dots */}
      <div className="relative w-full max-w-md h-16">
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-translink-secondary rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-translink-secondary rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-5 h-5 bg-translink-secondary rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-translink-secondary rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-translink-secondary rounded-full opacity-20"></div>
        </div>
        
        {/* Main frequent stop */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-ping w-12 h-12 bg-translink-yellow rounded-full opacity-30 absolute"></div>
          <div className="relative w-10 h-10 bg-translink-blue rounded-full flex items-center justify-center border-2 border-white">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostTraveledRouteSlide; 