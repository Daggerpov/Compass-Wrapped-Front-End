import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container-custom py-8 relative z-10 border-t border-blue-100/50 mt-16 bg-gradient-to-t from-white to-translink-gray/20 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-gray-600 mb-1">© 2024 TransLink. All rights reserved.</p>
          <p className="text-xs text-gray-500">Your transit journey, visualized.</p>
        </div>
        <div className="flex gap-7">
          <a href="#" className="text-sm text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Privacy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Terms</a>
          <a href="#" className="text-sm text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 