const HeroBackground = ({ backgroundImage }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default HeroBackground;
