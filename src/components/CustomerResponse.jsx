import React from 'react'

export default function CustomerResponse({img}) {
  return (
    <section className="w-screen h-full relative">
          <div className="flex items-center justify-center w-full h-full flex-col p-2 sm:p-4 md:p-6">
            <div><h1 className="text-gray-800 text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem]">Customer<span className="text-[#8873ef]"> Reviews</span></h1></div>
            <div className="hidden md:flex items-center justify-center w-full h-full max-w-6xl gap-4 my-8 p-4">
               <div className="flex items-start justify-center border flex-col gap-6 p-4 w-1/2 bg-white rounded-lg">
                 <h1 className="text-xl font-medium text-gray-800 mt-4">Excellent Work</h1>
                 <p className="text-base font-normal text-gray-600">I got my mobile application developed and I feel the team is perfect in delivering the expected end product. I was happy with the liveliness and services they provided for our company. Great User Experience. Good Job Guys!!</p>
                <div className="flex items-center justify-center gap-3">
                    <img src="https://i.ibb.co/0nZ6Z3y/Rectangle-1.png" alt="Rectangle-1" border="0" className="w-10 h-10 rounded-full"/>
                    <h2>John Ward</h2>
                </div>
               </div>
               <div className="flex items-center justify-center h-full flex-col w-1/2 gap-4">
               <div className="flex items-start justify-center border flex-col p-4 gap-4 bg-white rounded-lg">
               <h1 className="text-xl font-medium text-gray-800 mt-4">Excellent Work</h1>
                 <p className="text-base font-normal text-gray-600">I got my mobile application developed and I feel the team is perfect in delivering the expected end product. I was happy with the liveliness and services they provided for our company. Great User Experience. Good Job Guys!!</p>
                <div className="flex items-center justify-center gap-3">
                    <img src="https://i.ibb.co/0nZ6Z3y/Rectangle-1.png" alt="Rectangle-1" border="0" className="w-10 h-10 rounded-full"/>
                    <h2>John Ward</h2>
                </div>
               </div>
               <div className="flex items-start justify-center border flex-col p-4 gap-4 bg-white rounded-lg">
               <h1 className="text-xl font-medium text-gray-800 mt-4">Excellent Work</h1>
                 <p className="text-base font-normal text-gray-600">I got my mobile application developed and I feel the team is perfect in delivering the expected end product. I was happy with the liveliness and services they provided for our company. Great User Experience. Good Job Guys!!</p>
                <div className="flex items-center justify-center gap-3">
                    <img src="https://i.ibb.co/0nZ6Z3y/Rectangle-1.png" alt="Rectangle-1" border="0" className="w-10 h-10 rounded-full"/>
                    <h2>John Ward</h2>
                </div>
               </div>
               </div>
            </div>
            <div className="md:hidden flex items-center justify-center w-full h-full flex-col max-w-6xl gap-4 my-8 p-4">
            <div className="flex items-start justify-center border flex-col p-4 gap-4 bg-white rounded-lg">
               <h1 className="text-xl font-medium text-gray-800 mt-4">Excellent Work</h1>
                 <p className="text-base font-normal text-gray-600">I got my mobile application developed and I feel the team is perfect in delivering the expected end product. I was happy with the liveliness and services they provided for our company. Great User Experience. Good Job Guys!!</p>
                <div className="flex items-center justify-center gap-3">
                    <img src="https://i.ibb.co/0nZ6Z3y/Rectangle-1.png" alt="Rectangle-1" border="0" className="w-10 h-10 rounded-full"/>
                    <h2>John Ward</h2>
                </div>
               </div>
               <div className="flex items-start justify-center border flex-col p-4 gap-4 bg-white rounded-lg">
               <h1 className="text-xl font-medium text-gray-800 mt-4">Excellent Work</h1>
                 <p className="text-base font-normal text-gray-600">I got my mobile application developed and I feel the team is perfect in delivering the expected end product. I was happy with the liveliness and services they provided for our company. Great User Experience. Good Job Guys!!</p>
                <div className="flex items-center justify-center gap-3">
                    <img src="https://i.ibb.co/0nZ6Z3y/Rectangle-1.png" alt="Rectangle-1" border="0" className="w-10 h-10 rounded-full"/>
                    <h2>John Ward</h2>
                </div>
               </div>
               <div className="flex items-start justify-center border flex-col p-4 gap-4 bg-white rounded-lg">
               <h1 className="text-xl font-medium text-gray-800 mt-4">Excellent Work</h1>
                 <p className="text-base font-normal text-gray-600">I got my mobile application developed and I feel the team is perfect in delivering the expected end product. I was happy with the liveliness and services they provided for our company. Great User Experience. Good Job Guys!!</p>
                <div className="flex items-center justify-center gap-3 p-1">
                    <img src="https://i.ibb.co/0nZ6Z3y/Rectangle-1.png" alt="Rectangle-1" border="0" className="w-10 h-10 rounded-full"/>
                    <h2>John Ward</h2>
                </div>
               </div>
            </div>
          </div>
          <div className="flex items-center justify-center absolute gap-2 p-2 top-6 right-0 left-0 bottom-0 z-[-1] w-screen h-full">
            <div className="w-screen flex items-center justify-center p-2">
              <img
                src={img}
                alt="background"
                className="top-0 right-0 left-0 bottom-0 sm:rotate-90  w-[75%] sm:h-full md:w-[50%] xl:w-[44%] 2xl:w-[36%]"
              />
            </div>
          </div>
        </section>
  )
}
