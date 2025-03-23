import React from 'react';

interface MissingTapSlideProps {
  missingTapCount: number;
  totalTrips: number;
}

const MissingTapSlide: React.FC<MissingTapSlideProps> = ({ missingTapCount, totalTrips }) => {
  // Calculate percentage of missing taps
  const missingPercentage = Math.round((missingTapCount / totalTrips) * 100) || 0;
  
  // Determine severity level based on percentage
  const getSeverityLevel = () => {
    if (missingPercentage <= 5) return 'low';
    if (missingPercentage <= 15) return 'medium';
    return 'high';
  };
  
  const severity = getSeverityLevel();
  
  // Get severity-specific styles and messages
  const getSeverityInfo = (level: string) => {
    switch (level) {
      case 'low':
        return {
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          icon: (
            <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          title: 'Great job!',
          message: 'You rarely forget to tap in or out. Keep it up!',
          tips: ['Continue your good habits to maintain a perfect record.']
        };
      case 'medium':
        return {
          color: 'text-yellow-600',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          icon: (
            <svg className="w-16 h-16 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V12.75M12 15H12.004M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          title: 'Room for improvement',
          message: 'You sometimes forget to tap in or out.',
          tips: [
            'Set a reminder on your phone',
            'Keep your Compass Card ready before arriving at stations',
            'Make tapping a conscious habit'
          ]
        };
      case 'high':
        return {
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          icon: (
            <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V14M12 17.5H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          title: 'Attention Needed!',
          message: 'You frequently forget to tap in or out.',
          tips: [
            'Keep your Compass Card visible in your wallet',
            'Set transit app reminders',
            'Place a sticker on your phone/wallet as a visual cue',
            'Consider auto-loading your card to always have fare ready'
          ]
        };
      default:
        return {
          color: 'text-gray-600',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          icon: (
            <svg className="w-16 h-16 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.87891 7.51884C11.0505 6.49372 12.95 6.49372 14.1215 7.51884C15.2931 8.54397 15.2931 10.206 14.1215 11.2312C13.9176 11.4096 13.6917 11.5569 13.4513 11.6733C12.8743 11.9386 12.5002 12.4203 12.5002 13L12.5002 14M12.5002 17H12.5102M20.0002 12C20.0002 16.4183 16.4185 20 12.0002 20C7.58203 20 4.00024 16.4183 4.00024 12C4.00024 7.58172 7.58203 4 12.0002 4C16.4185 4 20.0002 7.58172 20.0002 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
          title: 'Missing Tap Data',
          message: 'We have limited data about your tapping habits.',
          tips: ['Make sure to always tap in and out to get accurate stats.']
        };
    }
  };
  
  const severityInfo = getSeverityInfo(severity);
  
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${severityInfo.bgColor} px-6 py-10`}>
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-translink-blue text-center mb-2">Missing Tap-ins & Tap-outs</h2>
        <p className="text-gray-600 text-center mb-8">Keep track of your tapping habits</p>
        
        {/* Warning Card */}
        <div className={`bg-white rounded-xl shadow-lg p-6 border-2 ${severityInfo.borderColor} relative mb-8`}>
          {/* Decorative Elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            {severityInfo.icon}
          </div>
          
          <div className="pt-8 text-center">
            <h3 className={`text-xl font-bold mb-2 ${severityInfo.color}`}>{severityInfo.title}</h3>
            <p className="text-gray-700 mb-4">{severityInfo.message}</p>
            
            {/* Stats */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Missing taps</span>
                <span className={`text-sm font-medium ${severityInfo.color}`}>{missingTapCount} out of {totalTrips} trips</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className={`h-2.5 rounded-full ${
                    severity === 'low' ? 'bg-green-500' : 
                    severity === 'medium' ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${missingPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 text-center">
                You missed tapping in or out on <span className={`font-bold ${severityInfo.color}`}>{missingPercentage}%</span> of your trips
              </p>
            </div>
            
            {/* Tips */}
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-700 mb-2">Tips to improve:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {severityInfo.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 text-translink-blue mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="flex justify-center mb-6">
          <button className="bg-translink-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 flex items-center">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5936 8.93957L15.7279 8.07387L7.07387 16.7279L7.93957 17.5936C9.9251 19.5791 13.1145 19.5791 15.1 17.5936L16.5936 16.1C18.5791 14.1145 18.5791 10.9251 16.5936 8.93957Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.8484 4.52554C11.206 3.88309 10.2272 3.88309 9.58479 4.52554L8.45574 5.65459C7.81329 6.29704 7.81329 7.27575 8.45574 7.9182" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.52513 11.8487C3.88268 11.2063 3.88268 10.2275 4.52513 9.58509L5.65418 8.45604C6.29663 7.81359 7.27534 7.81359 7.91779 8.45604" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.5442 19.4443C16.1866 20.0867 17.1653 20.0867 17.8078 19.4443L18.9368 18.3152C19.5793 17.6728 19.5793 16.6941 18.9368 16.0516" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4447 15.5439C20.0872 14.9015 20.0872 13.9228 19.4447 13.2803L18.3157 12.1513C17.6732 11.5088 16.6945 11.5088 16.0521 12.1513" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Set Tap Reminders
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Missing taps may result in maximum fare charges or penalty fees. 
            Consistent tapping helps TransLink improve service planning.
          </p>
        </div>
      </div>
      
      {/* Decorative Card Tap Animations */}
      <div className="absolute bottom-10 right-4 opacity-20">
        <svg className="w-20 h-20 text-translink-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10C2 6.68629 4.68629 4 8 4H16C19.3137 4 22 6.68629 22 10V14C22 17.3137 19.3137 20 16 20H4L2 22V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.01172 9.99979H8.00172M12.0117 9.99979H12.0017M16.0117 9.99979H16.0017" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      <div className="absolute bottom-14 left-4 opacity-10">
        <svg className="w-24 h-24 text-translink-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 10H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="16" r="1" fill="currentColor" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <circle cx="17" cy="16" r="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default MissingTapSlide; 