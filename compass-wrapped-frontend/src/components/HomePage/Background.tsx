import React from 'react';
import skyline from '../../assets/vancouver-skyline.svg';
import skytrain from '../../assets/skytrain.svg';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-translink-blue/20 to-transparent opacity-70"></div>
      <img
        src={skyline}
        alt=""
        className="absolute bottom-0 left-0 w-full max-w-2xl mx-auto opacity-8"
      />
      <img
        src={skytrain}
        alt=""
        className="absolute bottom-24 right-10 w-1/6 max-w-[120px] opacity-15 animate-float"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-translink-blue/10 to-transparent"></div>
      <div className="absolute top-20 left-20 w-24 h-24 rounded-full bg-translink-yellow/15 filter blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-translink-secondary/15 filter blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full bg-translink-light-blue/25 filter blur-2xl"></div>
    </div>
  );
};

export default Background; 