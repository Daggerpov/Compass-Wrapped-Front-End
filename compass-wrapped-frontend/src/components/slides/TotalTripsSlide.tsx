import React from 'react';

interface TotalTripsSlideProps {
  totalTrips: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({ totalTrips }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-translink-blue text-white px-6 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-4">Your Total Trips</h2>
      
      {/* Large trip count number */}
      <div className="text-center">
        <div className="text-[120px] font-bold leading-none">{totalTrips}</div>
      </div>
      
      {/* Footer text */}
      <div className="mt-auto text-center text-xs opacity-80 max-w-xs">
        <p>That's {Math.round(totalTrips / 30)} trips per month on average!</p>
        <p className="mt-2">By taking transit instead of driving, you've helped reduce Vancouver's carbon footprint.</p>
      </div>
    </div>
  );
};

export default TotalTripsSlide; 