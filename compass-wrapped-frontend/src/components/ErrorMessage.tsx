import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md">
      <p className="font-bold">Error</p>
      <p>{message}</p>
      {onRetry && (
        <button 
          className="mt-4 bg-translink-blue hover:bg-translink-secondary text-white px-4 py-2 rounded"
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage; 