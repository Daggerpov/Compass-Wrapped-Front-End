import React from 'react';
import compassCardImg from '../../assets/new-from-figma/compass-card.png';

const Header = () => {
  return (
    <header className="w-full py-8 flex flex-col items-center justify-center">
      <div className="width-container flex-col-center gap-4">
        <img
          src={compassCardImg}
          alt="Compass Card"
          className="w-20 h-auto"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Compass Card Wrapped
        </h1>
        <p className="text-center text-gray-600 max-w-md">
          Discover your transit journey through the year with personalized insights from your Compass Card data.
        </p>
      </div>
    </header>
  );
};

export default Header; 