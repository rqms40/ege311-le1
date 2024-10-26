import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

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
        <div className="flex justify-evenly gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {renderCard(item)}
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
                  className="px-2"
                  style={{ height: maxHeight || "auto" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
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
