// No need to import React explicitly
import { motion } from 'framer-motion';

interface TripSummaryProps {
  totalTrips?: number;
  totalHours?: number;
  uniqueRoutes?: number;
  favoriteLine?: string;
  mostActiveDay?: string;
  mostCommonTime?: string;
}

const TripSummarySlide: React.FC<TripSummaryProps> = ({
  totalTrips = 325,
  totalHours = 184,
  uniqueRoutes = 28,
  favoriteLine = "99 B-Line",
  mostActiveDay = "Wednesday",
  mostCommonTime = "8:15 AM"
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-translink-blue via-blue-700 to-blue-900 text-white p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto pt-12"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold tracking-wide text-center mb-12"
        >
          Your Transit Journey
        </motion.h2>
            
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 gap-6 mb-8"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white mb-2"
            >
              {totalTrips}
            </motion.p>
            <p className="text-blue-200">Total Trips</p>
          </motion.div>
              
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white mb-2"
            >
              {totalHours}
            </motion.p>
            <p className="text-blue-200">Hours on Transit</p>
          </motion.div>
              
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white mb-2"
            >
              {uniqueRoutes}
            </motion.p>
            <p className="text-blue-200">Unique Routes</p>
          </motion.div>
              
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white mb-2"
            >
              {favoriteLine}
            </motion.p>
            <p className="text-blue-200">Favorite Line</p>
          </motion.div>
        </motion.div>
            
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-200 mb-4">Your Transit Profile</h3>
          <p className="text-lg text-blue-100 mb-6">
            You're a <span className="font-medium text-white">Regular Commuter</span>, primarily traveling during weekday rush hours.
            Most of your trips are between home and work or school.
          </p>
          <div className="space-y-3 text-blue-200">
            <p className="flex justify-between">
              <span>Most active day:</span>
              <span className="font-medium text-white">{mostActiveDay}</span>
            </p>
            <p className="flex justify-between">
              <span>Most common time:</span>
              <span className="font-medium text-white">{mostCommonTime}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TripSummarySlide; 