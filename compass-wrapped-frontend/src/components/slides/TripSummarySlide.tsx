// No need to import React explicitly

interface TripSummaryProps {
  totalTrips?: number;
  totalHours?: number;
  uniqueRoutes?: number;
  favoriteLine?: string;
}

const TripSummarySlide: React.FC<TripSummaryProps> = ({
  totalTrips = 325,
  totalHours = 184,
  uniqueRoutes = 28,
  favoriteLine = "99 B-Line"
}) => {
  return (
    <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 flex-col-center`}>
        <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50 px-6 py-10">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold text-translink-blue text-center mb-6">Your Transit Journey</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow-md p-5 text-center">
                <p className="text-3xl font-bold text-translink-blue">{totalTrips}</p>
                <p className="text-sm text-gray-600">Total Trips</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 text-center">
                <p className="text-3xl font-bold text-translink-blue">{totalHours}</p>
                <p className="text-sm text-gray-600">Hours on Transit</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 text-center">
                <p className="text-3xl font-bold text-translink-blue">{uniqueRoutes}</p>
                <p className="text-sm text-gray-600">Unique Routes</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 text-center">
                <p className="text-md font-bold text-translink-blue">{favoriteLine}</p>
                <p className="text-sm text-gray-600">Favorite Line</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-translink-blue mb-3">Your Transit Profile</h3>
              <p className="text-gray-700">
                You're a <span className="font-medium">Regular Commuter</span>, primarily traveling during weekday rush hours.
                Most of your trips are between home and work or school.
              </p>
              <div className="mt-4 text-sm text-gray-600">
                <p>Most active day: <span className="font-medium text-gray-800">Wednesday</span></p>
                <p>Most common time: <span className="font-medium text-gray-800">8:15 AM</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripSummarySlide; 