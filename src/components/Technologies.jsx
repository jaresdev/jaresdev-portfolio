import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { technologyIcons } from "@/icons/technologies";

import Technology from "./Technology";

const Technologies = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={50}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 0,
      }}
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
        1440: {
          slidesPerView: 8,
        },
        2560: {
          slidesPerView: 9,
          spaceBetween: 5,
        },
      }}
      modules={[Autoplay]}
      className="w-full h-full mt-6"
    >
      {technologyIcons.map(({ name, Component }) => (
        <SwiperSlide key={name}>
          <Technology>
            <Component />
          </Technology>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Technologies;
