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

  // Ref to hold the card elements
  const cardRefs = useRef([]);

  // Calculate max height of all items in mobile view
  useEffect(() => {
    if (!isDesktop) {
      const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [isDesktop, items]);

  return (
    <div className={className}>
      {isDesktop ? (
        <div className="grid grid-cols-3 gap-10 mx-auto w-full max-w-screen-lg">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex-grow h-full"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-2"
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
