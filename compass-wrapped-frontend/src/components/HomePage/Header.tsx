import React from 'react';
import translinkLogoImg from '../../assets/new-from-figma/translink-logo.png';
import compassCardImg from '../../assets/new-from-figma/compass-card.png';

interface HeaderProps {
  timeRangeText: string;
}

const Header: React.FC<HeaderProps> = ({ timeRangeText }) => {
  return (
    <header className="header backdrop-blur-md bg-white/95 sticky top-0 z-50 shadow-sm border-b border-blue-50 w-full">
      <div className="center-container py-4">
        <div className="width-container flex-center">
          <div className="transition-transform duration-300 hover:scale-105 mr-auto">
            <img src={translinkLogoImg} alt="TransLink Logo" className="h-8 sm:h-9" />
          </div>
          <div className="flex items-center gap-2.5 bg-gradient-to-r from-translink-blue/10 to-translink-light-blue/30 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md shadow-sm">
            <img src={compassCardImg} alt="Compass Card" className="h-5 w-auto" />
            <h2 className="text-sm font-semibold text-translink-blue">
              Compass <span className="font-bold bg-gradient-to-r from-translink-blue to-translink-secondary bg-clip-text text-transparent">{timeRangeText}</span> Insights
            </h2>
          </div>
          <div className="ml-auto"></div>
        </div>
      </div>
    </header>
  );
};

export default Header; 