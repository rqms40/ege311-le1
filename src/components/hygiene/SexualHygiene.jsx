import React from "react";
import { sexualHygieneImage } from "../../assets";
import SubsectionWrapper from "../SubsectionWrapper";

const SexualHygiene = () => {
  return (
    <SubsectionWrapper className="pt-20 md:pt-24 px-11 md:px-10">
      <div className="h-auto pt-4 md:pt-12 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-0 lg:gap-10">
          <div className="justify-self-center pb-4 md:col-span-6 overflow-hidden md:pr-10">
            <img
              src={sexualHygieneImage}
              alt="sexual_hygiene_image"
              className="h-full w-full rounded-lg md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div className="md:col-span-7 md:col-start-7 flex flex-col justify-center">
            <h1 className="uppercase text-accent font-bold text-2xl tracking-wide text-center py-6 md:text-3xl lg:text-5xl md:text-left">
              Sexual Hygiene
            </h1>
            <p className="text-base md:text-base lg:text-lg text-justify lg:text-left sm:leading-relaxed md:leading-[2rem] lg:leading-[2.5rem]">
              Sexual hygiene refers to the practices that individuals follow to
              keep their sexual organs and activities clean and healthy. Proper
              sexual hygiene includes regular cleaning of the genital area, safe
              sexual practices such as using protection, and post-activity care
              to avoid infections or complications. Maintaining good sexual
              hygiene is crucial for preventing sexually transmitted infections
              (STIs) and promoting reproductive health. By adopting healthy
              sexual habits, individuals can enhance their overall well-being
              and ensure that their sexual experiences are both safe and
              enjoyable.
            </p>
          </div>
        </div>
      </div>
    </SubsectionWrapper>
  );
};

export default SexualHygiene;
