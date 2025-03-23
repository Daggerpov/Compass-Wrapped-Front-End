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
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 max-w-2xl mx-auto border border-gray-100">
      <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
        How to Get Your Transit Data
      </h3>
      
      <div className="space-y-3 relative">
        {/* Progress Line */}
        <div className="absolute left-4 top-4 w-0.5 h-[calc(100%-32px)] bg-gray-100 hidden sm:block"></div>
        
        {steps.map((step, index) => (
          <div 
            key={step.title}
            className={`flex items-start gap-3 animate-slide-up relative transition-all duration-300 p-2 rounded-md ${
              activeStep === index ? 'bg-blue-50/70 -translate-y-0.5' : 'hover:bg-gray-50'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-sm transition-all duration-300 ${
              activeStep === index 
                ? 'bg-translink-blue text-white transform scale-105' 
                : 'bg-blue-50 text-translink-blue'
            }`}>
              {step.icon}
            </div>
            <div className="flex-1">
              <h4 className={`text-sm font-medium transition-colors duration-300 ${
                activeStep === index ? 'text-translink-blue' : 'text-gray-900'
              }`}>{step.title}</h4>
              <p className="text-gray-600 mt-0.5 text-xs">{step.description}</p>
            </div>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-opacity duration-300 ${
              activeStep === index ? 'opacity-100' : 'opacity-0'
            }`}>
              <svg className="w-3 h-3 text-translink-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 bg-gray-50 p-2 rounded-md">
          <svg className="w-3.5 h-3.5 text-translink-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs">
            Your data is processed locally and never stored.
            <span className="font-medium ml-1">All processing happens on your device.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSVInstructions; 