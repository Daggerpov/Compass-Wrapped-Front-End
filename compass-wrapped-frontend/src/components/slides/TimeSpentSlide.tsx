import React, { useEffect, useRef } from 'react';

interface TimeSpentSlideProps {
  totalHours: number;
}

const TimeSpentSlide: React.FC<TimeSpentSlideProps> = ({ totalHours }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // These values are unused in the component but kept for reference
  // const days = Math.floor(totalHours / 24);
  // const hours = Math.round(totalHours % 24);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 200;
    canvas.height = 200;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw outer circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 8;
      ctx.stroke();
      
      // Draw hour ticks
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
        const x1 = centerX + (radius - 10) * Math.cos(angle);
        const y1 = centerY + (radius - 10) * Math.sin(angle);
        const x2 = centerX + radius * Math.cos(angle);
        const y2 = centerY + radius * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Calculate position for hour hand
      const date = new Date();
      const hour = date.getHours() % 12;
      const minute = date.getMinutes();
      const hourAngle = ((hour + minute / 60) / 12) * 2 * Math.PI - Math.PI / 2;
      
      // Draw hour hand
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + radius * 0.6 * Math.cos(hourAngle),
        centerY + radius * 0.6 * Math.sin(hourAngle)
      );
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // Calculate position for minute hand
      const minuteAngle = (minute / 60) * 2 * Math.PI - Math.PI / 2;
      
      // Draw minute hand
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + radius * 0.8 * Math.cos(minuteAngle),
        centerY + radius * 0.8 * Math.sin(minuteAngle)
      );
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#0B2447] text-white px-6 py-10">
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-4">Total Time Spent on Transit</h2>
      
      <div className="flex flex-col items-center">
        {/* Clock visualization */}
        <canvas ref={canvasRef} className="w-48 h-48 mb-4"></canvas>
        
        {/* Hours display */}
        <div className="text-center">
          <div className="text-4xl font-bold">
            You've spent {totalHours} hours
          </div>
          <div className="text-lg mt-2">
            on the SkyTrain this year!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSpentSlide; 