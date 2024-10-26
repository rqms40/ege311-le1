import { prevention } from "../../assets";
import SubsectionWrapper from "../SubsectionWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Section2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center items-center pt-24 px-10">
      <SubsectionWrapper>
        <motion.div
          ref={ref}
          className="flex gap-8 lg:gap-12 xl:gap-20 justify-between items-center flex-col md:flex-row"
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
              src={prevention}
              alt="Prevention Image"
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
              PREVENTION
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-justify lg:text-left my-6 md:my-10 sm:leading-relaxed md:leading-8 lg:leading-9 xl:leading-[2.875rem]">
              Refers to the biological, political-economic, and sociocultural
              factors that influence the process of human procreation. It
              encompasses the study of how culture, class, race, and ethnicity,
              as well as reproductive technologies and rights, impact
              reproduction and reproductive health. Additionally, it explores
              the evolution of sexual norms, behavior, social organization, and
              family structures through cross-cultural studies. The field also
              investigates the role of male physiology, sexuality, and cultural
              concepts of paternity in human reproductive activities.
            </p>
          </motion.div>
        </motion.div>
      </SubsectionWrapper>
    </div>
  );
}

export default Section2;
