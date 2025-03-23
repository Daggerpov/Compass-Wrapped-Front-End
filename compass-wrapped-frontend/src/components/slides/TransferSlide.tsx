import React from 'react';

interface TransferData {
  from_stop_id: string;
  from_stop_name?: string;
  to_stop_id: string;
  to_stop_name?: string;
  count: number;
}

interface TransferSlideProps {
  transferData: TransferData;
}

const TransferSlide: React.FC<TransferSlideProps> = ({ transferData }) => {
  const fromStation = transferData.from_stop_name || `Stop ${transferData.from_stop_id}`;
  const toStation = transferData.to_stop_name || `Stop ${transferData.to_stop_id}`;
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-gradient-to-br from-[#3498db] to-[#8e44ad] text-white px-6 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-4">Your Favorite Transfer Route</h2>
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col items-center mb-8">
          <div className="text-4xl font-bold text-center">
            {fromStation}
          </div>
          <div className="flex justify-center items-center my-4">
            <div className="w-8 h-0.5 bg-white"></div>
            <svg className="w-6 h-6 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
          <div className="text-4xl font-bold text-center">
            {toStation}
          </div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 inline-block">
          <p className="text-center">
            You made this transfer {transferData.count} times
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-xs opacity-70 text-center">
        <p>Continue to explore new routes across the network!</p>
      </div>
    </div>
  );
};

export default TransferSlide; 