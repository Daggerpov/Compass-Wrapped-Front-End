import translinkLogoImg from '../../assets/new-from-figma/translink-logo.png';

interface IntroSlideProps {
  month?: string;
}

const IntroSlide: React.FC<IntroSlideProps> = ({ month = "MARCH" }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-translink-blue text-white px-6 py-10">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">{month}</h2>
        <h1 className="text-4xl font-bold mb-2">COMPASS</h1>
        <h1 className="text-4xl font-bold">WRAPPED</h1>
      </div>
      
      <div className="mt-auto">
        <img
          src={translinkLogoImg}
          alt="TransLink Logo"
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
};

export default IntroSlide; 