import { contraceptives } from "../../constants";
import Card from "../adolescents/Card";
import CardSlider from "../adolescents/CardSlider";
import Button from "../Button";
import SubsectionWrapper from "../SubsectionWrapper";

function SectionCardsGrid2() {
  return (
    <SubsectionWrapper className="py-6 md:py-6 lg:py-20 px-0 md:px-0">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center">
        Contraceptives
      </h1>

      <div className="py-2 md:py-5 lg:py-12">
        <CardSlider
          items={contraceptives}
          renderCard={(item) => <Card item={item} />}
          spaceBetween={12}
        />

        <div className="flex justify-center lg:mt-8">
          <Button>View More</Button>
        </div>
      </div>
    </SubsectionWrapper>
  );
}

export default SectionCardsGrid2;