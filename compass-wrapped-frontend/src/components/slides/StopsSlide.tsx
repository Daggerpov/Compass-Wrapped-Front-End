interface StopData {
  stop_id: string;
  stop_name: string;
  count: number;
}

interface StopsSlideProps {
  topStops?: StopData[];
}

const DEFAULT_STOPS: StopData[] = [
  { stop_id: "60980", stop_name: "Waterfront Station", count: 76 },
  { stop_id: "61125", stop_name: "Commercial-Broadway Station", count: 52 },
  { stop_id: "60916", stop_name: "Lougheed Town Centre Station", count: 38 },
  { stop_id: "59946", stop_name: "Surrey Central Station", count: 29 },
  { stop_id: "60986", stop_name: "Burrard Station", count: 22 }
];

const StopsSlide: React.FC<StopsSlideProps> = ({ topStops = DEFAULT_STOPS }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 px-6 py-10">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold text-translink-blue text-center mb-6">Your Top Stations</h2>
        
        <div className="space-y-4">
          {topStops.map((stop) => (
            <div key={stop.stop_id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-translink-blue to-translink-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {stop.count}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{stop.stop_name}</h3>
                  <p className="text-sm text-gray-500">{stop.count} visits</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StopsSlide; 