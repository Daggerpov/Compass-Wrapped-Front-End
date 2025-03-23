import React from 'react';
import translinkLogo from '../../assets/translink-logo.svg';
import compassCard from '../../assets/compass-card.svg';

interface HeaderProps {
  timeRangeText: string;
}

const Header: React.FC<HeaderProps> = ({ timeRangeText }) => {
  return (
    <header className="header backdrop-blur-md bg-white/95 sticky top-0 z-50 shadow-sm border-b border-blue-50 w-full">
      <div className="container-custom py-4 flex flex-col sm:flex-row justify-center items-center">
        <div className="mb-2 sm:mb-0 transition-transform duration-300 hover:scale-105 sm:mr-auto">
          <img src={translinkLogo} alt="TransLink Logo" className="h-6 sm:h-7" />
        </div>
        <div className="flex items-center gap-2.5 bg-gradient-to-r from-translink-blue/10 to-translink-light-blue/30 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md shadow-sm">
          <img src={compassCard} alt="Compass Card" className="h-4 w-4" />
          <h2 className="text-sm font-semibold text-translink-blue">
            Compass <span className="font-bold bg-gradient-to-r from-translink-blue to-translink-secondary bg-clip-text text-transparent">{timeRangeText}</span> Insights
          </h2>
        </div>
        <div className="hidden sm:block sm:ml-auto"></div>
      </div>
    </header>
  );
};

export default Header; 