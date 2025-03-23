import { CardTitle, CardDescription } from "@/components/ui/card";

const Header = () => {
  return (
      <div className="width-container">
      <div 
        className={`border-2 border-dashed rounded-xl p-6 flex-col-center`}>
        <CardTitle className="!text-3xl md:!text-4xl font-bold text-center !text-gray-800">
          Compass Card Wrapped
        </CardTitle>
        <CardDescription className="text-center !text-gray-600 !max-w-md mx-auto">
          Discover your transit journey through the year with personalized insights from your Compass Card data.
        </CardDescription>
    </div></div>
  );
};

export default Header; 