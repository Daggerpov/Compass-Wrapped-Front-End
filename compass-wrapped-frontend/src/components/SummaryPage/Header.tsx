import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Monthly Transit Summary' }) => {
  return (
    <header className="header">
      <div className="container-custom py-0">
        <h1 className="text-2xl font-medium text-center">{title}</h1>
      </div>
    </header>
  );
};

export default Header; 