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
    <div className="w-full h-full flex flex-col items-center justify-between bg-translink-blue text-white px-6 py-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">You're a</h2>
        <h1 className="text-4xl font-bold mt-2">{personalityType}!</h1>
      </div>
      
      <div className="my-8">
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
  );
};

export default PersonalitySlide; 