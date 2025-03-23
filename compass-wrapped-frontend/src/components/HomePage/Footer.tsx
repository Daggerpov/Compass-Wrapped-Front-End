import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-10 border-t border-blue-100/50 mt-16 bg-gradient-to-t from-white to-translink-gray/20 backdrop-blur-sm text-center">
      <div className="container mx-auto py-8 flex justify-center">
        <Card className="border-0 bg-transparent shadow-none w-full max-w-3xl">
          <CardContent className="flex flex-col items-center p-0 gap-6">
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-600 mb-1">© 2024 Daniel Agapov. All rights reserved.</p>
              <p className="text-xs text-gray-500">Your transit journey, visualized.</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
              >
                Privacy
              </Button>
              <span className="text-gray-300">•</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
              >
                Terms
              </Button>
              <span className="text-gray-300">•</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-600 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
              >
                Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer; 