import React from 'react';
import translinkLogo from '../../assets/translink-logo.svg';
import compassCard from '../../assets/compass-card.svg';

interface HeaderProps {
  timeRangeText: string;
}

const Header: React.FC<HeaderProps> = ({ timeRangeText }) => {
  return (
    <header className="header backdrop-blur-md bg-white/90 sticky top-0 z-50 shadow-soft border-b border-blue-50">
      <div className="container-custom py-3 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-2 sm:mb-0 transition-transform duration-300 hover:scale-105">
          <img src={translinkLogo} alt="TransLink Logo" className="h-5 sm:h-6" />
        </div>
        <div className="flex items-center gap-2 bg-translink-blue/10 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-translink-blue/15 shadow-sm">
          <img src={compassCard} alt="Compass Card" className="h-3 w-3" />
          <h2 className="text-sm font-medium text-translink-blue">
            Compass <span className="font-bold">{timeRangeText}</span> Insights
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header; 