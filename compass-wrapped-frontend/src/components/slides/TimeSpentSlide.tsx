import React from 'react';
import { motion } from 'framer-motion';
import skytrainImg from '../../assets/new-from-figma/skytrain-facing-right.png';

interface TimeSpentSlideProps {
  hoursSpent?: number;
  transit?: string;
}

const TimeSpentSlide: React.FC<TimeSpentSlideProps> = ({
  hoursSpent = 134,
  transit = "SkyTrain"
}) => {
  const daysSpent = (hoursSpent / 24).toFixed(1);

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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold"
          >
            You've spent {hoursSpent} hours on
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {transit} this year!
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-center mb-24"
        >
          That's {daysSpent} days of travel!
        </motion.p>

        {/* SkyTrain illustration */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 50 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="relative">
            {/* Track */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-yellow-400"></div>
            
            {/* Train */}
            <div className="relative w-64 h-32">
              <div className="absolute bottom-2 left-0 right-0 h-24 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg">
                {/* Windows */}
                <div className="absolute top-2 left-4 right-4 h-8 bg-white/20 rounded"></div>
                {/* Yellow stripe */}
                <div className="absolute bottom-4 left-0 right-0 h-2 bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimeSpentSlide; 