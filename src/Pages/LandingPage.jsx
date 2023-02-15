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
import wsp from '../assets/Portfolio/wsps.png'
import PortfolioSection from "../components/LandingCompo/PortfolioSection";


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
                    <div className="grid gap-4 grid-cols-2 items-center justify-center p-5 lg:p-6 md:p-4 sm:p-6 lg:m-4 w-full sm:w-[75%] md:w-full h-full flex-col bg-[url('https://www.appstudio.ca/assets/images/services/choose-bg.png')] bg-no-repeat bg-cover bg-center rounded-lg">
                      
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                      <div className="p-2 flex items-center justify-center"> <img src={product} alt="product" className="sm:w-full sm:h-full w-[90%] h-[90%]"/></div>
                      <div className=" p-1 w-full"> <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">Product Management</p></div>
                      </div>
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                        <div className="p-2 flex items-center justify-center"><img src={software} alt="software" className="sm:w-full sm:h-full w-[90%] h-[90%]"/></div>
                       <div className=" p-1 w-full"><p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">
                          Software Development
                        </p></div>
                      </div>
                      
                      
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                      <div className="p-2 flex items-center justify-center"> <img src={android} alt="android" className="sm:w-full sm:h-full w-[90%] h-[90%]"/></div>
                      <div className=" p-1 w-full"><p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">
                          Android Development
                        </p></div>
                      </div>
                      <div className="flex grid-cols-1 items-center justify-center flex-col w-min justify-self-center h-full bg-white rounded-md gap-2 sm:px-6 sm:py-2 sm:my-2 my-1 py-1 px-3 xs:px-4 md:p-4 md:my-0">
                      <div className="p-2 flex items-center justify-center">  <img src={ios} alt="ios" className="sm:w-full sm:h-full w-[90%] h-[90%]"/></div>
                      <div className=" p-1 w-full "><p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg  text-center">iOS Development</p></div>
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
         <PortfolioSection img={wsp} heading={"WSPS"} subtitle={"Designed and Developed for Workplace Safety and Prevention Services. This app saves lives, and helps prevent the spread of COVID 19, by providing the most reliable and up to date information needed by Employers across Ontario, Canada."}/>
      </main>
    </>
  );
}
