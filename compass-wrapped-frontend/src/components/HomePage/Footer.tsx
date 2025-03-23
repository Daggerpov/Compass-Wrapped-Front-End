import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-10 border-t border-blue-100/50 mt-16 bg-gradient-to-t from-white to-translink-gray/20 backdrop-blur-sm">
      <div className="center-container py-8">
        <div className="width-container flex-col-center sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <p className="text-sm text-gray-600 mb-1">© 2024 TransLink. All rights reserved.</p>
            <p className="text-xs text-gray-500">Your transit journey, visualized.</p>
          </div>
          <div className="flex-center gap-7">
            <a href="#" className="text-sm text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 