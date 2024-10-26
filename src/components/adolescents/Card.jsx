const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="relative w-full h-full bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />

      <div className="absolute inset-0 bg-primary bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg lg:text-2xl font-bold leading-tight text-left text-white">
          {item.title}
        </h3>
        <p className="mt-2 text-sm md:text-base lg:text-lg leading-snug text-left text-white">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default Card;

