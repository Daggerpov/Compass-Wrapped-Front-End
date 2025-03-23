// No need to import React explicitly
import { motion } from 'framer-motion';

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

  // Get max trip count for scaling
  const maxTrips = Math.max(...timelineData.map(d => d.trip_count));

  // Day order
  const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const sortedDays = Object.keys(dayGroups).sort((a, b) => 
    dayOrder.indexOf(a) - dayOrder.indexOf(b)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-translink-blue via-blue-700 to-blue-900 text-white p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto pt-12"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold tracking-wide text-center mb-12"
        >
          Your Transit Timeline
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
        >
          {sortedDays.map((day, dayIndex) => (
            <motion.div 
              key={day} 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + (dayIndex * 0.1) }}
              className="mb-8 last:mb-0"
            >
              <h3 className="text-xl font-medium text-blue-200 mb-4">{day}</h3>
              <div className="flex items-end justify-between space-x-4">
                {dayGroups[day].map((data, i) => (
                  <motion.div 
                    key={`${day}-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1 
                    }}
                    transition={{ 
                      delay: 0.6 + (dayIndex * 0.1) + (i * 0.1),
                      duration: 0.5
                    }}
                    className="relative flex-1 min-h-[100px] flex items-end justify-center"
                  >
                    <motion.div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-blue-200 to-white/80 rounded-lg"
                      style={{ 
                        width: "40px",
                        height: `${Math.max((data.trip_count / maxTrips) * 100, 20)}%`,
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${Math.max((data.trip_count / maxTrips) * 100, 20)}%` }}
                      transition={{ 
                        delay: 0.6 + (dayIndex * 0.1) + (i * 0.1),
                        duration: 0.5
                      }}
                    >
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-blue-200">
                        {data.hour_of_day}:00
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-blue-200">
                        {data.trip_count}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center text-blue-200 text-lg"
          >
            <p>You tend to travel most frequently during morning (8am) and evening (5pm) commute hours.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TimelineSlide; 