import compassCardImg from '../../assets/new-from-figma/compass-card.png';

interface ClosingSlideProps {
  message?: string;
  minutesThisMonth?: number;
}

const ClosingSlide: React.FC<ClosingSlideProps> = ({ 
  message = "Congrats! You had 6 amazing trips this month!",
  minutesThisMonth = 842
}) => {
  return (
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 flex-col-center`}>
        <div className="w-full h-full flex flex-col items-center justify-between bg-translink-blue text-white px-6 py-10">
          <div className="text-center">
            <h2 className="text-xl font-bold">Wrap-up</h2>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <p className="text-xl font-semibold">{message}</p>
            </div>
            <img
              src={compassCardImg}
              alt="Compass Card"
              className="h-24 w-auto"
            />
          </div>
          
          <div className="mt-auto text-center text-sm opacity-80">
            <p>You've spent {minutesThisMonth} minutes on transit this month!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingSlide; 