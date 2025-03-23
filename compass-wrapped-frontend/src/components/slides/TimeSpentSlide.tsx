import React from 'react';
import { motion } from 'framer-motion';
import skytrainImg from '../../assets/new-from-figma/skytrain-facing-right.png';

interface TimeSpentSlideProps {
  hoursSpent?: number;
  transit?: string;
}

const TimeSpentSlide: React.FC<TimeSpentSlideProps> = ({ 
  hoursSpent = 194, 
  transit = "SkyTrain" 
}) => {
  const days = Math.floor(hoursSpent / 24);
  const remainingHours = Math.round(hoursSpent % 24);
  const showCount = Math.round(hoursSpent * 60 / 20);

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
            <h2 className="text-4xl font-bold tracking-wide">Time Spent</h2>
            <div className="space-y-2">
              <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                {days} days
              </div>
              {remainingHours > 0 && (
                <div className="text-5xl font-bold text-blue-200">
                  {remainingHours} hours
                </div>
              )}
            </div>
            <h3 className="text-2xl font-light">on {transit}</h3>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative h-48"
          >
            <img
              src={skytrainImg}
              alt="SkyTrain"
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-4"
          >
            <p className="text-xl font-light tracking-wide opacity-90">
              That's equivalent to watching
            </p>
            <p className="text-3xl font-bold text-blue-200">
              {showCount} episodes
            </p>
            <p className="text-xl font-light tracking-wide opacity-90">
              of your favorite 20-minute show!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeSpentSlide; 