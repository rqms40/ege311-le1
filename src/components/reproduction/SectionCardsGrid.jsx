import Button from "../Button";
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
import SubsectionWrapper from "../SubsectionWrapper";

function SectionCardsGrid() {
  const contents = [
    {
      title: "High Blood Pressure",
      description:
        "Less blood flow to the placenta. Decrease blood flow can cause the fetus to receive less oxygen and fewer nutrients.",
    },
    {
      title: "Infections",
      description:
        "Can be passed to the fetus before or during birth, harm, or cause a miscarriage, stillbirth, or preterm birth.",
    },
    {
      title: "Depression and Anxiety",
      description:
        "Extreme or ongoing sadness, anxiety, fatigue and changes in sleeping and eating habits. It can affect the fetus.",
    },
    {
      title: "Preterm Labor",
      description:
        "Regular contractions result in the opening of your cervix after week 20 and before week 37 of pregnancy.",
    },
    {
      title: "Gestational Disease",
      description:
        "A group of tumors defined by abnormal trophoblastic proliferation involving both benign and malignant entities.",
    },
    {
      title: "Miscarriage",
      description:
        "The unexpected ending of a pregnancy in the first 20 weeks of gestation. Commonly occur during the first trimester.",
    },
  ];

  return (
    <SubsectionWrapper className="h-auto pt-20 md:pt-28 md:px-auto">
      <div className="space-y-5">
        <h1 className="uppercase text-center text-accent font-bold text-2xl md:text-4xl lg:text-5xl pb-4">
          consequences
        </h1>

        <div className="lg:hidden">
          <Swiper
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={1.9}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {contents.map((content, index) => (
              <SwiperSlide key={index}>
                <Card title={content.title} description={content.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-7">
          {contents.map((content, index) => (
            <Card
              key={index}
              title={content.title}
              description={content.description}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="https://opentextbc.ca/biology/chapter/13-3-human-reproduction/">
            View More
          </Button>
        </div>
      </div>
    </SubsectionWrapper>
  );
}

export default SectionCardsGrid;
