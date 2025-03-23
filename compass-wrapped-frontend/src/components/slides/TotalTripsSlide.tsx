import React from 'react';
import compassCardImg from '../../assets/new-from-figma/compass-card.png';

interface TotalTripsSlideProps {
  totalTrips?: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({ totalTrips = 312 }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-translink-blue text-white px-6 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-4">Your Total Trips</h2>
      
      {/* Large trip count number */}
      <div className="text-center">
        <div className="text-[120px] font-bold leading-none">{totalTrips}</div>
      </div>
      
      {/* Compass card image */}
      <div className="mt-auto mb-4 text-center">
        <img 
          src={compassCardImg} 
          alt="Compass Card" 
          className="h-16 w-auto inline-block"
        />
        <p className="text-xs mt-4 max-w-xs opacity-80">
          That's {Math.round(totalTrips / 30)} trips on average per month!
          <br />
          The #99 is your favorite route overall.
        </p>
      </div>
    </div>
  );
};

export default TotalTripsSlide; 