import React from "react";
import { motion } from "framer-motion";
import { riskyBehaviors } from "../../constants";
import Button from "../Button";
import SubsectionWrapper from "../SubsectionWrapper";
import Card from "./Card";
import CardSlider from "./CardSlider";

const Subsection2 = () => {
  return (
    <SubsectionWrapper className="py-6 md:py-6 lg:py-20 px-0 md:px-0">
      <motion.h1
        className="font-bold text-2xl md:text-4xl lg:text-5xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        RISKY BEHAVIORS
      </motion.h1>

      <div className="py-2 md:py-5 lg:py-12">
        <CardSlider
          items={riskyBehaviors}
          renderCard={(item) => <Card item={item} />}
          spaceBetween={12}
        />
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button href="https://socialmediavictims.org/effects-of-social-media/risky-behavior/">
          View More
        </Button>
      </motion.div>
    </SubsectionWrapper>
  );
};

export default Subsection2;
