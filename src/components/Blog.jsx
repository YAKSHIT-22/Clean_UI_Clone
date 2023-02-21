import React from 'react'
import appdev from '../assets/blog/appdev.jpg';
import fitness from '../assets/blog/fitness.png';
import openai from '../assets/blog/openai.jpg';
import arrow from "../assets/arrowright.svg";

export default function Blog() {
  return (
    <section className="w-screen h-full">
    <div className="flex items-center justify-center gap-4 p-2">
      <div className="flex items-center justify-center gap-4 p-2 flex-col my-8">
       <div className="flex items-center sm:items-end justify-center  sm:justify-end w-full gap-3 p-2">
        <div className="flex items-center sm:items-end justify-center gap-4 p-2 flex-col max-w-6xl w-full sm:w-[75%] md:mr-2 lg:mr-4">
        <div className="flex items-center justify-center p-2 "> 
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2rem] font-bold xl:leading-[3.6rem]">
            What’s cooking in the{" "}
            <span className="text-[#8873ef]"> Studio?</span>
          </h1>
          </div>
          <div className="flex items-center justify-center p-2 w-full sm:w-[80%]">                
            <p className="font-semibold text-[#828FAD] leading-[1.6rem] text-sm md:text-[1.2rem] text-center sm:text-end">
            Our app agency has mastered the process of delivering highly
            efficient and engaging solutions. Come have a peek into what
            our team is working on.
          </p>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center my-4 p-2 max-w-6xl">
             <div className="items-center justify-center gap-4 grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              
              <div className="items-start justify-center grid-cols-1 gap-1 flex flex-col p-4 sm:mb-24">
              <div className="flex items-center justify-center gap-4 p-2 w-[90%]">
                  <img src={appdev} alt="appdev" className="w-full sm:w-[50%] md:w-[90%] lg:w-[60%] rounded-lg"/>
                </div>
                <div className="flex items-center justify-center gap-4 p-2">
                  <h5 className="text-xl font-medium xl:leading-normal">How Does MyFitnessPal Work As Canada’s Most Popular Fitness App?</h5>
                </div>
                <div className="flex items-center justify-start gap-4 p-2">
                  <p className="text-base font-normal xl:leading-normal text-[#828fad]">“The sweat is the footprints towards a better you!” This random quote on workout is likely to motivate.</p>
                </div>
                <div className="flex items-center justify-start gap-4 p-2">
                  <button className="text-xs font-normal xl:leading-normal">Read More</button>
                </div>

              </div>
              <div className="items-start justify-center grid-cols-1 gap-1 flex flex-col p-4">
                <div className="flex items-center justify-center gap-4 p-2 w-[90%]">
                  <img src={openai} alt="openai" className="w-full sm:w-[50%] md:w-[90%] lg:w-[50%] rounded-lg" />
                </div>
                <div className="flex items-center justify-center gap-4 p-2">
                  <h5 className="text-xl font-medium leading-normal">What Is ChatGPT & How Does It Work? Is There Any Practical Use Of ChatGPT?</h5>
                </div>
                <div className="flex items-center justify-start gap-4 p-2">
                  <p className="text-base font-normal xl:leading-normal text-[#828fad]">Imagine a personal assistant who never takes leaves, is always available to serve you, and has instant.</p>
                </div>
                <div className="flex items-center justify-start gap-4 p-2">
                  <button className="text-xs font-normal xl:leading-normal">Read More</button>
                </div>

              </div>
              <div className="items-start justify-center grid-cols-1 gap-1 flex flex-col p-4">
              <div className="flex items-center justify-center gap-4 p-2 w-[90%]">
                  <img src={fitness} alt="fitness" className="w-full sm:w-[50%] md:w-[90%] lg:w-[50%] rounded-lg" />
                </div>
                <div className="flex items-center justify-center gap-4 p-2">
                  <h5 className="text-xl font-medium xl:leading-normal">How is IoMT Revolutionizing the Healthcare Industry?</h5>
                </div>
                <div className="flex items-center justify-start gap-4 p-2">
                  <p className="text-base font-normal xl:leading-normal text-[#828fad]">Amongst the technological disruption in several vital industries, Healthcare is the one that has the.</p>
                </div>
                <div className="flex items-center justify-start gap-4 p-2">
                  <button className="text-xs font-normal xl:leading-normal">Read More</button>
                </div>

              </div>
             </div>
        </div>
        <div className="max-w-7xl w-full flex items-center justify-start gap-1"><p className="text-base font-normal xl:leading-normal text-[#8873ef]">See All Blog</p><img src={arrow} alt="arrow"/></div>
      </div>
    </div>
  </section>
  )
}
