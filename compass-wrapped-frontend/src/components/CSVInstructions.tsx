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
    <div className="bg-white/90 rounded-lg shadow-sm p-4 sm:p-5 max-w-2xl mx-auto border border-gray-100">
      <h3 className="text-sm font-semibold text-center mb-3 text-gray-800">
        How to Get Your Transit Data
      </h3>
      
      <div className="space-y-1 relative">
        <div className="absolute left-3.5 top-3 w-0.25 h-[calc(100%-24px)] bg-gray-100 hidden sm:block"></div>
        
        {steps.map((step, index) => (
          <div 
            key={step.title}
            className={`flex items-start gap-2 animate-slide-up relative transition-all duration-300 p-1.5 rounded-md ${
              activeStep === index ? 'bg-translink-light-blue/50 -translate-y-0.5' : 'hover:bg-gray-50'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className={`flex-shrink-0 w-3 h-3 rounded-full flex items-center justify-center text-[8px] shadow-sm transition-all duration-300 ${
              activeStep === index 
                ? 'bg-translink-blue text-white' 
                : 'bg-translink-light-blue/70 text-translink-blue'
            }`}>
              {step.icon}
            </div>
            <div className="flex-1">
              <h4 className={`text-[10px] font-medium transition-colors duration-300 ${
                activeStep === index ? 'text-translink-blue' : 'text-gray-900'
              }`}>{step.title}</h4>
              <p className="text-gray-600 mt-0.5 text-[8px]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CSVInstructions; 