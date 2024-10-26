import React from "react";
import { fertlizationIcon } from "../assets";

const IconCard = ({ item }) => {
  return (
    <div className="h-auto w-auto bg-neutral-white rounded-lg p-4 transition-transform duration-500 ease-out transform group hover:scale-105">
      <div className="grid place-items-center text-center space-y-3 transform transition-all duration-500 ease-out">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary transition-colors duration-500 ease-out group-hover:bg-primary group-hover:text-white group-hover:scale-110">
          <img
            src={fertlizationIcon}
            alt="card icon"
            className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <h1 className="font-semibold text-xl md:text-2xl tracking-wide transition-transform duration-500 ease-out group-hover:scale-105">
          {item.title}
        </h1>
        <p className="text-accent text-base md:text-lg lg:text-xl w-60 transition-transform duration-500 ease-out group-hover:scale-105 leading-[2rem] md:leading-[2rem] lg:leading-[2rem]">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default IconCard;
