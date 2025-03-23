import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container-custom py-6 relative z-10 border-t border-blue-50 mt-10 bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs text-gray-500 mb-3 sm:mb-0">© 2024 TransLink. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-xs text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Privacy</a>
          <a href="#" className="text-xs text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Terms</a>
          <a href="#" className="text-xs text-gray-600 hover:text-translink-blue transition-colors hover-underline-animation">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 