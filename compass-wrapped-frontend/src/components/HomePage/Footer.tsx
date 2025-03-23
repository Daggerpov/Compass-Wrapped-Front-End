import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-10 border-t border-blue-100/50 mt-16 bg-gradient-to-t from-white to-translink-gray/20 backdrop-blur-sm text-center">
      <div className="container mx-auto py-8">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="flex flex-col sm:flex-row sm:justify-between items-center p-0">
            <div className="mb-4 sm:mb-0 text-center">
              <p className="text-sm text-gray-600 mb-1">© 2024 TransLink. All rights reserved.</p>
              <p className="text-xs text-gray-500">Your transit journey, visualized.</p>
            </div>
            <div className="flex items-center justify-center gap-7">
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors hover-underline-animation">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors hover-underline-animation">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors hover-underline-animation">Contact</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer; 