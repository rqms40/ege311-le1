import { teamMembers } from "../../constants";
import SubsectionWrapper from "../SubsectionWrapper";
import CardSlider from "../adolescents/CardSlider";
import AboutCard from "../reproduction/AboutCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <SubsectionWrapper
      id="about"
      className="pt-16 md:pt-24 lg:pt-28 px-0 md:px-0"
    >
      <motion.h1
        className="font-bold text-2xl md:text-4xl lg:text-5xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        ABOUT US
      </motion.h1>

      <div className="py-2 md:py-5 lg:py-12">
        <CardSlider
          items={teamMembers}
          renderCard={(item) => <AboutCard item={item} />}
          spaceBetween={12}
        />
      </div>
    </SubsectionWrapper>
  );
};

export default About;
