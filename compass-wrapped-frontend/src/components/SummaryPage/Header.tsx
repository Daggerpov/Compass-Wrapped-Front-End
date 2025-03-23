import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Compass Wrapped' }) => {
  const navigate = useNavigate();

  return (
    <header className="header relative">
      <div className="container-custom py-4 flex items-center justify-between">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/')}
          className="text-translink-blue hover:text-translink-secondary transition-colors flex items-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" />
          </svg>
          Back
        </motion.button>
        <h1 className="text-2xl font-medium text-center flex-1">{title}</h1>
        <div className="w-[72px]"></div> {/* Spacer to center the title */}
      </div>
    </header>
  );
};

export default Header; 