const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-b from-blue-50 to-white opacity-80"></div>
      <div className="absolute w-1/2 h-1/2 top-0 left-0 bg-gradient-to-b from-blue-100 to-transparent opacity-40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute w-1/2 h-1/2 bottom-0 right-0 bg-gradient-to-t from-blue-100 to-transparent opacity-40 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/4"></div>
    </div>
  );
};

export default Background; 