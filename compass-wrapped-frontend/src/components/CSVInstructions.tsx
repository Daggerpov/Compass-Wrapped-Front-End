import React from 'react';

const CSVInstructions = () => {
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
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-6">
        How to Get Your Transit Data
      </h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div 
            key={step.title}
            className="flex items-start gap-4 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-2xl">
              {step.icon}
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500 text-center">
          Your data is processed locally and only used to generate your transit recap.
          No personal information is stored.
        </p>
      </div>
    </div>
  );
};

export default CSVInstructions; 