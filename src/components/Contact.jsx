import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: 20,
    message: "",
    sum: "",
  });
  const { name, email, phone, budget, message, sum } = formData;
  function onChange(e) {
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
                <h2 className="text-center text-xl font-semibold">
                  Get in Touch with us!
                </h2>
              </div>
              <div className="flex items-center justify-center p-2 w-[90%] sm:w-[75%]">
                <p className="text-center text-base font-normal">
                  Let Us Become Your Partner In Developing A Memorable Digital
                  Experience!
                </p>
              </div>
            </div>
            <div className="flex md:w-1/2 w-full justify-center items-start flex-col my-2 p-2">
              <form className="w-full h-full flex-col flex items-start justify-center gap-4 sm:gap-6 md:gap-8 p-2">
                <div className="w-full h-full flex-col flex items-start justify-center">
                  <label className="text-white w-full" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={onChange}
                    value={name}
                    className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"
                  ></input>
                </div>
                <div className="w-full h-full flex-col flex items-start justify-center">
                  <label className="text-white w-full" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={onChange}
                    value={email}
                    className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"
                  ></input>
                </div>
                <div className="w-full h-full flex-col flex items-start justify-center">
                  <label className="text-white w-full" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    onChange={onChange}
                    value={phone}
                    className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"
                  ></input>
                </div>
                <div className="w-full h-full flex-col flex items-start justify-center">
                  <label className="text-white w-full" htmlFor="budget">
                    ${budget}
                  </label>
                  <input
                    type="range"
                    id="budget"
                    min="20"
                    max="900"
                    step="1"
                    onChange={onChange}
                    value={budget}
                    className="accent-gray-50 p-1 w-full outline-none text-white"
                  ></input>
                  <div className="flex items-center justify-between flex-row p-1 w-full">
                    <div>
                      <p className="text-white text-sm">$20K</p>
                    </div>
                    <div>
                      <p className="text-white text-sm">$900K</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex-col flex items-start justify-center">
                  <label className="text-white w-full" htmlFor="message">
                    Project Description (Optional)
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    rows={5}
                    cols={10}
                    onChange={onChange}
                    value={message}
                    className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"
                  ></textarea>
                </div>
                <div className="w-full h-full flex-col flex items-start justify-center">
                  <label className="text-white w-full" htmlFor="sum">
                    The Sum Of 1+5
                  </label>
                  <input
                    type="number"
                    id="sum"
                    onChange={onChange}
                    value={sum}
                    className="bg-transparent border-b-2 border-white p-1 w-full outline-none text-white"
                  ></input>
                </div>
                <Button
                  title={"Send Message"}
                  divClass={"bg-white mt-4"}
                  pClass={"!text-[#4AB96A] text-xs"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
