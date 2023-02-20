import React from "react";
import Button from "../components/Button";
import HeroPage from "../components/HeroPage";
import hero from "../assets/landingPageHero.svg";
import alpha from "../assets/Client/alpha-match.png";
import aws from "../assets/Client/aws.png";
import braze from "../assets/Client/braze.png";
import dotcms from "../assets/Client/dotcms.png";
import dynaglo from "../assets/Client/dynaglo.png";
import idealProtein from "../assets/Client/ideal-protein.png";
import kampsite from "../assets/Client/kampsite.png";
import maxsold from "../assets/Client/maxsold.png";
import mindset from "../assets/Client/mindset.png";
import missi from "../assets/Client/Mississauga.svg";
import roku from "../assets/Client/roku.png";
import sap from "../assets/Client/sap.png";
import settlyt from "../assets/Client/settlyt.png";
import sirenMD from "../assets/Client/SirenMD.svg";
import toronto from "../assets/Client/Toronto.svg";
import local from "../assets/Client/True-Local.svg";
import viewgem from "../assets/Client/viewgem.png";
import wsps from "../assets/Client/wsps.png";
import Marquee from "../components/Marquee";
import android from "../assets/android.svg";
import ios from "../assets/ios.svg";
import product from "../assets/product.svg";
import software from "../assets/software.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/arrowright.svg";
import wsp from "../assets/Portfolio/wsps.png";
import PortfolioSection from "../components/PortfolioSection";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import addictive from "../assets/Addictive.png";
import engaging from "../assets/engaging.png";
import feature from "../assets/feature-rich.png";
import attractive from "../assets/Attractive.png";
import mind from "../assets/Portfolio/mindset.png";
import expertise from "../assets/Expertise.svg";
import appDev from "../assets/digitalLandscape/app-development-company.png";
import mobileDev from "../assets/digitalLandscape/mobile-application-development-services.png";
import digiMob from "../assets/digitalLandscape/digital-mobile-agency.jpg";
import setlyt from "../assets/Portfolio/settlyt.png";
import mobile from "../assets/webest/mobile.png";
import nlp from "../assets/webest/nlp.jpg";
import prod from "../assets/webest/product.png";
import strategy from "../assets/webest/strategy.jpg";
import web from "../assets/webest/web.png";
import best from '../assets/webest/best.svg';
import alphamatch from '../assets/Portfolio/alphamatch.png';
import thatsgame from '../assets/Portfolio/thatsgame.png';
import ideal from '../assets/Portfolio/idealprotein.png';
import max from '../assets/Portfolio/maxsold.png';
import CustomerResponse from "../components/CustomerResponse";
import description from '../assets/description.svg';
import description1 from '../assets/description1.svg';
import description3 from '../assets/description3.svg';



