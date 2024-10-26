import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

const CardSlider = ({
  items,
  renderCard,
  spaceBetween = 12,
  className = "",
}) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const swiperProps = {
    spaceBetween,
    slidesPerView: "auto",
    centeredSlides: true,
    className: "w-full py-4",
    loop: false,
    ...(isTablet && { initialSlide: 2 }),
  };

  const cardRefs = useRef([]);

  useEffect(() => {
    if (!isDesktop) {
      const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [isDesktop, items]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: 5, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.25,
        ease: "easeOut",
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 5,
      },
    },
  };

  return (
    <div className={className}>
      {isDesktop ? (
        <div className="grid grid-cols-3 gap-10 mx-auto w-full max-w-screen-lg">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              variants={cardVariants}
              className="flex transform transition-transform duration-300 ease-out hover:scale-105"
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-grow h-full rounded-lg overflow-hidden border border-transparent hover:border-opacity-100 transition-all duration-300"
              >
                {renderCard(item)}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="relative">
          <Swiper {...swiperProps}>
            {items.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[340px]">
                <motion.div
                  ref={(el) => (cardRefs.current[index] = el)}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  variants={cardVariants}
                  className="px-2 rounded-lg overflow-hidden"
                >
                  {renderCard(item)}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CardSlider;
