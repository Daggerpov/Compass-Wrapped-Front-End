import React from 'react';
import { motion } from 'framer-motion';
import busStopImage from '../../assets/new-from-figma/bus-stop-sign-example-sg-n10-removebg-preview 1.png';

interface StopData {
  stop_name: string;
  count?: number;
}

interface StopsSlideProps {
  topStops?: StopData[];
}

const DEFAULT_STOPS: StopData[] = [
  { stop_name: "Broadway-City Hall Stn", count: 76 },
  { stop_name: "UBC Loop", count: 52 },
  { stop_name: "BCIT SW Marine Dr", count: 38 },
];

const StopsSlide: React.FC<StopsSlideProps> = ({ topStops = DEFAULT_STOPS }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-translink-blue via-blue-700 to-blue-900 text-white p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto pt-12"
      >
        <div className="text-center space-y-12">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-wide">Most Visited Stops</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {topStops.map((stop, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-blue-200">#{index + 1}</span>
                  <span className="text-xl font-medium">{stop.stop_name}</span>
                </div>
                <span className="text-xl font-bold text-blue-200">{stop.count} visits</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="relative h-48 mt-8"
          >
            <img
              src={busStopImage}
              alt="Bus Stop Sign"
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StopsSlide; 