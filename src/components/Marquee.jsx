import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
export default function Marquee({images}) {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <div className="flex items-center justify-center w-screen p-1 z-[-1]">
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      slidesPerView={5}
      spaceBetween={50}
      className="px-4"
      autoplay={{ delay: 1500 }}
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
      {images.map( (image,id)  => (
    <SwiperSlide key={id}><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={image} alt="images" className="w-24 h-16"/></div></SwiperSlide>
      )
      )}
    </Swiper>
  </div>

  )
}
