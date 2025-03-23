import React from 'react';

export default function TripSummarySlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold mb-8">Your Monthly Transit Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Total Trips</h3>
          <p className="text-4xl font-bold text-translink-blue">32</p>
          <p className="text-gray-600 mt-2">trips this month</p>
        </div>
        
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Time Spent</h3>
          <p className="text-4xl font-bold text-translink-blue">18</p>
          <p className="text-gray-600 mt-2">hours on transit</p>
        </div>
        
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Most Active Day</h3>
          <p className="text-4xl font-bold text-translink-blue">Wed</p>
          <p className="text-gray-600 mt-2">8 trips on average</p>
        </div>
        
        <div className="card p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Peak Travel Time</h3>
          <p className="text-4xl font-bold text-translink-blue">8:15</p>
          <p className="text-gray-600 mt-2">morning commute</p>
        </div>
      </div>
    </div>
  );
} 