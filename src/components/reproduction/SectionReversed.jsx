import Button from "../Button";
import { reproduction } from "../../assets";
import SubsectionWrapper from "../SubsectionWrapper";

function SectionReversed() {
  return (
    <div className="flex justify-center items-center py-24 px-10">
      <SubsectionWrapper>
        <div className="flex gap-8 lg:gap-12 xl:gap-20 justify-between items-center flex-col md:flex-row-reverse">
          <div className="w-[85%] md:w-[50%] aspect-[4/5] lg:max-w-[31.25rem] lg:max-h-[37.5rem] flex-shrink-0 md:mb-8">
            <img
              src={reproduction}
              alt="Reproduction Image"
              className="rounded-[0.625rem] w-full h-full object-cover object-center"
            />
          </div>
          <div className="max-w-[48rem] px-4">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center lg:text-left">
              REPRODUCTION
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-justify lg:text-left my-6 md:my-10 sm:leading-relaxed md:leading-[2.4rem] lg:leading-[2.875rem]">
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
          </div>
        </div>
        <Button className="lg:mt-8">View More</Button>
      </SubsectionWrapper>
    </div>
  );
}

export default SectionReversed;
