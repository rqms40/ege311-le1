import React from "react";
import SubsectionWrapper from "../SubsectionWrapper";
import { sexualHealthImage } from "../../assets";

const SexualHealth = () => {
  return (
    <SubsectionWrapper className="px-11 md:px-10 pb-24">
      <div className="flex gap-8 md:gap-12 lg:gap-20 justify-between items-center flex-col md:flex-row-reverse">
        <div className="w-[85%] md:w-[50%] aspect-[4/5] lg:max-w-[31.25rem] lg:max-h-[37.5rem] flex-shrink-0 md:mb-8">
          <img
            src={sexualHealthImage}
            alt="Sexual Health Image"
            className="rounded-[0.625rem] w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-[48rem] px-4">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
            SEXUAL HEALTH
          </h1>
          <p className="text-base md:text-base lg:text-lg text-justify lg:text-left my-6 md:my-10 sm:leading-relaxed md:leading-[2rem] lg:leading-[2.5rem]">
            Sexual health is defined as a state of physical, emotional, mental,
            and social well-being in relation to sexuality. It involves engaging
            in safe, enjoyable, and consensual sexual activities that are free
            from violence, discrimination, or coercion. Achieving sexual health
            means individuals can make informed and responsible choices about
            their sexual lives, maintain healthy relationships, and access
            healthcare when needed. The World Health Organization emphasizes
            that sexual health is essential for overall health and well-being.
          </p>
        </div>
      </div>
    </SubsectionWrapper>
  );
};

export default SexualHealth;
