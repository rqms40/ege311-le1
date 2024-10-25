import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

const CardSlider = ({
  items,
  renderCard,
  spaceBetween = 12,
  className = "",
}) => {
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

  return (
    <div className={className}>
      {isDesktop ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(23.5rem,1fr))] gap-8">
          {items.map((item) => (
            <div key={item.id}>{renderCard(item)}</div>
          ))}
        </div>
      ) : (
        <div className="relative">
          <Swiper {...swiperProps}>
            {items.map((item) => (
              <SwiperSlide key={item.id} className="!w-[280px] sm:!w-[340px]">
                <div className="px-2">{renderCard(item)}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CardSlider;
