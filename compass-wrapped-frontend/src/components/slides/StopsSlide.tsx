interface StopData {
  stop_name: string;
  count?: number;
}

interface StopsSlideProps {
  topStops?: StopData[];
}

const DEFAULT_STOPS: StopData[] = [
  { stop_name: "Broadway-City Hall Stn", count: 76 },
  { stop_name: "Bus Stop 50270", count: 52 },
  { stop_name: "Main St-Science World Stn", count: 38 },
];

const StopsSlide: React.FC<StopsSlideProps> = ({ topStops = DEFAULT_STOPS }) => {
  return (
    <div className="width-container h-full">
      <div 
        className={`border-2 border-dashed rounded-xl p-3 flex-col-center h-full`}>
        <div className="w-full h-full flex flex-col items-center justify-between bg-translink-yellow text-translink-blue px-4 py-6">
          <h2 className="text-xl font-semibold text-center mb-2">My Top Stops:</h2>
          
          <div className="flex-1 flex flex-col justify-center w-full max-w-xs">
            <ol className="list-decimal pl-8 space-y-2">
              {topStops.map((stop, index) => (
                <li key={index} className="text-lg font-semibold">
                  {stop.stop_name}
                </li>
              ))}
            </ol>
          </div>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-1">My Top Stations:</h3>
            <ol className="list-decimal pl-8 space-y-1">
              {topStops.slice(0, 2).map((stop, index) => (
                <li key={`station-${index}`} className="text-lg">
                  {stop.stop_name}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopsSlide; 