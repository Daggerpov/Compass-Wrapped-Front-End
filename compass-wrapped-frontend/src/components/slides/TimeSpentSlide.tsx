import React, { useEffect, useRef } from 'react';
import skytrainImg from '../../assets/new-from-figma/skytrain-facing-right.png';

interface TimeSpentSlideProps {
  hoursSpent?: number;
  transit?: string;
}

const TimeSpentSlide: React.FC<TimeSpentSlideProps> = ({ 
  hoursSpent = 194, 
  transit = "SkyTrain" 
}) => {
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
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-3 flex-col-center`}>
        <div className="w-full h-full flex flex-col items-center justify-between bg-translink-blue text-white px-4 py-6">
          <div className="text-center">
            <p className="text-lg">You've spent</p>
            <p className="text-3xl font-bold mb-1">{hoursSpent} hours</p>
            <p className="text-lg">on <span className="font-bold">{transit}</span> this year!</p>
          </div>
          
          <div className="my-4">
            <img
              src={skytrainImg}
              alt="SkyTrain"
              className="h-24 w-auto"
            />
          </div>
          
          <div className="mt-auto text-sm opacity-80 text-center">
            <p>That's {Math.round(hoursSpent * 60 / 20)} 20-minute episodes of your favorite show!</p>
            
            <div className="flex justify-center items-center mt-2">
              <canvas ref={canvasRef} width="80" height="80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSpentSlide; 