import React from 'react';
import busImg from '../../assets/new-from-figma/longer-bus-facing-right.png';

interface TransferSlideProps {
  transferSpot?: string;
}

const TransferSlide: React.FC<TransferSlideProps> = ({ 
  transferSpot = "Broadway-City Hall Stn" 
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-translink-blue text-white px-6 py-10">
      <h2 className="text-xl font-semibold text-center mb-6">Your Favorite Transfer Spot:</h2>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-center">{transferSpot}</div>
        <img
          src={busImg}
          alt="Bus"
          className="h-32 w-auto mt-12"
        />
      </div>
      
      <div className="mt-auto text-center text-sm opacity-80">
        <p>Quite the popular transfer point for the city!</p>
      </div>
    </div>
  );
};

export default TransferSlide; 