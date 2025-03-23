import React from 'react';
import compassCardImg from '../../assets/new-from-figma/compass-card.png';

interface TotalTripsSlideProps {
  totalTrips?: number;
  month?: string;
  year?: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({ 
  totalTrips = 245, 
  month = "MARCH",
  year = 2023
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-translink-blue text-white px-6 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{month}</h2>
        <h1 className="text-4xl font-bold">COMPASS</h1>
        <h1 className="text-4xl font-bold mb-8">WRAPPED</h1>
      </div>
      
      <div className="mt-4 text-center">
        <div className="text-6xl font-bold mb-2">{totalTrips}</div>
        <p className="text-xl mb-6">Total Rides</p>
      </div>
      
      <div className="mt-4 flex items-center justify-center">
        <img
          src={compassCardImg}
          alt="Compass Card"
          className="h-16 w-auto inline-block"
        />
      </div>
      
      <div className="mt-6 text-center text-sm opacity-80">
        <p>That's {Math.round(totalTrips / 30)} trips on average per month in {year}!</p>
      </div>
    </div>
  );
};

export default TotalTripsSlide; 