import { motion } from 'framer-motion';
import skytrain from '../../assets/new-from-figma/skytrain-facing-right.png';

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
    <div className="h-screen w-screen bg-translink-blue text-white relative overflow-hidden">
      {/* Wave pattern using CSS gradient instead of SVG */}
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
        <div className="flex flex-col items-center space-y-4 mt-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center"
          >
            You've spent {hoursSpent} hours on
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-center"
          >
            {transit} this year!
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-center"
        >
          That's {daysSpent} days of travel!
        </motion.p>

        {/* SkyTrain illustration */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            delay: 0.6, 
            type: "spring", 
            stiffness: 50,
            damping: 20
          }}
          className="relative w-full max-w-2xl h-48 mb-8"
        >
          {/* Track */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-600"></div>
          
          {/* Train */}
          <motion.img
            src={skytrain}
            alt="SkyTrain"
            className="absolute bottom-2 left-1/2 -translate-x-1/2 h-40 w-auto"
            animate={{
              x: [-10, 10],
              y: [-2, 2]
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

export default TimeSpentSlide; 