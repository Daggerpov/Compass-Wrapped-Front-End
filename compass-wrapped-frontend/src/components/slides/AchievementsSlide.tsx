import React from 'react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name or ID
  unlocked: boolean;
}

interface AchievementsSlideProps {
  achievements: Achievement[];
  totalTrips: number;
}

const AchievementsSlide: React.FC<AchievementsSlideProps> = ({ achievements, totalTrips }) => {
  // Helper function to get icon based on achievement type
  const getAchievementIcon = (icon: string) => {
    switch (icon) {
      case 'early_bird':
        return (
          <svg className="w-10 h-10 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V5M5.5 7.5L7 9M18.5 7.5L17 9M5 16H19M6 20H18M6 16L4 20M18 16L20 20M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'distance':
        return (
          <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4.5C7 6.433 9.5 11 12 11C14.5 11 17 6.433 17 4.5C17 2.567 14.761 1 12 1C9.239 1 7 2.567 7 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 15L16.25 17.25M19.25 20.25L16.25 17.25M16.25 17.25L19 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 22C4 19.2071 5.40794 16.7189 7.5 15.2555M12.5 13.5C15.8152 13.5 18.5788 15.9242 19.326 19.0673" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'night':
        return (
          <svg className="w-10 h-10 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9992 12.8076C20.8043 16.8779 17.3893 20.1565 13.0744 19.9921C8.75945 19.8276 5.17431 16.2424 5.00989 11.9275C4.84547 7.61253 8.12404 4.19752 12.1944 4.00262C10.6511 6.92655 11.3919 10.5361 13.9637 12.6433C16.5355 14.7505 20.1649 14.8946 22.9994 13.0001C22.3396 13.0148 21.6708 12.9464 20.9992 12.8076Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'weekend':
        return (
          <svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10V16M12 10V16M17 10V16M22 6H2M20 6L18.414 19.519C18.3939 19.6761 18.3406 19.8278 18.2589 19.9665C18.1771 20.1052 18.0684 20.2284 17.9391 20.3294C17.8098 20.4303 17.6625 20.5072 17.5049 20.556C17.3473 20.6048 17.1824 20.6246 17.017 20.614H6.983C6.81757 20.6246 6.65274 20.6048 6.49511 20.556C6.33748 20.5072 6.19016 20.4303 6.06092 20.3294C5.93168 20.2284 5.82294 20.1052 5.74116 19.9665C5.65938 19.8278 5.6061 19.6761 5.586 19.519L4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 6C9.5 4.067 10.567 3 12 3C13.433 3 14.5 4.067 14.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'explorer':
        return (
          <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11L3 17.8C3 18.9201 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.09175 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8031C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2842 20.7822 19.9079C21 19.48 21 18.921 21 17.8031V11M3 11H21M3 11L5.8 6.4C5.92557 6.14819 6 5.9 6 5.9C6 5.9 6.07321 6.14558 6.2 6.4L9 11M21 11L18.2 6.4C18.0744 6.14819 18 5.9 18 5.9C18 5.9 17.9268 6.14558 17.8 6.4L15 11M15 7H9M10 15H14M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'regular':
        return (
          <svg className="w-10 h-10 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V12M12 12L15 15M12 12L9 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return (
          <svg className="w-10 h-10 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 4.5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.3033 6.6967L18.364 5.63604" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.5 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.3033 17.3033L18.364 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.6967 17.3033L5.63604 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.6967 6.6967L5.63604 5.63604" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  // Determine percentage of achievements unlocked
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const unlockedPercentage = Math.round((unlockedCount / achievements.length) * 100);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 px-6 py-10">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-translink-blue text-center mb-6">Achievements Unlocked</h2>
        
        {/* Badge Progress */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Badge progress</span>
            <span className="text-sm font-medium text-translink-blue">{unlockedCount}/{achievements.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-translink-blue to-translink-secondary h-2.5 rounded-full" 
              style={{ width: `${unlockedPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            You've unlocked {unlockedPercentage}% of all achievements!
          </p>
        </div>
        
        {/* Achievement Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {achievements.slice(0, 4).map((achievement) => (
            <div 
              key={achievement.id}
              className={`relative bg-white rounded-lg p-4 flex flex-col items-center shadow-md transition-all
                ${achievement.unlocked 
                  ? 'border-2 border-translink-blue' 
                  : 'opacity-50 border-2 border-gray-200 filter grayscale'}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center p-3 mb-2
                ${achievement.unlocked 
                  ? 'bg-gradient-to-br from-translink-blue to-translink-secondary text-white' 
                  : 'bg-gray-200 text-gray-400'}`}
              >
                {getAchievementIcon(achievement.icon)}
              </div>
              <h3 className="text-sm font-bold text-center text-gray-800">{achievement.title}</h3>
              <p className="text-xs text-center text-gray-600 mt-1">{achievement.description}</p>
              
              {!achievement.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 rounded-lg">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Fun Stat */}
        <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-translink-blue mb-2">Did you know?</h3>
            <p className="text-gray-700">
              With your {totalTrips} trips, you've potentially saved around{' '}
              <span className="font-bold text-green-600">{Math.round(totalTrips * 1.5)} kg</span> of CO<sub>2</sub> emissions
              compared to driving!
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.01 8v8c0 2.5 1.5 4 4 4h4c2.5 0 4-1.5 4-4V8M12 2v6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 6l3.5-4 3.5 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-green-600">Good for the planet!</span>
              </div>
              <button className="text-xs text-white bg-translink-blue py-1 px-3 rounded-full font-medium">
                Share this stat
              </button>
            </div>
          </div>
          
          {/* Decorative background */}
          <div className="absolute right-0 bottom-0 w-16 h-16 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg preserveAspectRatio="none" className="w-full h-12 text-translink-blue opacity-10" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default AchievementsSlide; 