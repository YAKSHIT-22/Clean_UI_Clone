import React from 'react'
import arrow from '../assets/arrowright.svg';
import android from "../assets/Portfolpage/mobile-dev/android.png";
import app from "../assets/Portfolpage/mobile-dev/app.png";
import applewatch from "../assets/Portfolpage/mobile-dev/apple-watch.png";
import apple from "../assets/Portfolpage/mobile-dev/apple.png";
import ar from "../assets/Portfolpage/mobile-dev/ar.png";
import blockchain from "../assets/Portfolpage/mobile-dev/blockchain.png";
import data from "../assets/Portfolpage/mobile-dev/data.png";
import ecommerce from "../assets/Portfolpage/mobile-dev/ecommerce.png";
import game from "../assets/Portfolpage/mobile-dev/game.png";
import hotel from "../assets/Portfolpage/mobile-dev/hotel.png";
import unity from "../assets/Portfolpage/mobile-dev/unity.png";
import window from "../assets/Portfolpage/mobile-dev/window.png";

export default function MobileDev({img1,img2,heading1,heading2,para1,para2}) {
  return (
    <section className="w-screen h-full">
          <div className="flex items-center justify-center gap-2 flex-row w-full">
            <div className="flex items-center justify-center gap-6 flex-col w-full py-4 px-1 xs:p-4">
              <div className="flex items-center justify-center p-4 w-full  md:w-[75%]  xl:w-[50%]">
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-[3.6rem] text-center">
                  Our Mobile App Development
                  <span className="text-[#8873ef]">
                    <br />
                    Services Includes...
                  </span>
                </h1>
              </div>
              <div className="flex items-center justify-center p-2 w-full md:w-[90%]  lg:w-[85%] xl:w-[75%]">
                <p className="text-lg font-medium xl:leading-[1.5rem] text-center text-[#828fad]">
                  AppStudio is a leading mobile app development company in
                  Canada. Here, you get a wide range of digital solutions under
                  one roof. Our services include iOS mobile app development
                  services, Android application development, web and mobile app
                  development in Ottawa.
                </p>
              </div>
              <div className="flex items-center justify-center p-4 w-full">
                <div className="flex items-center justify-center p-4 lg:p-6 md:p-4 sm:p-6 lg:m-4 w-full h-full flex-col max-w-3xl xl:max-w-5xl bg-tommorow bg-no-repeat bg-cover bg-center rounded-lg">
                  <div className="flex items-center justify-center w-full h-full my-2">
                    <div className="flex items-center justify-center w-full flex-col">
                      <div className="flex items-center justify-around flex-col md:flex-row w-full rounded-md gap-1 sm:gap-2  md:my-0">
                        <div className="flex items-center md:mb-24 md:ml-4 ml-12 mb-2 justify-between ">
                          <img src={apple} alt="apple" className="h-28" />
                        </div>
                        <div className="flex items-center md:mt-12 md:ml-8 mr-24 mt-2 justify-between">
                          <img src={ar} alt="ar" className="h-28" />
                        </div>

                        <div className="flex items-center justify-center flex-row  justify-self-center w-full md:w-[50%]  rounded-md gap-1 sm:gap-2">
                          <div className="flex items-center mb-32 xs:mr-8 justify-between ">
                            <img
                              src={ecommerce}
                              alt="ecommerce"
                              className="h-28"
                            />
                          </div>
                          <div className="flex items-center mt-32 xs:mr-8 justify-between ">
                            <img
                              src={blockchain}
                              alt="aviation"
                              className="h-28"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex  items-center justify-around flex-col md:flex-row justify-self-center w-full   rounded-md gap-1 sm:gap-2">
                        <div className="flex items-center md:mt-12 md:ml-8 mr-32 mt-2 justify-between">
                          <img src={data} alt="ecommerce" className="h-28" />
                        </div>
                        <div className="flex items-center md:mb-24 md:ml-4 ml-8 mb-2 justify-between ">
                          <img src={android} alt="aviation" className="h-28" />
                        </div>
                        <div className="flex items-center justify-center flex-row justify-self-center w-full  md:w-[50%] rounded-md gap-1 sm:gap-2">
                          <div className="flex items-center mb-32 xs:mr-8 justify-between ">
                            <img
                              src={window}
                              alt="ecommerce"
                              className="h-28"
                            />
                          </div>
                          <div className="flex items-center mb-2 mt-32 xs:mr-8 justify-between ">
                            <img src={app} alt="aviation" className="h-28" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-around flex-col md:flex-row justify-self-center w-full  rounded-md gap-1 sm:gap-2 ">
                        <div className="flex items-center  mr-24 md:mb-24 md:ml-4  justify-between ">
                          {" "}
                          <img src={unity} alt="technology" className="h-28" />
                        </div>
                        <div className="flex items-center mb-2 md:mt-12 mt-2 ml-12 md:ml-8  justify-between ">
                          {" "}
                          <img src={hotel} alt="chatbot" className="h-28" />
                        </div>
                        <div className="flex items-end justify-center flex-row justify-self-center w-full md:w-[50%]  rounded-md gap-1 sm:gap-2">
                          <div className="flex items-center mb-32 xs:mr-8  justify-between ">
                            <img
                              src={applewatch}
                              alt="ecommerce"
                              className="h-28"
                            />
                          </div>
                          <div className="flex items-center mt-32 xs:mr-8 justify-between ">
                            <img src={game} alt="aviation" className="h-28" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between max-w-7xl gap-8 p-4 flex-col md:flex-row">
                <div className="flex items-start gap-3 p-4 flex-col justify-center bg-white border group rounded-lg transition-all hover:bg-[#8873ef] text-gray-800">
                  <div className="flex items-center justify-center flex-row p-2 gap-3">
                    <img src={img1} alt="android" className="h-16"/>
                    <h1 className="text-base  group-hover:text-white text-[#8873ef] font-bold">{heading1}</h1>
                  </div>
                  <div className="flex items-center justify-start p-2">
                    <p className="text-base font-normal group-hover:text-white xl:leading-normal text-gray-800">
                      {para1}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start gap-1 p-2">
                    <p className="text-xs font-normal xl:leading-normal text-[#8873ef] group-hover:text-white">
                      Know more
                    </p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
                <div className="flex items-end gap-3 p-4 flex-col justify-center bg-white border rounded-lg group transition-all  hover:bg-[#8873ef] text-gray-800">
                  <div className="flex items-center justify-center flex-row p-2 gap-3">
                    <h1 className="text-base  group-hover:text-white text-[#8873ef] font-bold">{heading2}</h1>
                    <img src={img2} alt="android" className="h-16"/>
                  </div>
                  <div className="flex items-center justify-start p-2">
                    <p className="text-base font-normal xl:leading-normal text-gray-800 group-hover:text-white text-end">
                      {para2}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-start gap-1 p-2">
                    <p className="text-xs font-normal xl:leading-normal text-[#8873ef] group-hover:text-white">
                      Know more
                    </p>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
