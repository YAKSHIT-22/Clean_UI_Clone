import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
export default function Marquee() {
  return (
    <Swiper
    modules={[Navigation, Pagination, EffectFade, Autoplay]}
    spaceBetween={30}
    slidesPerView={5}
    autoplay={{ delay: 4000 }}
    breakpoints={{
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}
  >
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 1</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 2</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 3</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 4</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 5</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 6</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 7</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 8</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 9</div></SwiperSlide>
    <SwiperSlide><div className="text-6xl flex items-center justify-center">Slide 10</div></SwiperSlide>
  </Swiper>

  )
}
