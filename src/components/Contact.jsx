import React, { useState } from 'react'
import logo from "../assets/logo.svg";
import boston from '../assets/location/boston.jpg'
import chicago from '../assets/location/chicago.jpg'
import sanfransisco from '../assets/location/san-fransisco.jpg'
import toranto from '../assets/location/toranto.jpg'
import waterloo from '../assets/location/waterloo1.jpg'
import Button from './Button';

export default function Contact() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        budget:20,
        message:"",
        sum:"",
      });
      const{name,email,phone,budget,message,sum} = formData
      function onChange(e){
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      }
  return (
    <section className="w-screen h-full">
          <div className="flex items-center justify-center p-4 flex-col relative">
          <div className="flex justify-center items-center my-4 p-3 bg-contact bg-no-repeat bg-center bg-cover rounded-2xl max-w-6xl">
            <div className="flex justify-center items-center flex-col md:flex-row my-8 p-6">
              <div className="flex md:w-1/2 w-full justify-center items-center flex-col text-white my-4 gap-2 p-4">
                <div className="flex items-center justify-center p-2">
                  <img
                    src={logo}
                    alt="logo"
                    className="md:w-20 md:h-10 w-16 h-6"
                  />
                </div>
                 <div className="flex items-center justify-center p-2">
                  <h1 className="text-center text-xl font-bold">SAY HELLO!</h1>
                  </div>                  
                 <div className="flex items-center justify-center p-2">
                  <h2 className="text-center text-xl font-semibold">Get in Touch with us!</h2>
                  </div>                  
                 <div className="flex items-center justify-center p-2 w-[90%] sm:w-[75%]">
                  <p className="text-center text-base font-normal">Let Us Become Your Partner In Developing A Memorable Digital Experience!</p>
                  </div>                  
              </div>
              <div className="flex md:w-1/2 w-full justify-center items-start flex-col my-2 p-2">
                <form className="w-full h-full flex-col flex items-start justify-center gap-4 sm:gap-6 md:gap-8 p-2">
                    <div className="w-full h-full flex-col flex items-start justify-center">
                          <label className="text-white w-full" htmlFor="name">Name</label> 
                          <input type="text" id="name" onChange={onChange} value={name} className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"></input>  
                    </div>
                    <div className="w-full h-full flex-col flex items-start justify-center">
                          <label className="text-white w-full" htmlFor="email">Email</label> 
                          <input type="email" id="email" onChange={onChange} value={email}  className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"></input>  
                    </div>
                    <div className="w-full h-full flex-col flex items-start justify-center">
                          <label className="text-white w-full" htmlFor="phone">Phone</label> 
                          <input type="tel" id="phone" onChange={onChange} value={phone} className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"></input>  
                    </div>
                    <div className="w-full h-full flex-col flex items-start justify-center">
                          <label className="text-white w-full" htmlFor="budget">${budget}</label> 
                          <input type="range" id="budget" min="20" max="900" step="1" onChange={onChange} value={budget} className="accent-gray-50 p-1 w-full outline-none text-white"></input> 
                          <div className="flex items-center justify-between flex-row p-1 w-full">
                          <div><p className="text-white text-sm">$20K</p></div> 
                         <div><p className="text-white text-sm">$900K</p></div>
                          </div> 
                    </div>
                    <div className="w-full h-full flex-col flex items-start justify-center">
                          <label className="text-white w-full" htmlFor="message">Project Description (Optional)</label> 
                          <textarea type="text" id="message" rows={5} cols={10} onChange={onChange} value={message} className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"></textarea>  
                    </div>
                    <div className="w-full h-full flex-col flex items-start justify-center">
                          <label className="text-white w-full" htmlFor="sum">The Sum Of 1+5</label> 
                          <input type="number" id="sum" onChange={onChange} value={sum} className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"></input>  
                    </div>
                    <Button title={"Send Message"} divClass={"bg-white mt-4"} pClass={"!text-[#4AB96A] text-xs"}/>
                </form>
              </div>
            </div>
           
          </div>
          <div className="flex items-center justify-center gap-4 p-2 text-white bottom-0 mt-[-6rem] z-[10] flex-col">
                  <div className="flex items-center justify-center w-full h-full"><h1  className="text-center text-2xl font-bold">Office Location</h1></div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-center gap-6  sm:gap-4 p-2">
                       <div className="flex items-start justify-center gap-4 relative grid-cols-1 rounded-lg">
                        <div className="flex items-center justify-center"><img src={toranto} alt="boston" className="rounded-lg"/></div>
                        <div className="flex items-center justify-center absolute top-0 gap-2  flex-col"><h1 className="w-[75%] text-center mt-2 whitespace-nowrap  text-black text-sm">Toronto</h1><p className="w-[85%] text-black text-center text-xs">350 Bay St, 7th floor, Toronto, ON M5H 2S6, Canada</p></div>
                       </div>
                       <div className="flex items-start justify-center gap-4 relative grid-cols-1 rounded-lg">
                        <div className="flex items-center justify-center"><img src={boston} alt="boston" className="rounded-lg"/></div>
                        <div className="flex items-center justify-center absolute top-0 gap-2 flex-col"><h1 className="w-[75%] text-center  mt-2 whitespace-nowrap text-black text-sm">Boston</h1><p className="w-[85%] text-black text-center text-xs">800 Boylston Street, 16th Floor, Boston, MA 02199, United States</p></div>
                       </div>
                       <div className="flex items-start justify-center gap-4 relative grid-cols-1 rounded-lg">
                        <div className="flex items-center justify-center"><img src={chicago} alt="boston" className="rounded-lg"/></div>
                        <div className="flex items-center justify-center absolute top-0 gap-2 flex-col"><h1 className="w-[75%] text-center  mt-2 whitespace-nowrap text-black text-sm">Chicago</h1><p className="w-[85%] text-black text-center text-xs">Two Prudential Plaza, 180 N. Stetson Street, Suite 3500, Chicago, 60601, USA</p></div>
                       </div>
                       <div className="flex items-start justify-center gap-4 relative grid-cols-1 rounded-lg">
                        <div className="flex items-center justify-center"><img src={sanfransisco} alt="boston" className="rounded-lg"/></div>
                        <div className="flex items-center justify-center absolute top-0 gap-2 flex-col"><h1 className="w-[75%] text-center  mt-2 whitespace-nowrap text-black text-sm">San Francisco</h1><p className="w-[85%] text-black text-center text-xs">388 Market St, San Francisco, CA 94111, USA</p></div>
                       </div>
                       <div className="flex items-start justify-center gap-4 relative grid-cols-1 rounded-lg">
                        <div className="flex items-center justify-center"><img src={waterloo} alt="boston" className="rounded-lg"/></div>
                        <div className="flex items-center justify-center absolute top-0 gap-2 flex-col"><h1 className="w-[75%] text-center  mt-2 whitespace-nowrap text-black text-sm">Waterloo</h1><p className="w-[85%] text-black text-center text-xs">180 Northfield Dr W #4, Waterloo, ON N2L 0C7, Canada</p></div>
                       </div>
                       
                  </div>
          </div>
          </div>
        </section>
  )
}
