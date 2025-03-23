interface StopData {
  stop_name: string;
  count?: number;
}

interface StopsSlideProps {
  topStops?: StopData[];
}

const DEFAULT_STOPS: StopData[] = [
  { stop_name: "Broadway-City Hall Stn", count: 76 },
  { stop_name: "UBC Loop", count: 52 },
  { stop_name: "BCIT SW Marine Dr", count: 38 },
];

const StopsSlide: React.FC<StopsSlideProps> = ({ topStops = DEFAULT_STOPS }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-translink-yellow text-translink-blue px-6 py-10">
      <h2 className="text-xl font-semibold text-center mb-4">My Top Stops:</h2>
      
      <div className="flex-1 flex flex-col justify-center w-full max-w-xs">
        <ol className="list-decimal pl-8 space-y-4">
          {topStops.map((stop, index) => (
            <li key={index} className="text-xl font-semibold">
              {stop.stop_name}
            </li>
          ))}
        </ol>
      </div>
      
      <div className="mt-auto">
        <h3 className="text-xl font-semibold mb-2">My Top Stations:</h3>
        <ol className="list-decimal pl-8 space-y-2">
          {topStops.map((stop, index) => (
            <li key={`station-${index}`} className="text-lg">
              {stop.stop_name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default StopsSlide; 