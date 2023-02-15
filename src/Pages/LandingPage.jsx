import React from "react";
import Button from "../components/Button";
import HeroPage from "../components/HeroPage";
import hero from "../assets/landingPageHero.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
export default function LandingPage() {
  return (
    <>
      <main>
        <HeroPage
          headFirst={"An Innovative"}
          headSecond={"Mobile App Development"}
          headThird={"Company Trusted by Leading Brands Across the Globe."}
          subtitle={
            "Creating unique digital experiences and scalable solutions inducing higher user engagement."
          }
          img={hero}
          button1={<Button title={"View Portfolio"} pClass={"text-[.7rem]"} />}
          button2={
            <Button
              title={"Schedule a Free Consultation"}
              pClass={"text-[.7rem]"}
            />
          }
        />
        <section className="w-screen h-screen">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center gap-4 p-2 mb-8 w-full">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold ">
                    Our<span className="text-[#8873ef]"> Client</span>
                  </h1>
                </div>
                <div className="flex items-center justify-center w-screen p-4">
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
                    {/* <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={""} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center bg-white rounded-md p-2"><img src={} alt=""/></div></SwiperSlide> */}
                  </Swiper>
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
