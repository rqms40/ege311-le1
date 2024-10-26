import React from "react";
import { motion, useInView } from "framer-motion";
import Button from "../Button";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Pagination, EffectCoverflow } from "swiper/modules";
import SubsectionWrapper from "../SubsectionWrapper";

const HygienePractice = () => {
  const contents = [
    {
      title: "Wash Everyday",
      description:
        "Washing the genital area daily with mild soap and water helps prevent infections, removes sweat and bacteria.",
    },
    {
      title: "Changing Sanitary",
      description:
        "Regularly changing sanitary products, like pads or tampons, is essential for maintaining hygiene, preventing odor, etc.",
    },
    {
      title: "STI Screening",
      description:
        "Regular STI screening is important to detect infections early, allowing for treatment and reducing transmission.",
    },
    {
      title: "Underwear Rule",
      description:
        "Wearing clean, breathable underwear daily helps prevent bacterial growth, keeps the area dry, and reduces irritation.",
    },
    {
      title: "Trimming Pubic Hair",
      description:
        "Trimming pubic hair can help reduce odor and maintain cleanliness, but avoid shaving too closely to prevent cuts.",
    },
    {
      title: "Drying Your Genitals",
      description:
        "Gently pat the area dry after washing to remove moisture, which helps prevent fungal and bacterial infections.",
    },
  ];

  return (
    <SubsectionWrapper className="py-6 md:py-6 lg:py-20 px-0 md:px-0">
      <div className="h-auto">
        <div className="space-y-3">
          <motion.h1
            className="uppercase pb-4 font-bold text-2xl md:text-4xl lg:text-5xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            practices
          </motion.h1>

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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card
                      title={content.title}
                      description={content.description}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-7">
            {contents.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card title={content.title} description={content.description} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="https://www.webmd.com/sex-relationships/ss/slideshow-sexual-hygiene">
              View More
            </Button>
          </motion.div>
        </div>
      </div>
    </SubsectionWrapper>
  );
};

export default HygienePractice;
