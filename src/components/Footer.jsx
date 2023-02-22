import React from 'react'
import footer from '../assets/footer/footer.svg'
import facebook from '../assets/footer/facebook.svg'
import linkedin from '../assets/footer/linkedin.svg'
import instagram from '../assets/footer/instagram.svg'
import twitter from '../assets/footer/twitter.svg'
import arrow from '../assets/arrow.svg'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-screen h-full bg-footer">
         <div className="flex justify-start flex-col items-start md:items-center md:justify-center p-3">
               <div className="flex items-start justify-start md:items-center md:justify-center flex-col gap-4 p-4 w-full">
               <div className="flex flex-col items-start justify-center">
              <div className="flex md:hidden flex-col items-start justify-center gap-8 font-semibold text-gray-100">
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  {" "}
                  <div className="flex item-center justify-center cursor-pointer font-semibold text-gray-100">
                    <p>About</p>
                  </div>
                </NavLink>
                <NavLink
                  to="/services"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold text-gray-100">
                    <p>Services</p>
                    <div className="flex items-center justify-center">
                        <img src={arrow} alt="arrow"/>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  to="/industries"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  {" "}
                  <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold text-gray-100">
                    <p>Industries</p>
                    <div className="flex items-center justify-center">
                        <img src={arrow} alt="arrow"/>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  to="/technologies"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center flex-row cursor-pointer gap-2 font-semibold text-gray-100">
                    <p>Technologies</p>
                    <div className="flex items-center justify-center">
                        <img src={arrow} alt="arrow"/>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center cursor-pointer font-semibold text-gray-100">
                    <p>Portfolio</p>
                  </div>
                </NavLink>
                <NavLink
                  to="/blog"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.5s ease-in-out",
                  })}
                >
                  <div className="flex item-center justify-center cursor-pointer font-semibold text-gray-100">
                    <p>Blog</p>
                  </div>
                </NavLink>
                <p className="text-white text-sm font-normal">© 2023 All Right Reserved | Sitemap</p>
              </div>
              
            </div>
                     <div className="hidden md:flex items-start flex-row justify-between gap-6 p-4 max-w-5xl w-full">
                         <div className="flex flex-col items-start justify-center gap-4 p-4">
                                     <h1 className="text-white text-base">About</h1>  
                                     <div className="flex items-start justify-center flex-col gap-4">
                                      <p className="text-[#686F98] text-sm">Our Company</p>
                                      <p className="text-[#686F98] text-sm">How we work</p>
                                      <p className="text-[#686F98] text-sm">MVP</p>
                                      <p className="text-[#686F98] text-sm">Startup</p>
                                      <p className="text-[#686F98] text-sm">Careers</p>
                                      <p className="text-[#686F98] text-sm">Contact Us</p>
                                      <p className="text-[#686F98] text-sm">Blog</p>
                                    </div> 
                         </div>
                         <div className="flex flex-col items-start justify-center gap-4 p-4">
                                     <h1 className="text-white text-base">Services</h1>  
                                     <div className="flex items-start justify-center flex-col gap-4">
                                      <p className="text-[#686F98] text-sm">iOS App Development</p>
                                      <p className="text-[#686F98] text-sm">Android app development</p>
                                      <p className="text-[#686F98] text-sm">IoT Application Development</p>
                                      <p className="text-[#686F98] text-sm">AI App Development</p>
                                      <p className="text-[#686F98] text-sm">Software Development</p>
                                      <p className="text-[#686F98] text-sm">UI/UX Design</p>
                                      <p className="text-[#686F98] text-sm">Web Development</p>
                                      <p className="text-[#686F98] text-sm">Flutter App Development</p>
                                      <p className="text-[#686F98] text-sm">React Native Development</p>
                                      <p className="text-[#686F98] text-sm">more...</p>
                                    </div> 
                         </div>
                         <div className="flex flex-col items-start justify-center gap-4 p-4">
                                     <h1 className="text-white text-base">Industries</h1>  
                                     <div className="flex items-start justify-center flex-col gap-4">
                                      <p className="text-[#686F98] text-sm">Mobile Game Apps</p>
                                      <p className="text-[#686F98] text-sm">HealthCare Apps</p>
                                      <p className="text-[#686F98] text-sm">Government Apps</p>
                                      <p className="text-[#686F98] text-sm">Fitness & Wellness Apps</p>
                                      <p className="text-[#686F98] text-sm">Enterprises Apps</p>
                                      <p className="text-[#686F98] text-sm">Education Apps</p>
                                      <p className="text-[#686F98] text-sm">On Demand Apps</p>
                                      <p className="text-[#686F98] text-sm">Social Network Apps</p>
                                      <p className="text-[#686F98] text-sm">Events & Entertainment Apps</p>
                                      <p className="text-[#686F98] text-sm">Retail & E-commerce Apps</p>
                                      <p className="text-[#686F98] text-sm">Beauty & Fashion Apps</p>
                                    </div> 
                         </div>
                         <div className="flex flex-col items-start justify-center gap-4 p-4">
                                     <h1 className="text-white text-base">Portfolio</h1>  
                                     <div className="flex items-start justify-center flex-col gap-4">
                                      <p className="text-[#686F98] text-sm">Settlyt</p>
                                      <p className="text-[#686F98] text-sm">Mindset</p>
                                      <p className="text-[#686F98] text-sm">WSPS</p>
                                      <p className="text-[#686F98] text-sm">Alphamatch</p>
                                      <p className="text-[#686F98] text-sm">&Jane</p>
                                      <p className="text-[#686F98] text-sm">Maxsold</p>
                                      <p className="text-[#686F98] text-sm">ThatsGame</p>
                                      <p className="text-[#686F98] text-sm">Ideal Protein</p>
                                      <p className="text-[#686F98] text-sm">DynaGlo</p>
                                      <p className="text-[#686F98] text-sm">Viewgem</p>
                                      <p className="text-[#686F98] text-sm">Kampsite</p>
                                    </div> 
                         </div>
                     </div>
                     
               </div>
               <div className="flex items-center justify-center gap-4 p-4 w-full h-full">
                     <div className="flex items-center justify-around w-full flex-col gap-8 md:flex-row p-2">
                <div className="flex items-center justify-center">
                <img src={footer} alt="dmcs" className="w-40 h-auto"/>
                </div>
                <p className="text-white text-sm md:flex hidden">© 2023 All Right Reserved | Sitemap</p>
                <div className="flex items-center justify-center flex-row gap-2 p-2">
                <img src={facebook} alt="dmcs" className="h-7"/>
                <img src={twitter} alt="dmcs" className="h-7"/>
                <img src={instagram} alt="dmcs" className="h-7"/>
                <img src={linkedin} alt="dmcs" className="h-7"/>
                </div>

              </div>
                     </div>
          </div>
      </footer>
  )
}
