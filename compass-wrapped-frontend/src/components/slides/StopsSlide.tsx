import React from 'react';
import { motion } from 'framer-motion';
import busStopImage from '../../assets/new-from-figma/bus-stop-sign-example-sg-n10-removebg-preview 1.png';

interface StopsSlideProps {
  topStops?: string[];
  topStations?: string[];
}

const StopsSlide: React.FC<StopsSlideProps> = ({
  topStops = [
    "Broadway-City Hall Stn",
    "Bus Stop 50270",
    "Main St-Science World Stn"
  ],
  topStations = [
    "Broadway-City Hall Stn",
    "Bus Stop 50270",
    "Main St-Science World Stn"
  ]
}) => {
  return (
    <div className="min-h-screen bg-yellow-400 text-translink-blue relative overflow-hidden">
      {/* Decorative gradient blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-16"
        >
          My Top Stops:
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md mb-16"
        >
          <div className="space-y-6">
            {topStops.map((stop, index) => (
              <motion.div
                key={stop}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center"
              >
                <span className="text-xl font-bold mr-4">{index + 1}.</span>
                <span className="text-xl">{stop}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-3xl font-bold mb-16"
        >
          My Top Stations:
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="w-full max-w-md"
        >
          <div className="space-y-6">
            {topStations.map((station, index) => (
              <motion.div
                key={station}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center"
              >
                <span className="text-xl font-bold mr-4">{index + 1}.</span>
                <span className="text-xl">{station}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bus stop sign illustration */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8"
        >
          <div className="w-32 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-translink-blue rounded-full flex items-center justify-center text-white font-bold text-sm">T</div>
              <div className="text-xs font-bold">Bus Stop</div>
            </div>
            <div className="text-lg font-bold text-green-600">54826</div>
            <div className="text-xs">
              <div>Waterfront Station</div>
              <div>29th Avenue Station</div>
              <div>N10 Downtown</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StopsSlide; 