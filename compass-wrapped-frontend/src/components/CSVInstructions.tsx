import React, { useState } from 'react';

const CSVInstructions = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      title: '1. Visit Compass Card Website',
      description: 'Go to compasscard.ca and sign in to your account',
      icon: '🌐'
    },
    {
      title: '2. View Card History',
      description: 'Click on "Card History" in your account dashboard',
      icon: '📋'
    },
    {
      title: '3. Select Date Range',
      description: 'Choose your desired date range for the transit recap',
      icon: '📅'
    },
    {
      title: '4. Download CSV',
      description: 'Click "Download CSV" to save your transit history',
      icon: '⬇️'
    }
  ];

  return (
    <div className="bg-white/95 rounded-lg shadow-sm p-5 sm:p-6 max-w-2xl w-full mx-auto border border-gray-100 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full mb-5">
        <h3 className="text-base font-semibold text-center text-gray-800">
          How to Get Your Transit Data
        </h3>
      </div>
      
      <div className="space-y-3 relative w-full max-w-xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 top-4 w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-translink-blue/5 via-translink-blue/20 to-translink-blue/5 hidden sm:block"></div>
        
        {steps.map((step, index) => (
          <div 
            key={step.title}
            className={`flex items-start gap-4 animate-slide-up relative transition-all duration-300 p-2.5 rounded-md ${
              activeStep === index ? 'bg-translink-light-blue/50 -translate-y-0.5 shadow-sm' : 'hover:bg-gray-50'
            }`}
            style={{ animationDelay: `${index * 120}ms` }}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm transition-all duration-300 ${
              activeStep === index 
                ? 'bg-translink-blue text-white shadow-md' 
                : 'bg-gradient-to-r from-translink-blue/10 to-translink-light-blue/30 text-translink-blue'
            }`}>
              {step.icon}
            </div>
            <div className="flex-1">
              <h4 className={`text-sm font-medium transition-colors duration-300 ${
                activeStep === index ? 'text-translink-blue' : 'text-gray-900'
              }`}>{step.title}</h4>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSVInstructions; 