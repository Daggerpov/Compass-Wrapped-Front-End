import React from 'react';

interface PersonalitySlideProps {
  personalityType: string;
  commonTime: string;
  details: string;
}

const PersonalitySlide: React.FC<PersonalitySlideProps> = ({ personalityType, commonTime, details }) => {
  // Get background and icon based on personality type
  const getPersonalityStyles = () => {
    switch (personalityType.toLowerCase()) {
      case 'night rider':
      case 'night owl':
        return {
          bgColor: 'bg-[#0B2447]',
          textColor: 'text-white',
          icon: (
            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9992 12.8076C20.8043 16.8779 17.3893 20.1565 13.0744 19.9921C8.75945 19.8276 5.17431 16.2424 5.00989 11.9275C4.84547 7.61253 8.12404 4.19752 12.1944 4.00262C10.6511 6.92655 11.3919 10.5361 13.9637 12.6433C16.5355 14.7505 20.1649 14.8946 22.9994 13.0001C22.3396 13.0148 21.6708 12.9464 20.9992 12.8076Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        };
      case 'early bird':
        return {
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-900',
          icon: (
            <svg className="w-24 h-24 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V5M5.5 7.5L7 9M18.5 7.5L17 9M5 16H19M6 20H18M6 16L4 20M18 16L20 20M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        };
      default:
        return {
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-900',
          icon: (
            <svg className="w-24 h-24 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        };
    }
  };
  
  const { bgColor, textColor, icon } = getPersonalityStyles();
  
  // Use Night Rider for the Figma design match
  const displayPersonalityType = personalityType === 'City Explorer' ? 'Night Rider' : personalityType;
  
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${bgColor} px-6 py-10`}>
      {/* Icon */}
      <div className="my-8">
        {icon}
      </div>
      
      {/* Personality Type */}
      <div className="text-center mb-8">
        <h1 className={`text-5xl font-bold ${textColor} mb-4`}>
          You're a {displayPersonalityType}!
        </h1>
        
        {personalityType.toLowerCase().includes('night') && (
          <div className={`${textColor} text-lg max-w-xs mx-auto`}>
            <p className="mb-6">You've spent {details}</p>
            <p>Most common travel time: <span className="font-bold">{commonTime}</span></p>
          </div>
        )}
      </div>
      
      {/* Add an owl for Night Rider */}
      {personalityType.toLowerCase().includes('night') && (
        <div className="absolute right-8 bottom-8 w-24 h-24 opacity-90">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 85C67.6731 85 82 70.6731 82 53C82 35.3269 67.6731 21 50 21C32.3269 21 18 35.3269 18 53C18 70.6731 32.3269 85 50 85Z" fill="#8DA6C8" fillOpacity="0.2"/>
            <path d="M30 41C32.7614 41 35 38.7614 35 36C35 33.2386 32.7614 31 30 31C27.2386 31 25 33.2386 25 36C25 38.7614 27.2386 41 30 41Z" fill="white"/>
            <path d="M70 41C72.7614 41 75 38.7614 75 36C75 33.2386 72.7614 31 70 31C67.2386 31 65 33.2386 65 36C65 38.7614 67.2386 41 70 41Z" fill="white"/>
            <path d="M30 39C31.6569 39 33 37.6569 33 36C33 34.3431 31.6569 33 30 33C28.3431 33 27 34.3431 27 36C27 37.6569 28.3431 39 30 39Z" fill="#0B2447"/>
            <path d="M70 39C71.6569 39 73 37.6569 73 36C73 34.3431 71.6569 33 70 33C68.3431 33 67 34.3431 67 36C67 37.6569 68.3431 39 70 39Z" fill="#0B2447"/>
            <path d="M50 60C52.7614 60 55 57.7614 55 55C55 52.2386 52.7614 50 50 50C47.2386 50 45 52.2386 45 55C45 57.7614 47.2386 60 50 60Z" fill="white"/>
          </svg>
        </div>
      )}
    </div>
  );
};

export default PersonalitySlide; 