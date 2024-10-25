import React from "react";
import { cardIcon } from "../../assets";

const Card = ({ title, description }) => {
  return (
    <div className=" h-auto w-auto bg-secondary rounded-lg hover:bg-primary-hover transition-all duration-200">
      <div className="grid place-items-center text-center px-[26px] py-4 space-y-3 group ">
        <img src={cardIcon} alt="card icon" />
        <h1 className="font-semibold text-lg tracking-wide group-hover:text-white transition-all duration-200">
          {title}
        </h1>
        <p className="text-accent group-hover:text-white transition-all duration-200 w-60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
