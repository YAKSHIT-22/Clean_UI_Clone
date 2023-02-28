import React from "react";
import appdev from "../assets/BlogPage/app-dev.jpg";
import clock from "../assets/BlogPage/clock.png";

export default function Blog() {
  const leftListing = [
    {
      img: appdev,
      category: "App Development",
      time: "5 min",
      title: "Top 10 Mobile App Development Companies In Canada-2023",
      description:
        "Mobile app development is one of the hottest sectors in Canada: Almost everyone under the age of 45 is now using mobile internet Read More",
    },
    {
      img: appdev,
      category: "App Development",
      time: "5 min",
      title: "Top 10 Mobile App Development Companies In Canada-2023",
      description:
        "Mobile app development is one of the hottest sectors in Canada: Almost everyone under the age of 45 is now using mobile internet Read More",
    },
    {
      img: appdev,
      category: "App Development",
      time: "5 min",
      title: "Top 10 Mobile App Development Companies In Canada-2023",
      description:
        "Mobile app development is one of the hottest sectors in Canada: Almost everyone under the age of 45 is now using mobile internet Read More",
    },
    {
      img: appdev,
      category: "App Development",
      time: "5 min",
      title: "Top 10 Mobile App Development Companies In Canada-2023",
      description:
        "Mobile app development is one of the hottest sectors in Canada: Almost everyone under the age of 45 is now using mobile internet Read More",
    },

  ];

  const rightListing = [
    {
      bg: "bg-ios",
      title: "iOs App Development",
    },
    {
      bg: "bg-ios",
      title: "iOs App Development",
    },
    {
      bg: "bg-ios",
      title: "iOs App Development",
    },
    {
      bg: "bg-ios",
      title: "iOs App Development",
    },

  ];
  return (
    <main>
      <section className="w-screen h-full">
        <div className="flex items-center justify-center h-full w-full">
          <div className="flex items-start justify-start flex-col lg:flex-row gap-2 p-2 w-full md:p-4 lg:p-6 md:pt-6 mt-20 lg:max-w-6xl">
            <div className="flex items-center justify-center gap-3 p-2 w-full lg:w-[75%] flex-col">
              <div className="md:flex hidden items-center justify-start gap-4 w-full p-2">
                <div className="sm:flex hidden items-center justify-center transition-all p-2 rounded-xl bg-[#8878ef]">
                  <p className="text-white p-1 text-sm lg:text-base">Blog</p>
                </div>
                <div className="sm:flex hidden items-center justify-center transition-all p-2 rounded-xl bg-[#8878ef]">
                  <p className="text-white p-1 text-sm lg:text-base">All</p>
                </div>
                <div className="sm:flex hidden items-center justify-center transition-all p-2 rounded-xl bg-[#ebecf1] hover:bg-[#8878ef] hover:font-semibold hover:text-white text-black">
                  <p className="p-1 text-sm lg:text-base">
                    Android Development
                  </p>
                </div>
                <div className="md:flex items-center justify-center transition-all p-2 rounded-xl bg-[#ebecf1] hover:bg-[#8878ef] hover:font-semibold hover:text-white text-black hidden">
                  <p className="p-1 text-sm lg:text-base">API Development</p>
                </div>
                <div className="md:flex items-center justify-center transition-all p-2 rounded-xl bg-[#ebecf1] hover:bg-[#8878ef] hover:font-semibold hover:text-white text-black hidden">
                  <p className="p-1 text-sm lg:text-base">App Development</p>
                </div>
              </div>
              <div className="flex items-center justify-start sm:justify-center md:justify-start gap-3 p-2 w-full h-full">
                <div className="flex items-center justify-center gap-3 bg-ai bg-no-repeat bg-center bg-cover rounded-md p-4  h-[20rem]">
                  <div className="flex items-center justify-center p-4 rounded-xl bg-black/70 opacity-80 ">
                    <p className="text-white w-[50%] text-center font-semibold text-xs sm:text-sm md:text-base">
                      What Is ChatGPT & How Does It Work? Is There Any Practical
                      Use Of ChatGPT?
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col justify-center gap-4 p-2 w-full">
                <div className="flex items-center justify-center p-4">
                  <p className="text-gray-800 text-start font-semibold">
                    RECENT BLOG
                  </p>
                </div>
                <div className="items-center justify-center gap-3 p-2 grid  sm:grid-cols-2 grid-cols-1">
                  {leftListing.map((item, index) => (
                    <div
                      key={index}
                      className="grid-cols-1 flex items-start flex-col justify-center gap-2 border rounded-xl"
                    >
                      <div className="flex items-center justify-center w-full h-full rounded-t-xl">
                        <img
                          src={item.img}
                          alt={item.img}
                          className="rounded-t-xl"
                        />
                      </div>
                      <div className="p-2 flex items-start justify-center gap-3 flex-col">
                        <div className="flex items-center justify-center bg-[#ff0137] rounded-xl">
                          <p className="text-white text-xs border-2 border-white p-2 rounded-xl">
                            {item.category}
                          </p>
                        </div>
                        <div className="flex items-center justify-center bg-white shadow-md border border-gray-600 rounded-2xl flex-row p-1 gap-1">
                          <img src={clock} alt="clock" />
                          <p className="text-gray-800 text-xs rounded-xl">
                            {item.time}
                          </p>
                        </div>
                        <div className="flex items-center justify-start">
                          <h1 className="text-gray-800 text-lg font-semibold">
                            {item.title}
                          </h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-500 text-sm font-medium">
                            {item.description}
                            <span className="text-[#7589ff]">
                              {" "}
                              Read More
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-1 items-center justify-center gap-3 p-4 w-full lg:w-[25%]">
              {rightListing.map((item, index) => (
                <div
                  key={index}
                  className={
                    `flex items-center h-[20rem] grid-cols-1 rounded-lg  w-full justify-center gap-2 p-4  flex-col bg-no-repeat bg-center bg-cover ` +
                    item.bg
                  }
                >
                  <div className="flex items-end justify-center p-4  flex-1 rounded-xl bg-black/70 opacity-80">
                    <p className="text-white text-center font-semibold">
                      {item.title}
                    </p>
                  </div>
                  <button className="p-4 bg-blue-700 text-white flex items-center w-[80%] rounded-lg justify-center">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
