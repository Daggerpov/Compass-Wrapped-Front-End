import React from 'react';

interface PersonalitySlideProps {
  personalityType: string;
  commonTime?: string;
  details?: string;
}

const PersonalitySlide: React.FC<PersonalitySlideProps> = ({ 
  personalityType, 
  commonTime, 
  details 
}) => {
  // Get personality icon and description based on type
  const getPersonalityInfo = (type: string) => {
    switch (type) {
      case 'Early Bird':
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V5M5.5 7.5L7 9M18.5 7.5L17 9M5 16H19M6 20H18M6 16L4 20M18 16L20 20M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'You rise with the sun and catch the early transit!',
          color: 'from-yellow-400 to-orange-500',
          backgroundColor: 'bg-yellow-50',
        };
      case 'Daytime Rider':
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V4M18.3613 5.63865L17.6453 6.35467M21 12H20M4 12H3M6.35467 6.35467L5.63865 5.63865M7 16.5L7 9M17 16.5V9M19.5 16.5H4.5C4.5 16.5 5 19 6.5 19H17.5C19 19 19.5 16.5 19.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'You prefer traveling during the busy daytime hours.',
          color: 'from-blue-400 to-teal-500',
          backgroundColor: 'bg-blue-50',
        };
      case 'Night Rider':
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9992 12.8076C20.8043 16.8779 17.3893 20.1565 13.0744 19.9921C8.75945 19.8276 5.17431 16.2424 5.00989 11.9275C4.84547 7.61253 8.12404 4.19752 12.1944 4.00262C10.6511 6.92655 11.3919 10.5361 13.9637 12.6433C16.5355 14.7505 20.1649 14.8946 22.9994 13.0001C22.3396 13.0148 21.6708 12.9464 20.9992 12.8076Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'The night is your time to travel the city.',
          color: 'from-purple-500 to-indigo-600',
          backgroundColor: 'bg-purple-50',
        };
      case 'City Explorer':
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 11L3 17.8C3 18.9201 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.09175 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.48 21 18.921 21 17.8031V11M3 11H21M3 11L5.8 6.4C5.92557 6.14819 6 5.9 6 5.9C6 5.9 6.07321 6.14558 6.2 6.4L9 11M21 11L18.2 6.4C18.0744 6.14819 18 5.9 18 5.9C18 5.9 17.9268 6.14558 17.8 6.4L15 11M15 7H9M10 15H14M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'You love to explore new routes and areas!',
          color: 'from-green-400 to-emerald-500',
          backgroundColor: 'bg-green-50',
        };
      case 'Vanilla':
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 12C17.5 15.0376 14.0376 17.5 10 17.5C5.96243 17.5 2.5 15.0376 2.5 12C2.5 8.96243 5.96243 6.5 10 6.5M17.5 12C17.5 8.96243 14.0376 6.5 10 6.5M17.5 12V20.5M10 6.5V3.5M19.5 15.5L17.5 17.5L15.5 15.5M8 3.5L10 5.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'You stick to your trusty regular routes.',
          color: 'from-gray-400 to-gray-600',
          backgroundColor: 'bg-gray-50',
        };
      case 'Sleeper':
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8.5H16.5C15.1193 8.5 14 9.61929 14 11V11C14 12.3807 15.1193 13.5 16.5 13.5H18C19.3807 13.5 20.5 12.3807 20.5 11V11C20.5 9.61929 19.3807 8.5 18 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.5 15H18M18 15V8.5C18 5.46243 15.5376 3 12.5 3H6.5V15M18 15V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5 21L6.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 18L13.5 21L12 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 18L6.5 21L8 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'You probably catch some Zs during your commute.',
          color: 'from-red-400 to-pink-500',
          backgroundColor: 'bg-red-50',
        };
      default:
        return {
          icon: (
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 9H15M9 12H15M9 15H12M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          description: 'A unique transit rider with your own style.',
          color: 'from-translink-blue to-translink-secondary',
          backgroundColor: 'bg-blue-50',
        };
    }
  };

  const personalityInfo = getPersonalityInfo(personalityType);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${personalityInfo.backgroundColor} px-6 py-12`}>
      <h2 className="text-2xl font-bold mb-6 text-translink-blue text-center">Your Commuter Personality</h2>
      
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${personalityInfo.color} flex items-center justify-center text-white p-5 border-4 border-white shadow-lg`}>
            {personalityInfo.icon}
          </div>
        </div>
        
        <div className="pt-12 text-center">
          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-translink-blue to-translink-secondary bg-clip-text text-transparent">{personalityType}</h3>
          <p className="text-lg text-gray-700 mb-6">{personalityInfo.description}</p>
          
          {commonTime && (
            <div className="mb-4 bg-gray-50 rounded-lg p-4 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700">Most common tap-in time: <span className="font-bold">{commonTime}</span></p>
            </div>
          )}
          
          {details && (
            <p className="text-gray-600 text-sm">{details}</p>
          )}
        </div>
      </div>
      
      {/* Other personality types */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-md">
        {Object.entries(getPersonalityTypesWithIcons())
          .filter(([type]) => type !== personalityType)
          .slice(0, 3)
          .map(([type, icon]) => (
            <div key={type} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full shadow-md p-3 mb-2 opacity-60">
                {icon}
              </div>
              <p className="text-xs text-center font-medium text-gray-500">{type}</p>
            </div>
          ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Based on your travel time and routes throughout the year
        </p>
      </div>
    </div>
  );
};

// Helper function to get icons for all personality types
const getPersonalityTypesWithIcons = () => {
  return {
    'Early Bird': (
      <svg className="w-full h-full text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V5M5.5 7.5L7 9M18.5 7.5L17 9M5 16H19M6 20H18M6 16L4 20M18 16L20 20M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Daytime Rider': (
      <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V4M18.3613 5.63865L17.6453 6.35467M21 12H20M4 12H3M6.35467 6.35467L5.63865 5.63865M7 16.5L7 9M17 16.5V9M19.5 16.5H4.5C4.5 16.5 5 19 6.5 19H17.5C19 19 19.5 16.5 19.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Night Rider': (
      <svg className="w-full h-full text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9992 12.8076C20.8043 16.8779 17.3893 20.1565 13.0744 19.9921C8.75945 19.8276 5.17431 16.2424 5.00989 11.9275C4.84547 7.61253 8.12404 4.19752 12.1944 4.00262C10.6511 6.92655 11.3919 10.5361 13.9637 12.6433C16.5355 14.7505 20.1649 14.8946 22.9994 13.0001C22.3396 13.0148 21.6708 12.9464 20.9992 12.8076Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'City Explorer': (
      <svg className="w-full h-full text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11L3 17.8C3 18.9201 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.09175 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.48 21 18.921 21 17.8031V11M3 11H21M3 11L5.8 6.4C5.92557 6.14819 6 5.9 6 5.9C6 5.9 6.07321 6.14558 6.2 6.4L9 11M21 11L18.2 6.4C18.0744 6.14819 18 5.9 18 5.9C18 5.9 17.9268 6.14558 17.8 6.4L15 11M15 7H9M10 15H14M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Vanilla': (
      <svg className="w-full h-full text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 12C17.5 15.0376 14.0376 17.5 10 17.5C5.96243 17.5 2.5 15.0376 2.5 12C2.5 8.96243 5.96243 6.5 10 6.5M17.5 12C17.5 8.96243 14.0376 6.5 10 6.5M17.5 12V20.5M10 6.5V3.5M19.5 15.5L17.5 17.5L15.5 15.5M8 3.5L10 5.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Sleeper': (
      <svg className="w-full h-full text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8.5H16.5C15.1193 8.5 14 9.61929 14 11V11C14 12.3807 15.1193 13.5 16.5 13.5H18C19.3807 13.5 20.5 12.3807 20.5 11V11C20.5 9.61929 19.3807 8.5 18 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 15H18M18 15V8.5C18 5.46243 15.5376 3 12.5 3H6.5V15M18 15V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 21L6.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18L13.5 21L12 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18L6.5 21L8 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };
};

export default PersonalitySlide; 