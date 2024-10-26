const AboutCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="relative w-full h-72 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />

      <div className="absolute inset-0 bg-primary bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-white">
        <h3 className="text-lg lg:text-2xl font-bold leading-tight text-primary">
          {item.name}
        </h3>
        <p className="text-sm md:text-base lg:text-lg leading-snug text-primary">
          {item.role}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
