const AboutCard = ({ item }) => {
  return (
    <div className="w-full max-w-[350px] mx-auto">
      <div
        key={item.id}
        className="relative aspect-square bg-white shadow-md overflow-hidden transition-transform duration-300 transform group about-card"
      >
        <img
          src={item.imageUrl}
          alt={`Photo of ${item.name}`}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="text-center mt-4">
        <h3 className="text-lg font-bold text-gray-800 uppercase">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500">{item.role}</p>
      </div>
    </div>
  );
};

export default AboutCard;
