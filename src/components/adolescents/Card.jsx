const Card = (behavior) => {
  return (
    <div
      key={behavior.id}
      className="relative w-full bg-white rounded-lg shadow-md overflow-hidden group transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={behavior.imageUrl}
        alt={behavior.title}
        className="w-full object-cover object-center min-h-[14rem]"
      />
      <div className="absolute inset-0 bg-primary bg-opacity-80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
        <h3 className="text-white font-bold text-lg lg:text-2xl leading-tight text-left">
          {behavior.title}
        </h3>
        <p className="text-white text-sm lg:text-xl mt-2 leading-snug text-left">
          {behavior.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
