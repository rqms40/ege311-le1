import React from "react";
import { sexualHygieneImage } from "../../assets";

const SexualHygiene = () => {
  return (
    <div className="h-auto pt-4 md:pt-12">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="justify-self-center pb-4 md:col-span-6 overflow-hidden md:pr-10">
          <img
            src={sexualHygieneImage}
            alt="sexual_hygiene_image"
            className="h-full w-full rounded-lg md:h-[350px] lg:h-[400px] object-cover"
          />
        </div>
        <div className="md:col-span-7 md:col-start-7">
          <h1 className="uppercase text-accent font-bold text-2xl tracking-wide text-center pb-3 md:text-3xl md:text-left">
            Sexual Hygiene
          </h1>
          <p className="text-accent text-justify leading-loose md:text-left md:text-sm md:leading-6 lg:text-lg">
            Sexual hygiene refers to the practices that individuals follow to
            keep their sexual organs and activities clean and healthy. Proper
            sexual hygiene includes regular cleaning of the genital area, safe
            sexual practices such as using protection, and post-activity care to
            avoid infections or complications. Maintaining good sexual hygiene
            is crucial for preventing sexually transmitted infections (STIs) and
            promoting reproductive health. By adopting healthy sexual habits,
            individuals can enhance their overall well-being and ensure that
            their sexual experiences are both safe and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SexualHygiene;
