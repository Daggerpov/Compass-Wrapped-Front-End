import React from 'react';

interface TotalTripsSlideProps {
  totalTrips: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({ totalTrips }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-translink-blue text-white px-6 py-12 overflow-hidden">
      {/* Decorative waves */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 C150,80 350,0 500,80 L500,0 L0,0 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-full rotate-180">
        <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full">
          <path d="M0,0 C150,80 350,0 500,80 L500,0 L0,0 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold mb-8 text-center">Your Total Trips</h2>
      
      <div className="relative mb-6">
        <span className="text-9xl font-bold tracking-tighter">{totalTrips}</span>
        <div className="absolute -top-4 -right-4 bg-translink-yellow rounded-full p-3 shadow-lg">
          <svg className="w-8 h-8 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
      </div>
      
      <p className="text-center text-xl mb-8">
        That's {totalTrips} times you tapped in this year—way to go!
      </p>
      
      {/* Progress bar */}
      <div className="w-full max-w-md bg-white bg-opacity-20 rounded-full h-4 mb-2">
        <div 
          className="bg-translink-yellow h-4 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(100, (totalTrips / 500) * 100)}%` }}
        ></div>
      </div>
      <p className="text-sm">Top {(0.5).toFixed(1)}% of riders in Vancouver!</p>
      
      {/* Bus illustration */}
      <div className="absolute bottom-0 right-0 w-36 h-36 opacity-90">
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <path d="M416,128V64a32.036,32.036,0,0,0-32-32H64A32.036,32.036,0,0,0,32,64V384a32.036,32.036,0,0,0,32,32h27.22A48.009,48.009,0,0,0,136,464h16a48.009,48.009,0,0,0,76.78-48h54.44A48.009,48.009,0,0,0,360,464h16a48.009,48.009,0,0,0,76.78-48H480a32.036,32.036,0,0,0,32-32V224A96.108,96.108,0,0,0,416,128ZM192,416a16,16,0,1,1-16-16A16.019,16.019,0,0,1,192,416Zm184,0a16,16,0,1,1-16-16A16.019,16.019,0,0,1,376,416ZM416,160a64.072,64.072,0,0,1,64,64H416Zm-48,80h48V352H368ZM64,96H384v56.488A95.693,95.693,0,0,0,352,144H64ZM64,176H352v64H64Zm0,96H336v48H64Z" fill="white"/>
          <circle cx="128" cy="384" r="32" fill="#FFD800"/>
          <circle cx="384" cy="384" r="32" fill="#FFD800"/>
        </svg>
      </div>
    </div>
  );
};

export default TotalTripsSlide; 