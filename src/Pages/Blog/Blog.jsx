import React from 'react'

export default function Blog() {
  return (
    <section className="w-screen h-screen">
      <div className="flex items-center justify-center p-6 mt-20 w-full">
             <div className="flex items-center justify-center flex-col md:flex-row gap-2 p-2 w-full">
                 <div className="flex items-center justify-center gap-3 p-2 md:w-[75%] flex-col">
                          <div className="flex items-center justify-start gap-3 w-full">
                                <div className="flex items-center justify-center gap-3 bg-ai bg-no-repeat bg-center bg-contain my-8">
                                      <div className="flex items-center justify-center p-4 rounded-lg bg-black/70 opacity-90 m-24"><p className="text-white w-[65%] text-center">What Is ChatGPT & How Does It Work? Is There Any Practical Use Of ChatGPT?</p></div>
                                </div>
                          </div>
                          <div className="flex items-start flex-col justify-center gap-4 p-2 w-full">
                            <div className="flex items-center justify-center p-4"><p className="text-gray-800 text-start">RECENT BLOG</p></div>
                          <div className="items-center justify-center gap-3 p-2 grid  sm:grid-cols-2 grid-cols-1">

                          </div>
                          </div>
                 </div>
                 <div className="flex items-center justify-center gap-3 p-2 md:w-[25%]">

                 </div>
             </div>
      </div>
    </section>
  )
}
