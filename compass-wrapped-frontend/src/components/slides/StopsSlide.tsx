import React from 'react';

export default function StopsSlide() {
  const topStops = [
    {
      name: "Eastbound University Blvd",
      trips: 24,
      type: "Bus Stop"
    },
    {
      name: "Commercial-Broadway Station",
      trips: 18,
      type: "SkyTrain Station"
    },
    {
      name: "Waterfront Station",
      trips: 12,
      type: "SkyTrain & SeaBus"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold mb-8">Your Most Visited Stops</h2>
      
      <div className="w-full max-w-2xl space-y-6">
        {topStops.map((stop, index) => (
          <div key={stop.name} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{stop.name}</h3>
                <p className="text-gray-600">{stop.type}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-translink-blue">{stop.trips}</p>
                <p className="text-gray-600">trips</p>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-translink-blue h-full rounded-full"
                style={{ width: `${(stop.trips / topStops[0].trips) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 