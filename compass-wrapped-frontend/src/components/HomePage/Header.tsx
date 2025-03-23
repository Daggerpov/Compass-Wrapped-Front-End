import { CardTitle, CardDescription } from "@/components/ui/card";

const Header = () => {
  return (
    <>
      <CardTitle className="!text-3xl md:!text-4xl font-bold text-center !text-gray-800">
        Compass Card Wrapped
      </CardTitle>
      <CardDescription className="text-center !text-gray-600 !max-w-md mx-auto">
        Discover your transit journey through the year with personalized insights from your Compass Card data.
      </CardDescription>
    </>
  );
};

export default Header; 