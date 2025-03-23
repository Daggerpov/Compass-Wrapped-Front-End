// No need to import React explicitly

interface TimelineData {
  day_of_week: string;
  hour_of_day: number;
  trip_count: number;
}

interface TimelineSlideProps {
  timelineData?: TimelineData[];
}

const DEFAULT_DATA: TimelineData[] = [
  { day_of_week: "Monday", hour_of_day: 8, trip_count: 24 },
  { day_of_week: "Tuesday", hour_of_day: 8, trip_count: 26 },
  { day_of_week: "Wednesday", hour_of_day: 8, trip_count: 28 },
  { day_of_week: "Thursday", hour_of_day: 8, trip_count: 25 },
  { day_of_week: "Friday", hour_of_day: 8, trip_count: 23 },
  { day_of_week: "Monday", hour_of_day: 17, trip_count: 22 },
  { day_of_week: "Tuesday", hour_of_day: 17, trip_count: 25 },
  { day_of_week: "Wednesday", hour_of_day: 17, trip_count: 27 },
  { day_of_week: "Thursday", hour_of_day: 17, trip_count: 24 },
  { day_of_week: "Friday", hour_of_day: 17, trip_count: 26 }
];

const TimelineSlide: React.FC<TimelineSlideProps> = ({ timelineData = DEFAULT_DATA }) => {
  // Group by day of week and get max trip count for scaling
  const dayGroups = timelineData.reduce((acc, item) => {
    if (!acc[item.day_of_week]) {
      acc[item.day_of_week] = [];
    }
    acc[item.day_of_week].push(item);
    return acc;
  }, {} as Record<string, TimelineData[]>);

  const maxTrips = Math.max(...timelineData.map(d => d.trip_count));
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 px-6 py-10">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-translink-blue text-center mb-6">Your Transit Timeline</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Busiest travel times</h3>
          
          {days.map(day => {
            const dayData = dayGroups[day] || [];
            if (dayData.length === 0) return null;
            
            return (
              <div key={day} className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">{day}</h4>
                <div className="flex items-center h-8">
                  {dayData.map(data => (
                    <div 
                      key={`${data.day_of_week}-${data.hour_of_day}`}
                      className="relative flex-1 h-full"
                    >
                      <div 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-translink-blue to-translink-secondary rounded-full"
                        style={{ 
                          width: `${Math.max((data.trip_count / maxTrips) * 100, 20)}%`,
                          height: `${Math.max((data.trip_count / maxTrips) * 100, 20)}%`,
                          maxWidth: "40px",
                          maxHeight: "40px",
                        }}
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium">
                          {data.hour_of_day}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          <div className="mt-6 text-center text-gray-600 text-sm">
            <p>You tend to travel most frequently during morning (8am) and evening (5pm) commute hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSlide; 