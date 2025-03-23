import React from 'react';

export default function TimelineSlide() {
  const timelineEvents = [
    {
      time: "7:15 AM",
      date: "March 15",
      from: "UBC Exchange",
      to: "Commercial-Broadway",
      type: "Morning Commute"
    },
    {
      time: "12:30 PM",
      date: "March 15",
      from: "Commercial-Broadway",
      to: "Waterfront Station",
      type: "Lunch Break"
    },
    {
      time: "5:45 PM",
      date: "March 15",
      from: "Waterfront Station",
      to: "UBC Exchange",
      type: "Evening Return"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold mb-8">Your Travel Timeline</h2>
      
      <div className="w-full max-w-2xl space-y-6">
        {timelineEvents.map((event, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-20">
                <p className="font-bold text-translink-blue">{event.time}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-translink-blue" />
                  <p className="font-semibold">{event.from}</p>
                </div>
                
                <div className="ml-1.5 border-l-2 border-dashed border-gray-300 h-6" />
                
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-translink-secondary" />
                  <p className="font-semibold">{event.to}</p>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-600">
                  {event.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 