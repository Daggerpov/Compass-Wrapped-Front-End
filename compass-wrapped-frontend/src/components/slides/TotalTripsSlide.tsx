import React from 'react';
import { motion } from 'framer-motion';
import busImage from '../../assets/new-from-figma/longer-bus-facing-right.png';

interface TotalTripsSlideProps {
  totalTrips?: number;
  month?: string;
  year?: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({ 
  totalTrips = 245, 
  month = "MARCH",
  year = 2023
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-translink-blue via-blue-700 to-blue-900 text-white p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto pt-12"
      >
        <div className="text-center space-y-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-wide">You took</h2>
            <div className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              {totalTrips}
            </div>
            <h2 className="text-4xl font-bold tracking-wide">trips in {year}</h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative h-48 mt-12"
          >
            <img
              src={busImage}
              alt="TransLink Bus"
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl font-light tracking-wide mt-8 opacity-90"
          >
            That's {Math.round(totalTrips / 30)} trips on average per month!
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default TotalTripsSlide; 