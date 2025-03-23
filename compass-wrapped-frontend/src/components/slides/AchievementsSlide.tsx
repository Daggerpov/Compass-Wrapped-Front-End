import React from 'react';
import busImg from '../../assets/new-from-figma/bus-facing-left.png';

interface AchievementsSlideProps {
  achievement?: string;
  milestoneReached?: string;
}

const AchievementsSlide: React.FC<AchievementsSlideProps> = ({ 
  achievement = "Transit Veteran", 
  milestoneReached = "You hit a major milestone this month!" 
}) => {
  return (
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 flex-col-center`}>
        <div className="w-full h-full flex flex-col items-center justify-between bg-translink-yellow text-translink-blue px-6 py-10">
          <div className="text-center">
            <h2 className="text-xl font-semibold">You hit a major milestone!</h2>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-center mb-8">{achievement}</div>
            <img
              src={busImg}
              alt="Bus"
              className="h-24 w-auto"
            />
          </div>
          
          <div className="mt-auto text-center text-sm opacity-80">
            <p>{milestoneReached}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSlide; 