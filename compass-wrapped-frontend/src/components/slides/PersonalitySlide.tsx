import React from 'react';
import owlIconSvg from '../../assets/new-from-figma/owl-icon.svg';

interface PersonalitySlideProps {
  personalityType?: string;
  details?: string;
}

const PersonalitySlide: React.FC<PersonalitySlideProps> = ({ 
  personalityType = "Night Rider", 
  details = "You've spent 194 hours on SkyTrain this year!" 
}) => {
  return (
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-3 flex-col-center`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold">You're a</h2>
          <h1 className="text-4xl font-bold mt-1">{personalityType}!</h1>
        </div>
        
        <div className="my-4">
          <img
            src={owlIconSvg}
            alt="Night Rider Owl"
            className="h-32 w-auto"
          />
        </div>
        
        <div className="mt-auto text-center">
          <p className="text-sm opacity-80">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalitySlide; 