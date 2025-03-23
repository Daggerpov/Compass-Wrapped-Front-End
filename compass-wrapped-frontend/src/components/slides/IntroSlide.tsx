import compassCardImg from '../../assets/new-from-figma/compass-card.png';
import { motion } from 'framer-motion';

interface IntroSlideProps {
  totalTrips?: number;
  month?: string;
  year?: number;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ 
  totalTrips = 245, 
  month = "MARCH",
  year = 2023
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-translink-blue to-blue-800 text-white p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto pt-12"
      >
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-light tracking-wide">{month}</h2>
            <h1 className="text-5xl font-bold tracking-tight">COMPASS</h1>
            <h1 className="text-5xl font-bold tracking-tight">WRAPPED</h1>
          </div>
          
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="py-8"
          >
            <div className="text-7xl font-bold mb-2">{totalTrips}</div>
            <p className="text-2xl font-light tracking-wide">Total Rides</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotateY: 180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={compassCardImg}
              alt="Compass Card"
              className="h-24 w-auto drop-shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-lg font-light opacity-90 mt-8"
          >
            <p>That's {Math.round(totalTrips / 30)} trips on average per month in {year}!</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSlide; 