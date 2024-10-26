import React, { useEffect, useState, useRef } from "react";
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
        <div className="flex justify-evenly gap-10">
          {items.map((item, index) => (
            <div key={item.id}>
              <div ref={(el) => (cardRefs.current[index] = el)}>
                {renderCard(item)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          <Swiper {...swiperProps}>
            {items.map((item, index) => (
              <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[340px]">
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="px-2"
                  style={{ height: maxHeight || "auto" }}
                >
                  {renderCard(item)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CardSlider;
