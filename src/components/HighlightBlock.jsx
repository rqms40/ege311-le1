import React from "react";
import SubsectionWrapper from "./SubsectionWrapper";
import CardSlider from "./CardSlider";
import IconCard from "./IconCard";

const HighlightBlock = ({ heading, items }) => {
  return (
    <SubsectionWrapper className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto lg:px-20">
        <div className="flex flex-col items-center py-10 md:py-12 lg:py-24">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center text-accent">
            {heading}
          </h1>

          <div className="pt-3 md:pt-5 lg:pt-12">
            <CardSlider
              items={items}
              renderCard={(item) => <IconCard item={item} />}
              spaceBetween={12}
            />
          </div>
        </div>
      </div>
    </SubsectionWrapper>
  );
};

export default HighlightBlock;
