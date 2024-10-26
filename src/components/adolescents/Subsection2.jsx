import React from "react";
import { riskyBehaviors } from "../../constants";
import Button from "../Button";
import SubsectionWrapper from "../SubsectionWrapper";
import Card from "./Card";
import CardSlider from "./CardSlider";

const Subsection2 = () => {
  return (
    <SubsectionWrapper className="py-6 md:py-6 lg:py-20 px-0 md:px-0">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center">
        RISKY BEHAVIORS
      </h1>

      <div className="py-2 md:py-5 lg:py-12">
        <CardSlider
          items={riskyBehaviors}
          renderCard={(item) => <Card item={item} />}
          spaceBetween={12}
        />
      </div>

      <div className="flex justify-center">
        <Button href="https://socialmediavictims.org/effects-of-social-media/risky-behavior/">
          View More
        </Button>
      </div>
    </SubsectionWrapper>
  );
};

export default Subsection2;
