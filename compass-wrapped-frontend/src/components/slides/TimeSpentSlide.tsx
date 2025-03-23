import React, { useEffect, useRef } from 'react';

interface TimeSpentSlideProps {
  totalHours: number;
}

const TimeSpentSlide: React.FC<TimeSpentSlideProps> = ({ totalHours }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Convert hours to days and remaining hours
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  
  // Animation for progress ring
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const size = 200;
    canvas.width = size;
    canvas.height = size;
    
    // Animation variables
    let progress = 0;
    const targetProgress = Math.min(1, totalHours / 168); // 168 hours in a week
    const animationDuration = 1500; // ms
    const startTime = Date.now();
    
    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, size, size);
      
      // Calculate progress based on time elapsed
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / animationDuration, 1) * targetProgress;
      
      // Draw background circle
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 15;
      ctx.stroke();
      
      // Draw progress arc
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 10, -Math.PI / 2, -Math.PI / 2 + progress * Math.PI * 2);
      ctx.strokeStyle = '#FFD800';
      ctx.lineWidth = 15;
      ctx.stroke();
      
      // Draw inner circle with gradient
      const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2 - 20
      );
      gradient.addColorStop(0, '#0066B3');
      gradient.addColorStop(1, '#004B8D');
      
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2 - 25, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw text
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(Math.round(progress * totalHours).toString(), size / 2, size / 2 - 10);
      
      ctx.font = '14px sans-serif';
      ctx.fillText('hours', size / 2, size / 2 + 20);
      
      // Continue animation if not complete
      if (elapsed < animationDuration) {
        requestAnimationFrame(draw);
      }
    };
    
    // Start animation
    requestAnimationFrame(draw);
    
  }, [totalHours]);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-translink-secondary to-translink-blue text-white px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Total Time Spent on Transit</h2>
      
      <div className="relative mb-8">
        <canvas ref={canvasRef} className="w-48 h-48" />
        <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-translink-yellow rounded-full p-3 text-translink-blue">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <div className="text-center mb-6">
        <p className="text-xl">That's <span className="font-bold">{days} days</span> and <span className="font-bold">{hours.toFixed(1)} hours</span> of travel</p>
        <p className="text-lg mt-2">Imagine where else you could've gone!</p>
      </div>
      
      {/* Week comparison visualization */}
      <div className="w-full max-w-md">
        <p className="text-sm mb-2 text-center">Compared to a typical 40-hour work week:</p>
        <div className="relative h-8 bg-white bg-opacity-20 rounded-lg overflow-hidden">
          <div 
            className="h-full bg-translink-yellow rounded-lg transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(100, (totalHours / 40) * 100)}%` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-xs font-medium">{Math.round((totalHours / 40) * 100)}% of work week</span>
          </div>
        </div>
      </div>
      
      {/* Fun fact */}
      <div className="mt-8 bg-white bg-opacity-10 rounded-lg p-4 max-w-md">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-5 h-5 text-translink-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm">In this time, you could have watched about <span className="font-bold">{Math.round(totalHours / 2)}</span> movies or binged <span className="font-bold">{Math.round(totalHours / 0.5)}</span> TikTok videos!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSpentSlide; 