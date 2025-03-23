import React from 'react';
import { motion } from 'framer-motion';
import busImage from '../../assets/new-from-figma/longer-bus-facing-right.png';

interface TotalTripsSlideProps {
  totalTrips?: number;
  percentile?: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({
  totalTrips = 312,
  percentile = 0.5
}) => {
  return (
    <div className="min-h-screen bg-translink-blue text-white relative overflow-hidden">
      {/* Decorative wave pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 h-32"
      >
        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
          <path
            d="M0,50 C150,100 250,0 400,50 L400,0 L0,0 Z"
            fill="url(#wave-gradient)"
            opacity="0.3"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="M0,50 C150,100 250,0 400,50 L400,0 L0,0 Z;
                     M0,50 C150,0 250,100 400,50 L400,0 L0,0 Z;
                     M0,50 C150,100 250,0 400,50 L400,0 L0,0 Z"
            />
          </path>
        </svg>
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="50%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
        </defs>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen p-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Your Total Trips
        </motion.h2>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-8xl font-bold mb-8"
        >
          {totalTrips}
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-center mb-8"
        >
          That's {totalTrips} times you tapped in this year—way to go!
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg text-center text-blue-200"
        >
          Top {(percentile * 100).toFixed(1)}% of other users in Vancouver!
        </motion.p>

        {/* Compass card reader illustration */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center"
        >
          <div className="w-16 h-24 bg-gray-300 rounded-lg relative">
            <div className="absolute top-2 left-2 right-2 h-8 bg-green-500 rounded"></div>
            <div className="absolute top-12 left-4 right-4 h-2 bg-gray-400 rounded"></div>
          </div>
          <motion.div
            animate={{ x: [-10, 0] }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="ml-4"
          >
            <div className="w-12 h-8 bg-blue-400 rounded transform -rotate-12"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TotalTripsSlide; 