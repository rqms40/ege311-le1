import { teamMembers } from "../../constants";
import SubsectionWrapper from "../SubsectionWrapper";
import CardSlider from "../adolescents/CardSlider";
import AboutCard from "../reproduction/AboutCard";

const About = () => {
  return (
    <SubsectionWrapper id="about" className="pt-16 md:pt-24 lg:pt-28 px-0 md:px-0">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center">
        ABOUT US
      </h1>

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
