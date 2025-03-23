import React from 'react';
import { motion } from 'framer-motion';

interface PersonalitySlideProps {
  personalityType?: string;
  description?: string;
  percentile?: number;
  estimatedTripsPerWeek?: number;
  actualTripsPerWeek?: number;
  comparisonMessage?: string;
  estimateAccuracy?: string;
}

const PersonalitySlide: React.FC<PersonalitySlideProps> = ({
  personalityType = "Transit Veteran",
  description = "You're among the top transit users!",
  percentile = 95,
  estimatedTripsPerWeek = 10,
  actualTripsPerWeek = 12.5,
  comparisonMessage = "You take 25% more trips than you estimated!",
  estimateAccuracy = "You know your transit habits well!"
}) => {
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
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-wide">Your Transit Personality</h2>
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              {personalityType}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <p className="text-xl font-light tracking-wide">
              {description}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
              <p className="text-2xl font-bold text-blue-200">
                Top {100 - percentile}% of Transit Users
              </p>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentile}%` }}
                  transition={{ delay: 0.9, duration: 1 }}
                  className="h-full bg-blue-200"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-light">Your Estimate</p>
                <p className="text-3xl font-bold text-blue-200">
                  {estimatedTripsPerWeek} trips/week
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-light">Actual Usage</p>
                <p className="text-3xl font-bold text-blue-200">
                  {actualTripsPerWeek.toFixed(1)} trips/week
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl font-light"
            >
              <p className="text-blue-200 font-medium mb-2">{comparisonMessage}</p>
              <p className="opacity-90">{estimateAccuracy}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PersonalitySlide; 