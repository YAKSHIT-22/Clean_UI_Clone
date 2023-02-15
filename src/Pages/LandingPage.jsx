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
import alpha from '../assets/Client/alpha-match.png'
import aws from '../assets/Client/aws.png'
import braze from '../assets/Client/braze.png'
import dotcms from '../assets/Client/dotcms.png'
import dynaglo from '../assets/Client/dynaglo.png'
import idealProtein from '../assets/Client/ideal-protein.png'
import kampsite from '../assets/Client/kampsite.png'
import maxsold from '../assets/Client/maxsold.png'
import mindset from '../assets/Client/mindset.png'
import missi from '../assets/Client/Mississauga.svg'
import roku from '../assets/Client/roku.png'
import sap from '../assets/Client/sap.png'
import settlyt from '../assets/Client/settlyt.png'
import sirenMD from '../assets/Client/SirenMD.svg'
import toronto from '../assets/Client/Toronto.svg'
import local from '../assets/Client/True-Local.svg'
import viewgem from '../assets/Client/viewgem.png'
import wsps from '../assets/Client/wsps.png'







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
                <div className="flex items-center justify-center gap-4 p-2 mb-8 mt-2 w-full">
                  <h1 className="text-4xl font-bold">
                    Our<span className="text-[#8873ef]"> Client</span>
                  </h1>
                </div>
                <div className="flex items-center justify-center w-screen p-4">
                  <Swiper
                    modules={[Navigation, Pagination, EffectFade, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    className="flex items-center justify-center"
                    autoplay={{ delay: 2500 }}
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
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={alpha} alt="alpha"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={aws} alt="aws"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={braze} alt="braze"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={dotcms} alt="dotcoms"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={dynaglo} alt="dynaglo"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={idealProtein} alt="idealprotein"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={kampsite} alt="kampsite"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={maxsold} alt="maxsold"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={mindset} alt="mindset"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={missi} alt="missi"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={sirenMD} alt="siren"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={roku} alt="roku"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={sap} alt="sap"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={settlyt} alt="settlyt"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={toronto} alt="toronto"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={local} alt="local"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={viewgem} alt="viewgem"/></div></SwiperSlide>
                    <SwiperSlide><div className="flex items-center justify-center  bg-white rounded-md p-2"><img src={wsps} alt="wsps"/></div></SwiperSlide>
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
