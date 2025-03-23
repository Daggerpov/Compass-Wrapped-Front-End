import React from 'react';
import translinkLogo from '../../assets/translink-logo.svg';
import compassCard from '../../assets/compass-card.svg';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Monthly Transit Summary' }) => {
  return (
    <header className="header">
      <div className="container-custom py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <img src={translinkLogo} alt="TransLink Logo" className="img-logo" />
        </div>
        <div className="flex items-center gap-3">
          <img src={compassCard} alt="Compass Card" className="img-icon" />
          <h2 className="text-xl font-medium text-translink-blue">{title}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header; 