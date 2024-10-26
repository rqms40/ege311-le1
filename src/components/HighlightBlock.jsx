import React from "react";
import { motion, useInView } from "framer-motion";
import SubsectionWrapper from "./SubsectionWrapper";
import CardSlider from "./CardSlider";
import IconCard from "./IconCard";

const HighlightBlock = ({ heading, items }) => {
  const headingRef = React.useRef(null);
  const cardSliderRef = React.useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isCardSliderInView = useInView(cardSliderRef, { once: true });

  return (
    <SubsectionWrapper className="bg-secondary">
      <div className="max-w-screen-2xl mx-auto lg:px-20">
        <div className="flex flex-col items-center py-10 md:py-12 lg:py-24">
          <motion.h1
            ref={headingRef}
            className="font-bold text-2xl md:text-4xl lg:text-5xl text-center text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {heading}
          </motion.h1>

          <motion.div
            ref={cardSliderRef}
            className="pt-3 md:pt-5 lg:pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isCardSliderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <CardSlider
              items={items}
              renderCard={(item) => <IconCard item={item} />}
              spaceBetween={12}
            />
          </motion.div>
        </div>
      </div>
    </SubsectionWrapper>
  );
};

export default HighlightBlock;
