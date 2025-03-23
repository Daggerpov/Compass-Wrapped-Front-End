import { motion } from 'framer-motion';
import compassCard from '../../assets/new-from-figma/compass-card.png';

interface TotalTripsSlideProps {
  totalTrips?: number;
  percentile?: number;
}

const TotalTripsSlide: React.FC<TotalTripsSlideProps> = ({
  totalTrips = 312,
  percentile = 0.5
}) => {
  return (
    <div className="h-screen w-screen bg-translink-blue text-white relative overflow-hidden">
      {/* Wave pattern using CSS gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 w-full h-32"
        style={{
          background: `linear-gradient(135deg, rgba(76, 175, 80, 0.3) 0%, rgba(129, 199, 132, 0.3) 50%, rgba(76, 175, 80, 0.3) 100%)`,
          maskImage: 'linear-gradient(to bottom, black, transparent)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-between h-full px-8 py-16">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-center mt-12"
        >
          Your Total Trips
        </motion.h2>

        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="text-[120px] font-bold leading-none"
          >
            {totalTrips}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center space-y-4"
          >
            <p className="text-2xl">
              That's {totalTrips} times you tapped in this year—way to go!
            </p>
            <p className="text-xl text-blue-200">
              Top {(percentile * 100).toFixed(1)}% of other users in Vancouver!
            </p>
          </motion.div>
        </div>

        {/* Compass card and reader illustration */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="relative w-full max-w-sm h-32"
        >
          {/* Reader */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-32 bg-gray-700 rounded-lg flex flex-col items-center justify-start p-2 space-y-2">
            <div className="w-full h-12 bg-green-500 rounded opacity-80"></div>
            <div className="w-3/4 h-1 bg-gray-500 rounded"></div>
            <div className="w-3/4 h-1 bg-gray-500 rounded"></div>
          </div>

          {/* Card */}
          <motion.img
            src={compassCard}
            alt="Compass Card"
            className="absolute left-[60%] bottom-8 w-20 h-auto transform -rotate-12"
            animate={{ x: [-20, 0] }}
            transition={{ 
              duration: 0.5, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TotalTripsSlide; 