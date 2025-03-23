import React from 'react';
import compassCardImg from '../../assets/new-from-figma/compass-card.png';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute w-full h-full bg-gradient-to-b from-background/50 to-background opacity-80"></div>
      
      {/* Colorful blobs */}
      <div className="absolute w-1/2 h-1/2 top-0 left-0 bg-gradient-to-b from-primary/10 to-transparent opacity-40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute w-1/2 h-1/2 bottom-0 right-0 bg-gradient-to-t from-primary/10 to-transparent opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute w-1/3 h-1/3 bottom-1/4 left-1/4 bg-gradient-to-r from-primary/5 to-primary/20 opacity-30 rounded-full blur-3xl"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,179,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,179,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      {/* Centered compass card */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          src={compassCardImg} 
          alt="Compass Card" 
          className="w-64 h-auto opacity-10 transform rotate-6"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border border-primary/10 rounded-full"></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 border border-primary/20 rounded-full"></div>
    </div>
  );
};

export default Background; 