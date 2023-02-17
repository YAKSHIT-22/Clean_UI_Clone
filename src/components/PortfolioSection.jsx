import React from 'react'
import playstore from '../assets/playstore.png';
import applestore from '../assets/applestore.png';
import arrow from "../assets/arrowright.svg";
import Button from './Button';
import { Link } from 'react-router-dom';

export default function PortfolioSection({heading,subtitle,img,bgClass, imgClass}) {
  return (
    <section className="w-screen h-full md:h-screen overflow-hidden">
    <div className={`flex items-center justify-center  w-screen h-full sm:p-6 bg-no-repeat bg-cover bg-center relative ${bgClass}`}>
      <div className="flex items-center justify-center w-full h-full mt-20 sm:mt-20 sm:p-4  md:mt-6">
        <div className="flex items-center flex-col md:flex-row justify-center gap-4 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
        <div className="flex items-start justify-center gap-5 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
          <div className="flex items-center justify-center gap-4 h-full">
            <Button title={"Our Portfolio"} divClass={"bg-transparent border-2 border-[#8873ef] md:p-5 mb-12"} pClass={"!text-[#8873ef] xl:text-[1rem]"}/>
          </div>
         <div className="flex items-center justify-center h-full">
         <h1 className="text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem]">{heading}</h1>
         </div>
         <div className="flex items-center justify-center w-full sm:w-[80%] md:w-[90%]">
          <p className="font-medium text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm">{subtitle}</p>
         </div>
         <Link to="/" className="flex items-center justify-start gap-2 flex-row w-full text-[#8873ef]">
                  <p>View Case Studies</p>
                  <img src={arrow} alt="arrow" />
          </Link>
         <div className="flex items-center justify-start gap-2 w-full h-full">
           <Link to="/"  className="flex items-center justify-center">
                <img src={playstore} alt={playstore} className="h-12"/>
           </Link>
           <Link to="/"  className="flex items-center justify-center">
                <img src={applestore} alt={applestore} className="h-12"/>
           </Link>
        </div>
        </div>       
      <div className="flex items-center justify-center w-full md:w-1/2 p-4 h-full">
        <img src={img} alt="hero" className={`${imgClass}`} />
      </div>
      </div>
      </div>
    </div>
    </section>
  )
}
