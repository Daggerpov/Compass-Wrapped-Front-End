import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Header = () => {
  return (
    <Card className="w-full !bg-white/80 backdrop-blur-sm border-0 shadow-sm flex justify-center">
      <CardHeader className="text-center w-full !max-w-xl">
        <CardTitle className="!text-3xl md:!text-4xl font-bold text-center !text-gray-800">
          Compass Card Wrapped
        </CardTitle>
        <CardDescription className="text-center !text-gray-600 !max-w-md mx-auto">
          Discover your transit journey through the year with personalized insights from your Compass Card data.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Header; 