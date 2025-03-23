import compassCard from '../../assets/compass-card.svg';
import bus from '../../assets/bus.svg';
import articulatedBus from '../../assets/articulated-bus.svg';
import train from '../../assets/train.svg';
import seaBus from '../../assets/seabus.svg';
import cardReader from '../../assets/card-reader.svg';
import skyTrain from '../../assets/skytrain.svg';

export default function IconsSection() {
  return (
    <section className="width-container my-12 py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
        Discover Your Transit Journey
      </h2>
      
      <div className="flex-center flex-wrap gap-6 md:gap-8">
        <IconItem src={compassCard} alt="Compass Card" title="Compass Card" />
        <IconItem src={bus} alt="Bus" title="Bus" />
        <IconItem src={articulatedBus} alt="Articulated Bus" title="Articulated Bus" />
        <IconItem src={train} alt="Train" title="Train" />
        <IconItem src={skyTrain} alt="SkyTrain" title="SkyTrain" />
        <IconItem src={seaBus} alt="SeaBus" title="SeaBus" />
        <IconItem src={cardReader} alt="Card Reader" title="Card Reader" />
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
      <img src={src} alt={alt} className="h-16 sm:h-20 w-auto mb-2" />
      <span className="text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
} 