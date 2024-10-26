import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SubsectionWrapper from "../SubsectionWrapper";
import { adolescents } from "../../assets";

const Subsection1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SubsectionWrapper className="px-11 md:px-10">
      <motion.div
        ref={ref}
        className="flex gap-8 md:gap-12 lg:gap-20 justify-between items-center flex-col md:flex-row-reverse"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-[85%] md:w-[50%] aspect-[4/5] lg:max-w-[31.25rem] lg:max-h-[37.5rem] flex-shrink-0 md:mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={adolescents}
            alt="Adolescents Image"
            className="rounded-[0.625rem] w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          className="max-w-[48rem] px-4"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center lg:text-left">
            ADOLESCENTS
          </h1>
          <p className="text-base md:text-base lg:text-lg text-justify lg:text-left my-6 md:my-10 sm:leading-relaxed md:leading-[2.4rem] lg:leading-[2.875rem]">
            Adolescents are young individuals who experience significant
            physical, emotional, and hormonal changes as they go through
            puberty, typically between the ages of 9 and 19. While adolescence
            can be a challenging time, the majority of young people navigate
            these changes without long-term issues. It is a critical time for
            emotional and social development, where guidance and support from
            parents, and educators play an essential role in shaping their
            future well-being.
          </p>
        </motion.div>
      </motion.div>
    </SubsectionWrapper>
  );
};

export default Subsection1;
