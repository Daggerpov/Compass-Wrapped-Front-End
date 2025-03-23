import compassCardImg from '../../assets/new-from-figma/compass-card.png';

interface IntroSlideProps {
  totalTrips?: number;
  month?: string;
  year?: number;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ 
  totalTrips = 245, 
  month = "MARCH",
  year = 2023
}) => {
  return (
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-3 flex-col-center`}>
        <div className="w-full h-full flex flex-col items-center justify-center bg-translink-blue text-white px-4 py-6">
          <div className="text-center mb-3">
            <h2 className="text-2xl font-bold">{month}</h2>
            <h1 className="text-4xl font-bold">COMPASS</h1>
            <h1 className="text-4xl font-bold mb-4">WRAPPED</h1>
          </div>
          
          <div className="mt-2 text-center">
            <div className="text-6xl font-bold mb-1">{totalTrips}</div>
            <p className="text-xl mb-3">Total Rides</p>
          </div>
          
          <div className="mt-2 flex items-center justify-center">
            <img
              src={compassCardImg}
              alt="Compass Card"
              className="h-16 w-auto inline-block"
            />
          </div>
          
          <div className="mt-3 text-center text-sm opacity-80">
            <p>That's {Math.round(totalTrips / 30)} trips on average per month in {year}!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide; 