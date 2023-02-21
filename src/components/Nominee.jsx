import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import awwards from '../assets/services/awwwards.png';
import cssdesign from '../assets/services/cssdesignadwards.png';
import german from '../assets/services/germandesign-award.png';
import startup from '../assets/services/startuppreu.png';

export default function Nominee() {
    const nominee = [
        awwards,
        cssdesign,
        german,
        startup,
      ];
      SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <section className="w-screen h-full">
            <div className="flex items-center justify-center my-6">
              <div className="flex items-start justify-center flex-col gap-4">
                <div className="flex items-start justify-center flex-col mt-2 ml-0 md:ml-8 gap-4 p-4 w-full md:w-[75%] xl:w-[50%]">
                  <h1 className="text-3xl lg:text-4xl xl:text-[2.5rem] font-bold xl:leading-[3.6rem] text-gray-800">
                  Nominated in 2018, 2019, 2020 as the 
                  <span className=" text-[#8873ef]">
                          {" "}
                          Best App Agency of the year.
                        </span>
                  </h1>
                   <p className="text-lg font-normal leading-[2rem] text-start text-[#636d86]">Our substantial R&D budget and innovation labs, spreaded across North America, ensure that we are up to date with the latest technologies & trends. This has been a key factor in helping us retain the title of the best-in-class mobile application development company.</p>
                </div>
                <div className="flex items-center justify-center w-screen p-1 z-[-1]">
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      className="!px-4"
      autoplay={{ delay: 5500 }}
      breakpoints={{
        300:{
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {nominee.map( (nomi,id)  => (
    <SwiperSlide key={id} className="p-12"><div className="flex items-center justify-center bg-white rounded-md border p-2"><img src={nomi} alt="images" className="w-28 h-16"/></div></SwiperSlide>
      )
      )}
    </Swiper>
  </div>
              </div>
            </div>
        </section>
  )
}
