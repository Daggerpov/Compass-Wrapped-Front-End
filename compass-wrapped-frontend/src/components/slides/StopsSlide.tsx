import React from 'react';
import { motion } from 'framer-motion';
import busStopSign from '../../assets/new-from-figma/bus-stop-sign-example-sg-n10-removebg-preview 1.png';

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
    <div className="h-screen w-screen bg-yellow-400 text-translink-blue relative overflow-hidden">
      {/* Gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(147, 51, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-8 py-16">
        <div className="w-full max-w-md space-y-12">
          <div>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold mb-8"
            >
              My Top Stops:
            </motion.h2>

            <div className="space-y-4">
              {topStops.map((stop, index) => (
                <motion.div
                  key={stop}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl font-bold">{index + 1}.</span>
                  <span className="text-xl">{stop}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-3xl font-bold mb-8"
            >
              My Top Stations:
            </motion.h2>

            <div className="space-y-4">
              {topStations.map((station, index) => (
                <motion.div
                  key={station}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl font-bold">{index + 1}.</span>
                  <span className="text-xl">{station}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bus stop sign */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative w-full max-w-sm"
        >
          <motion.img
            src={busStopSign}
            alt="Bus Stop Sign"
            className="w-48 h-auto mx-auto"
            animate={{
              y: [-5, 5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default StopsSlide; 