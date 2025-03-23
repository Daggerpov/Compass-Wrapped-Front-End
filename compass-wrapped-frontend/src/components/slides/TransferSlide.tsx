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
  const transferCount = transferData.count;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-translink-blue text-center">Favorite Routes & Transfers</h2>
      
      <div className="w-full max-w-md">
        <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center space-x-2">
              <svg className="w-6 h-6 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700">Your Favorite Transfer</h3>
            </div>
            
            <p className="mt-2 font-bold text-xl text-translink-secondary">
              {fromStation} → {toStation}
            </p>
          </div>
          
          {/* Transfer visualization */}
          <div className="relative flex justify-between items-center mb-8 px-4">
            {/* From station */}
            <div className="flex flex-col items-center z-10">
              <div className="w-16 h-16 bg-translink-blue rounded-full mb-2 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600 max-w-[100px] text-center truncate">{fromStation}</p>
            </div>
            
            {/* Connection line with animation */}
            <div className="absolute left-0 right-0 top-8 h-0.5 flex items-center justify-center z-0">
              <div className="h-0.5 bg-gray-300 w-full"></div>
              <div className="absolute h-2 w-2 bg-translink-yellow rounded-full left-0 animate-[transferDot_2s_linear_infinite]"></div>
            </div>
            
            {/* To station */}
            <div className="flex flex-col items-center z-10">
              <div className="w-16 h-16 bg-translink-secondary rounded-full mb-2 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600 max-w-[100px] text-center truncate">{toStation}</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-translink-blue text-white rounded-lg px-4 py-2 mb-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-bold text-xl">{transferCount}</span>
                <span className="ml-1">transfers</span>
              </div>
            </div>
            <p className="text-gray-600">You're a pro at navigating busy transfers!</p>
          </div>
        </div>
        
        {/* Transit map style background */}
        <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Background grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="200" fill="url(#grid)" />
              
              {/* Transit lines */}
              <path d="M 0 100 H 400" stroke="#0066B3" strokeWidth="8" />
              <path d="M 200 0 V 200" stroke="#FFD800" strokeWidth="8" />
              
              {/* Stations */}
              <circle cx="200" cy="100" r="10" fill="white" stroke="#0066B3" strokeWidth="3" />
              <circle cx="100" cy="100" r="6" fill="white" stroke="#0066B3" strokeWidth="2" />
              <circle cx="300" cy="100" r="6" fill="white" stroke="#0066B3" strokeWidth="2" />
              <circle cx="200" cy="50" r="6" fill="white" stroke="#FFD800" strokeWidth="2" />
              <circle cx="200" cy="150" r="6" fill="white" stroke="#FFD800" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="z-10 bg-white px-4 py-2 rounded shadow-md">
            <p className="text-sm font-medium text-gray-700">
              Explore the network like a local!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSlide; 