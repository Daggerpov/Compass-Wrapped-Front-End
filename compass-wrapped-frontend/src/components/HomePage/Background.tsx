import React from 'react';
import skyline from '../../assets/vancouver-skyline.svg';
import skytrain from '../../assets/skytrain.svg';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-translink-blue/20 to-transparent opacity-80"></div>
      <img
        src={skyline}
        alt=""
        className="absolute bottom-0 left-0 w-full max-w-3xl mx-auto opacity-10"
      />
      <img
        src={skytrain}
        alt=""
        className="absolute bottom-28 right-10 w-1/6 max-w-[140px] opacity-20 animate-float"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-translink-blue/15 to-transparent"></div>
      <div className="absolute top-40 left-[10%] w-36 h-36 rounded-full bg-translink-yellow/15 filter blur-2xl opacity-75 animate-pulse-slow"></div>
      <div className="absolute bottom-48 right-[15%] w-64 h-64 rounded-full bg-translink-secondary/15 filter blur-2xl opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-translink-light-blue/25 filter blur-3xl opacity-70"></div>
      <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-translink-blue/10 filter blur-2xl opacity-60"></div>
    </div>
  );
};

export default Background; 