export default function LandingPage() {
  const images = [
    alpha,
    aws,
    braze,
    dotcms,
    dynaglo,
    idealProtein,
    kampsite,
    maxsold,
    mindset,
    missi,
    roku,
    sap,
    settlyt,
    sirenMD,
    toronto,
    local,
    viewgem,
    wsps,
  ];
  SwiperCore.use([Autoplay, Navigation, Pagination]);
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
        <section className="w-screen h-full">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-full h-full flex-col gap-6">
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center gap-4 p-2 mb-8 mt-2 w-full">
                  <h1 className="text-4xl font-bold">
                    Our<span className="text-[#8873ef]"> Client</span>
                  </h1>
                </div>
                <Marquee images={images} />
              </div>
              <div className="flex justify-center items-center my-4">
                <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-4 p-4 lg:my-4">
                  <div className="flex items-center justify-center w-full md:w-1/2 xs:p-2 sm:p-4 md:p-2 h-full">
                    <div className="grid gap-4 grid-cols-2 items-center justify-center p-5 lg:p-6 md:p-4 sm:p-6 lg:m-4 w-full sm:w-[75%] md:w-full h-full flex-col bg-background bg-no-repeat bg-cover bg-center rounded-lg">
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-1 sm:gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                        <div className="p-2 flex items-center justify-center">
                          {" "}
                          <img
                            src={product}
                            alt="product"
                            className="sm:w-full sm:h-full w-[90%] h-[90%]"
                          />
                        </div>
                        <div className="p-0 sm:p-1 w-full">
                          {" "}
                          <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">
                            Product Management
                          </p>
                        </div>
                      </div>
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-1 sm:gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                        <div className="p-2 flex items-center justify-center">
                          <img
                            src={software}
                            alt="software"
                            className="sm:w-full sm:h-full w-[90%] h-[90%]"
                          />
                        </div>
                        <div className="p-0 sm:p-1 w-full">
                          <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">
                            Software Development
                          </p>
                        </div>
                      </div>

                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-1 sm:gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                        <div className="p-2 flex items-center justify-center">
                          {" "}
                          <img
                            src={android}
                            alt="android"
                            className="sm:w-full sm:h-full w-[90%] h-[90%]"
                          />
                        </div>
                        <div className="p-0 sm:p-1 w-full">
                          <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">
                            Android Development
                          </p>
                        </div>
                      </div>
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-1 sm:gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                        <div className="p-2 flex items-center justify-center">
                          {" "}
                          <img
                            src={ios}
                            alt="ios"
                            className="sm:w-full sm:h-full w-[90%] h-[90%]"
                          />
                        </div>
                        <div className="p-0 sm:p-1 w-full ">
                          <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">
                            iOS Development
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-4 p-2 md:p-4 w-full md:w-1/2">
                    <div className="flex items-center justify-center gap-4 h-full">
                      <h1 className="text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem]">
                        Our App
                        <span className="text-[#8873ef]">
                          {" "}
                          Development Services.
                        </span>
                      </h1>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full  h-full sm:w-[80%] md:w-[90%]">
                      <p className="font-medium text-[#828FAD] leading-[1.6rem] text-sm md:text-[1rem]">
                        We are an accomplished mobile app development company in
                        Canada that dreams, architects, designs and develops
                        innovative solutions that deliver unparalleled results
                        in line with your business goals. Our talented app
                        development team builds secure, robust, feature-packed
                        and highly scalable web and mobile apps that enhance
                        user experience and exceed your expectations. When
                        searching for a reliable technology partner for web and
                        mobile app development, look no further than .
                      </p>
                    </div>
                    <Link className="flex items-center justify-start gap-2 flex-row w-full text-[#8873ef]">
                      <p>Show all services</p>
                      <img src={arrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioSection
          img={wsp}
          heading={"WSPS"}
          bgClass={"bg-wsps"}
          imgClass={
            "h-[60%] sm:h-[70%] md:-[30rem] lg:h-[36rem] xl:h-[50rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "Designed and Developed for Workplace Safety and Prevention Services. This app saves lives, and helps prevent the spread of COVID 19, by providing the most reliable and up to date information needed by Employers across Ontario, Canada."
          }
        />
        <section className="w-screen h-full relative">
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="flex items-center justify-center gap-4 flex-col my-4">
              <div className="flex items-center justify-center gap-4 h-full w-full sm:w-[70%] lg:w-[65%] p-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold xl:leading-[3.6rem] text-center">
                  Benefits of Choosing
                  <span className="text-[#8873ef]">
                    {" "}
                    Our Application Development
                  </span>{" "}
                  Agency
                </h1>
              </div>
              <div className="flex items-center justify-center gap-4 w-full sm:w-[85%] lg:w-[75%] p-4">
                <p className="font-medium text-[#787D89] leading-loose md:leading-[2rem] text-center text-xs sm:text-sm">
                  At , we focus on delivering world-class quality and bespoke
                  application development solutions that expand your reach,
                  improve your customer engagement, and take your business to
                  the next level. We develop one-of-a-kind web and mobile
                  applications for businesses of all sizes by harnessing the
                  power of disruptive technologies.
                </p>
              </div>
              <div className="flex justify-center items-center gap-4 h-full">
                <div className="flex items-center justify-center w-screen sm:p-4 z-[-1]">
                  <Swiper
                    modules={[Navigation, Pagination, EffectFade, Autoplay]}
                    slidesPerView={5}
                    spaceBetween={50}
                    className="!px-4"
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="flex items-center justify-center bg-white rounded-md p-2 border border-slate-300">
                        <div className="flex items-start justify-center flex-col p-6 sm:p-8 gap-4 sm:h-96">
                          <div>
                            <img
                              src={addictive}
                              alt="speed"
                              className="w-[50px] h-[50px]"
                            />
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <h1 className="text-lg xs:text-xl  font-medium">
                              We Listen & Then Interpret
                            </h1>
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <p className="font-medium text-[#787D89] leading-loose md:leading-[1.5rem] text-xs">
                              We are an end-to-end app development company,
                              assisting you to brainstorm and document your
                              requirements via focussed discussions, before
                              crafting a tailored execution plan that delivers
                              measurable value to your target audience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex items-center justify-center bg-white rounded-md p-2 border border-slate-300">
                        <div className="flex items-start justify-center flex-col p-6 sm:p-8 gap-4 sm:h-96">
                          <div>
                            <img
                              src={engaging}
                              alt="speed"
                              className="w-[50px] h-[50px]"
                            />
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <h1 className="text-lg xs:text-xl  font-medium">
                              We Deliver On Time and within Budget
                            </h1>
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <p className="font-medium text-[#787D89] leading-loose md:leading-[1.5rem] text-xs">
                              We have the brightest minds working at our app
                              development company in Toronto. Our developers
                              have expertise in coding a mobile app or creating
                              a marketing campaign. We work smart, fast and
                              deliver projects on time and under your budget.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex items-center justify-center bg-white rounded-md p-2 border border-slate-300">
                        <div className="flex items-start justify-center flex-col p-6 sm:p-8 gap-4 sm:h-96">
                          <div>
                            <img
                              src={feature}
                              alt="speed"
                              className="w-[50px] h-[50px]"
                            />
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <h1 className="text-lg xs:text-xl font-medium">
                              We Have a Process Driven Team
                            </h1>
                          </div>
                          <div className="flex items-center justify-center w-full">
                            <p className="font-medium text-[#787D89] leading-loose md:leading-[1.5rem] text-xs">
                              Our ecommerce software development company has a
                              powerful team of enthusiastic and process-driven
                              professionals dedicated to delivering robust apps
                              and eliminating risks while overcoming challenges
                              to offer the best to you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex items-center justify-center bg-white rounded-md p-2 border border-slate-300">
                        <div className="flex items-start justify-center flex-col p-6 sm:p-8 gap-4 sm:h-96">
                          <div>
                            <img
                              src={attractive}
                              alt="speed"
                              className="w-[50px] h-[50px]"
                            />
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <h1 className="text-lg  font-medium">
                              We Focus on Your Profitability & Scalability
                            </h1>
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <p className="font-medium text-[#787D89] leading-loose md:leading-[1.5rem] text-xs">
                              We are, an industry leading app development
                              company, brings together North America's top
                              engineering and business talent under one roof.
                              These innovative minds are on a sole mission to
                              build scalable solutions for your business that
                              drive profitability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justity-center absolute gap-2 p-2 top-0 right-0 left-0 bottom-0 z-[-10] w-screen h-full">
            <div className="w-screen flex items-center justify-center z-[-1] p-2">
              <img
                src={expertise}
                alt="background"
                className="top-0 right-0 left-0 bottom-0 rotate-90 z-[-1] w-[75%] sm:h-full lg:w-[50%] xl:w-[44%] 2xl:w-[36%]"
              />
            </div>
          </div>
        </section>
        <PortfolioSection
          img={mind}
          bgClass={"bg-mind"}
          heading={"Mindset"}
          imgClass={
            "h-[60%] sm:h-[70%]  md:h-[40rem] lg:h-[56rem] xl:h-[70rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "Whether you're stressed from your daily routine, or simply looking for some motivation, the Mindset App is your one stop shop for it all.  We are, your go-to mobile software development company, has been collaborating with one of North America's top Youtubers; bringing their vision to life."
          }
        />
        <section className="w-screen h-full">
          <div className="flex justify-center items-center my-6">
            <div className="flex items-center justify-center flex-col-reverse md:flex-row gap-4 p-2 sm:p-4 my-4 lg:max-w-6xl">
              <div className="flex items-start justify-center flex-col gap-4 p-2 md:p-4 w-full md:w-1/2">
                <div className="flex items-center justify-center h-full">
                  <h1 className="text-3xl lg:text-4xl xl:text-[2.7rem] font-bold xl:leading-[3.6rem]">
                    We Are Transforming the
                    <span className="text-[#8873ef]"> Digital Landscape</span>
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-4 w-full  h-full sm:w-[80%] md:w-[90%]">
                  <p className="font-medium text-[#828FAD] leading-[1.6rem] md:leading-[2rem] lg:leading-[2.5rem] text-sm md:text-[1rem]">
                    We take care of your business needs by bringing novel
                    digital experiences to the table by flawlessly integrating
                    design & development. Our team offers end-to-end full stack
                    development services blended with creativity engender
                    unbeatable results. Our mobile application development
                    agency encompasses a deft team with hands-on experience in
                    providing{" "}
                    <span className="text-[#8873ef]">
                      cross-platform app development
                    </span>{" "}
                    services while focusing on SEO, accessibility and security.
                  </p>
                </div>
                <Link className="flex items-center justify-start gap-2 flex-row w-full xs:w-[75%] lg:w-[50%] text-[#8873ef]">
                  <Button
                    title={"Schedule a Free Consultation"}
                    pClass={"text-[.7rem]"}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center w-full md:w-1/2 h-full">
                <div className="flex items-center justify-center w-full flex-row gap-2 xs:gap-4 p-1 xs:p-2">
                  <div className="flex items-center justify-center flex-col w-[50%] md:w-[55%] gap-2 sm:gap-4">
                    <div className="flex items-center justify-center">
                      <img
                        src={mobileDev}
                        alt="mobileDev"
                        className="h-[100%]"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <img src={appDev} alt="appDev" className="w-[100%]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-end w-[50%] md:w-[55%]">
                    <img src={digiMob} alt="digiMob" className="h-[100%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PortfolioSection
          img={setlyt}
          bgClass={"bg-settlyt"}
          heading={"Settlyt"}
          imgClass={
            "h-[60%] sm:h-[70%]  md:h-[40rem] lg:h-[56rem] xl:h-[70rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "Settlyt is one of the best friendly betting apps in USA, funded and backed by the Harvard Innovation lab. Be it doing more number of pushups or chugging a pint of beer faster than your friends, this app lets you play bets on such fun activities."
          }
        />
        <section className="w-screen h-full relative">
          <div className="flex items-center justify-center flex-col gap-4 p-2 my-12">
            <div className="w-full flex items-center justify-center gap-2">
              <h1 className="text-gray-800 text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem]">
                We Are<span className="text-[#8873ef]"> Best</span> At
              </h1>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="flex items-center justify-center w-screen sm:p-4">
                <Swiper
                  modules={[Navigation, Pagination, EffectFade, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={50}
                  className="!px-4"
                  autoplay={{ delay: 5000 }}
                  // breakpoints={{
                  //   300: {
                  //     slidesPerView: 1,
                  //     spaceBetween: 10,
                  //   },
                  //   500: {
                  //     slidesPerView: 2,
                  //     spaceBetween: 20,
                  //   },
                  //   768: {
                  //     slidesPerView: 2,
                  //     spaceBetween: 20,
                  //   },
                  //   1024: {
                  //     slidesPerView: 3,
                  //     spaceBetween: 30,
                  //   },
                  // }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center  rounded-md">
                      <div className="flex items-center justify-center  w-screen sm:p-6">
                        <div className="flex items-center justify-center w-full h-full mt-2 sm:mt-2 sm:p-4  md:mt-6">
                          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
                            <div className="flex items-center justify-center  w-full md:w-1/2 p-2">
                              <img
                                src={nlp}
                                alt="hero"
                                className="lg:h-[90%] h-[70%] sm:h-[80%] rounded-lg"
                              />
                            </div>
                            <div className="flex items-start justify-center gap-4 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
                              <div className="flex items-center justify-center gap-4 h-full p-1">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-[3.6rem]">
                                  Analytics Using AI and NLP
                                </h1>
                              </div>
                              <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%] p-1">
                                <p className="font-medium text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm md:text-base">
                                  The app developers in our company know the ins
                                  and outs of data science, big data analysis,
                                  enterprise search consulting services and
                                  other latest technologies. We help
                                  organizations unlock their full potential with
                                  scalable apps that assist in making informed
                                  business decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center  rounded-md">
                      <div className="flex items-center justify-center  w-screen sm:p-6">
                        <div className="flex items-center justify-center w-full h-full mt-2 sm:p-4  md:mt-6">
                          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
                            <div className="flex items-center justify-center  w-full md:w-1/2 p-2">
                              <img
                                src={mobile}
                                alt="hero"
                                className="lg:h-[90%] h-[65%] sm:h-[80%] rounded-lg"
                              />
                            </div>
                            <div className="flex items-start justify-center gap-4 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
                              <div className="flex items-center justify-center gap-4 h-full p-1">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-[3.6rem]">
                                  Analytics Using AI and NLP
                                </h1>
                              </div>
                              <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%] p-1">
                                <p className="font-medium text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm md:text-base">
                                  The app developers in our company know the ins
                                  and outs of data science, big data analysis,
                                  enterprise search consulting services and
                                  other latest technologies. We help
                                  organizations unlock their full potential with
                                  scalable apps that assist in making informed
                                  business decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center rounded-md">
                      <div className="flex items-center justify-center  w-screen sm:p-6">
                        <div className="flex items-center justify-center w-full h-full mt-2 sm:p-4  md:mt-6">
                          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
                            <div className="flex items-center justify-center  w-full md:w-1/2 p-2">
                              <img
                                src={web}
                                alt="hero"
                                className="lg:h-[90%] h-[65%] sm:h-[80%] rounded-lg"
                              />
                            </div>
                            <div className="flex items-start justify-center gap-4 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
                              <div className="flex items-center justify-center gap-4 h-full p-1">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-bold xl:leading-[3.6rem]">
                                  Analytics Using AI and NLP
                                </h1>
                              </div>
                              <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%] p-1">
                                <p className="font-medium text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm md:text-base">
                                  The app developers in our company know the ins
                                  and outs of data science, big data analysis,
                                  enterprise search consulting services and
                                  other latest technologies. We help
                                  organizations unlock their full potential with
                                  scalable apps that assist in making informed
                                  business decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center rounded-md">
                      <div className="flex items-center justify-center  w-screen sm:p-6">
                        <div className="flex items-center justify-center w-full h-full mt-2 sm:p-4  md:mt-6">
                          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
                            <div className="flex items-center justify-center  w-full md:w-1/2 p-2">
                              <img
                                src={prod}
                                alt="hero"
                                className="lg:h-[90%] h-[65%] sm:h-[80%] rounded-lg"
                              />
                            </div>
                            <div className="flex items-start justify-center gap-4 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
                              <div className="flex items-center justify-center gap-4 h-full p-1">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-[3.6rem]">
                                  Analytics Using AI and NLP
                                </h1>
                              </div>
                              <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%] p-1">
                                <p className="font-medium text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm md:text-base">
                                  The app developers in our company know the ins
                                  and outs of data science, big data analysis,
                                  enterprise search consulting services and
                                  other latest technologies. We help
                                  organizations unlock their full potential with
                                  scalable apps that assist in making informed
                                  business decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex items-center justify-center rounded-md">
                      <div className="flex items-center justify-center  w-screen sm:p-6">
                        <div className="flex items-center justify-center w-full h-full mt-2 sm:p-4  md:mt-6">
                          <div className="flex items-center flex-col md:flex-row justify-center gap-2 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
                            <div className="flex items-center justify-center  w-full md:w-1/2 p-2">
                              <img
                                src={strategy}
                                alt="hero"
                                className="lg:h-[90%] h-[65%] sm:h-[80%] rounded-lg border"
                              />
                            </div>
                            <div className="flex items-start justify-center gap-4 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
                              <div className="flex items-center justify-center gap-4 h-full p-1">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-[3.6rem]">
                                  Analytics Using AI and NLP
                                </h1>
                              </div>
                              <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%] p-1">
                                <p className="font-medium text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm md:text-base">
                                  The app developers in our company know the ins
                                  and outs of data science, big data analysis,
                                  enterprise search consulting services and
                                  other latest technologies. We help
                                  organizations unlock their full potential with
                                  scalable apps that assist in making informed
                                  business decisions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center absolute gap-2 p-2 top-6 right-0 left-0 bottom-0  w-screen h-full">
            <div className="w-screen flex items-center justify-center p-2">
              <img
                src={best}
                alt="background"
                className="top-0 right-0 left-0 bottom-0 rotate-90  w-[60%] sm:h-full lg:w-[50%] xl:w-[44%] 2xl:w-[36%]"
              />
            </div>
          </div>
        </section>
        <CustomerResponse img={best}/>
        <PortfolioSection
          img={alphamatch}
          bgClass={"bg-alpha"}
          heading={"Alpha Match"}
          imgClass={
            "h-[60%] sm:h-[70%]  md:h-[40rem] lg:h-[56rem] xl:h-[70rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "Alpha Match allows you to search, post, and promote pet listings, services, and products. We developed this platform to allow consumers to search for their pet-related services, products or events both locally and abroad."
          }
        />
        <section className="w-screen h-full relative">
        <div className="flex justify-center items-center my-6">
                <div className="flex items-center justify-center flex-col-reverse md:flex-row lg:gap-4 p-4 lg:my-4">
                  <div className="flex items-center justify-center w-full md:w-[50%] p-2 h-full">
                    <div className="flex items-center justify-center p-5 lg:p-6 md:p-4 sm:p-6 lg:m-4 w-full xl:w-[65%]  flex-col">
                      <div className="flex items-end justify-start flex-col w-full rounded-md gap-1 sm:gap-2 sm:px-6  sm:my-2 my-1 px-3 xs:px-4  md:my-0">
                        <div className="p-4 flex items-center mr-4 justify-center bg-white border rounded-lg">
                          {" "}
                          <img
                            src={sap}
                            alt="sap"
                            className="h-12"
                          />
                        </div>
                      </div>
                      <div className="flex items-start justify-center flex-col  justify-self-center w-full  rounded-md gap-1 sm:gap-2 sm:px-6 sm:my-2 my-1 px-3 xs:px-4  md:my-0">
                        <div className="p-4 flex items-center ml-4 justify-center bg-white border rounded-lg">
                          <img
                            src={roku}
                            alt="roku"
                            className="h-12"
                          />
                        </div>
                        
                      </div>

                      <div className="flex  items-center justify-center flex-col justify-self-center w-full   rounded-md gap-1 sm:gap-2 sm:px-6  sm:my-2 my-1 px-3 xs:px-4 md:my-0">
                        <div className="p-4 flex items-center justify-center mb-1 mt-4 ml-5 bg-white border rounded-lg">
                          {" "}
                          <img
                            src={braze}
                            alt="braze"
                            className="h-12"
                          />
                        </div>
                        
                      </div>
                      <div className="flex items-end justify-center flex-col justify-self-center  w-full rounded-md gap-1 sm:gap-2 sm:px-6  sm:my-2 my-1  px-3 xs:px-4 md:my-0">
                        <div className="p-4 flex items-center mt-2 mr-4 justify-center bg-white border rounded-lg">
                          {" "}
                          <img
                            src={alpha}
                            alt="alpha"
                            className="h-12"
                          />
                        </div>
                        
                      </div>
                      <div className="flex items-start justify-center flex-col justify-self-center w-full  rounded-md gap-1 sm:gap-2 sm:px-6  sm:my-2 my-1 px-3 xs:px-4  md:my-0">
                        <div className="p-4 flex items-center mb-2 ml-4 justify-center bg-white border rounded-md">
                          {" "}
                          <img
                            src={aws}
                            alt="aws"
                            className="h-12"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center flex-col justify-self-center w-full  rounded-md gap-1 sm:gap-2 sm:px-6  sm:my-2 my-1 px-3 xs:px-4  md:my-0">
                        <div className="p-4 flex items-center justify-center bg-white border rounded-lg">
                          {" "}
                          <img
                            src={dotcms}
                            alt="dotcms"
                            className="h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-center flex-col gap-4 p-2 md:p-4 w-full md:w-[50%]">
                    <div className="flex items-center justify-center gap-4 h-full">
                      <h1 className="text-3xl lg:text-4xl xl:text-[2.5rem] font-bold xl:leading-[3.6rem] text-[#8873ef]">
                      We Partner
                        <span className="text-gray-800">
                          {" "}
                          the Technology Companies
                        </span>
                      </h1>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full  h-full sm:w-[80%] md:w-[90%]">
                      <p className="font-medium text-[#67718a] leading-[1.6rem] text-sm md:text-[1rem]">
                      We has partnered with many top-notch technology companies and delivered unparalleled application development solutions to upscale their business. We are incredibly lucky to work with a variety of tech industries to create outstanding digital solutions for your business. From mobile game development to AI-based hospital app development, we offer a wide range of services under one roof. That’s why we have become the most sought-destination for application development in Toronto.
                      </p>
                    </div>
                    <Link className="flex items-center justify-start gap-2 flex-row w-full text-[#8873ef]">
                      <p>Show all services</p>
                      <img src={arrow} alt="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center absolute gap-2 p-2 top-6 right-0 left-0 bottom-0 z-[-1] w-screen h-full">
            <div className="w-screen flex items-center justify-center p-2">
              <img
                src={best}
                alt="background"
                className="top-0 right-0 left-0 bottom-0 sm:rotate-90  w-[75%] sm:h-full md:w-[50%] xl:w-[44%] 2xl:w-[36%]"
              />
            </div>
          </div>
        </section>
        <PortfolioSection
          img={thatsgame}
          bgClass={"bg-thatsgame"}
          heading={"ThatsGame"}
          imgClass={
            "h-[60%] sm:h-[70%]  md:h-[30rem] lg:h-[36rem] xl:h-[50rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "ThatsGame is a mentoring platform that connects young basketball athletes with professional mentors. We developed this app to elevate future athletes with comprehensive knowledge from sports experts."
          }
        />
        <section className="w-screen h-full">
          
          <div className="flex items-center justify-center gap-4 p-2 bg-background1">
            <div className="flex items-center justify-center gap-4 p-2 flex-col my-8">
                   <div className="flex items-center justify-center gap-4 p-2 max-w-6xl">
                    <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-[2rem] font-medium xl:leading-[3.6rem] text-center">Powering Innovation across verticals, by collaborating with Startups, Enterprises and the world's Leading Brands</h1>
                   </div>
                   <div className="flex items-center justify-center gap-4 p-2 max-w-6xl">
                    <p className="text-lg font-normal leading-[2rem] text-center text-[#636d86]">Being a mobile application development agency, we deeply understand your business needs and then search perfect solutions to match it. We are adept at offering result-oriented mobile app development services in the domain from the last many years.</p>
                   </div>
                   <div className="flex items-center justify-center gap-4 flex-col w-full mt-6">
                         <div className="flex items-center justify-center gap-6 flex-col md:flex-row w-full">
                                <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-lg px-6">
                                  <div className="flex items-center justify-center bg-[#F0FBF7] p-3 rounded-md"><h1 className="text-base text-[#46D39A]">5M+</h1></div>
                                  <div className="w-full h-full flex items-start justify-center flex-col gap-2"><h2>Downloads</h2><img src={description1} alt="description"/></div>
                                </div>
                                <div className="flex items-center justify-center gap-4 p-4 md:mb-14 bg-white rounded-lg px-6">
                                <div className="flex items-center justify-center bg-[#FFF7F2] p-3 rounded-md"><h1 className="text-base text-[#F5808B]">$5M</h1></div>
                                  <div className="w-full h-full flex items-start justify-center flex-col gap-2"><h2>Revenue Added</h2><img src={description3} alt="description"/></div>
                                </div>
                                <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-lg px-6">
                                <div className="flex items-center justify-center bg-[#FEF1F2] p-3 rounded-md"><h1 className="text-base text-[#F5808B]">96%</h1></div>
                                  <div className="w-full h-full flex items-start justify-center flex-col gap-2"><h2>Project Delivered</h2><img src={description1} alt="description"/></div>
                                </div>
                         </div>
                         <div className="flex items-center justify-center gap-4 p-4 flex-row bg-white rounded-lg px-6">
                          <div className="flex items-center justify-center bg-[#EAF8FF] p-3 rounded-md"><h1 className="text-base text-[#50DEFD]">94%</h1></div>
                                  <div className="w-full h-full flex items-start justify-center flex-col gap-2"><h2>Customer Satisfaction</h2><img src={description} alt="description"/></div>
                         </div>
                   </div>
            </div>
          </div>

        </section>
        <PortfolioSection
          img={ideal}
          bgClass={"bg-ideal"}
          heading={"Ideal Protein"}
          imgClass={
            "h-[60%] sm:h-[70%] md:h-[36rem] lg:h-[56rem] xl:h-[64rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "Ideal Protein has aided several fitness enthusiasts to spruce up their lifestyles. Assist your target audience with high-end fitness apps by availing our mobile application development services now."
          }
        />
        <div className="my-20"></div>
        <PortfolioSection
          img={max}
          bgClass={"bg-maxsold"}
          heading={"Maxsold"}
          imgClass={
            "h-[60%] sm:h-[70%] md:h-[40rem] lg:h-[56rem] xl:h-[70rem] bottom-[-4] right-0 md:absolute"
          }
          subtitle={
            "We created Maxsold to aid sellers with an efficient catalog app. It accommodates all activities like downsizing sale, estate sale, relocation sale or business liquidation under one head."
          }
        />
        <section className="w-screen h-screen">
            
        </section>
      </main>
    </>
  );
}
