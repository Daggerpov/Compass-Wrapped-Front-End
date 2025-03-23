import compassCardImg from '../../assets/new-from-figma/compass-card.png';
import busLeftImg from '../../assets/new-from-figma/bus-facing-left.png';
import longerBusImg from '../../assets/new-from-figma/longer-bus-facing-right.png';
import skytrainLeftImg from '../../assets/new-from-figma/skytrain-facing-out-and-left.png';
import skytrainRightImg from '../../assets/new-from-figma/skytrain-facing-right.png';
import compassCardTapImg from '../../assets/new-from-figma/compass-card-tap.png';
import busStopSignImg from '../../assets/new-from-figma/bus-stop-sign-example-sg-n10-removebg-preview 1.png';

export default function IconsSection() {
  return (
    <section className="width-container my-12 py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
        Discover Your Transit Journey
      </h2>
      
      <div className="flex-center flex-wrap gap-6 md:gap-8">
        <IconItem src={compassCardImg} alt="Compass Card" title="Compass Card" />
        <IconItem src={busLeftImg} alt="Bus" title="Bus" />
        <IconItem src={longerBusImg} alt="Articulated Bus" title="Articulated Bus" />
        <IconItem src={skytrainRightImg} alt="SkyTrain" title="SkyTrain" />
        <IconItem src={skytrainLeftImg} alt="Train" title="Train" />
        <IconItem src={busStopSignImg} alt="Bus Stop" title="Bus Stop" />
        <IconItem src={compassCardTapImg} alt="Card Tap" title="Card Tap" />
      </div>
      
      <p className="text-center mt-10 text-gray-600 max-w-xl mx-auto">
        Upload your Compass Card data to see detailed insights about your transit habits and patterns.
      </p>
    </section>
  );
}

function IconItem({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <div className="flex-col-center p-4 transition-transform hover:scale-110">
      <img src={src} alt={alt} className="h-16 sm:h-20 w-auto mb-2 object-contain" />
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
} 