import React from "react";
import heart from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import appstore from "../../assets/Portfolpage/appstore.svg";
import gpay from "../../assets/Portfolpage/gpay.svg";
import star from "../../assets/Portfolpage/star.svg";
export default function Portfolio() {
  return (
    <>
      <main>
        <section className="w-screen h-full">
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex items-center justify-center w-full flex-col gap-4 p-2 mt-20 sm:p-4">
              <div className="flex items-center justify-start w-full my-6 p-4">
                <h1 className="text-4xl font-bold">Portfolio</h1>
                <div className="flex items-center justify-center gap-2 p-2">
                  <img src={heart} alt="heart" />
                </div>
              </div>
              <div className="flex items-center w-full h-full justify-center flex-row gap-4">
                <div className="flex flex-col items-start p-6 justify-start gap-4 w-[90%] py-12 md:py-6 md:w-[75%] md:bg-mediummind bg-smallmind bg-no-repeat h-full md:h-[80vh] bg-center bg-cover">
                  <div className="flex items-center justify-start">
                    <h1 className="text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem] text-white">
                      Mindset
                    </h1>
                  </div>
                  <div className="flex items-center justify-center w-full sm:w-[50%]">
                    <p className="font-medium text-[#a0a1a3] leading-normal md:leading-[1.5rem] text-xs sm:text-base">
                      Mindset is the go-to destination for resorting to the
                      world’s best motivational, inspirational, and educational
                      audio. This stirring app rivets the users by channeling
                      motivation, self-growth, and wisdom with the most
                      exclusive compilations of speeches, autobiographies, and
                      music available for free.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="flex items-center justify-start gap-2 flex-row w-full text-white"
                  >
                    <p>View Case Studies</p>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.9375 3.91668L16.4375 9.41668C16.5208 9.50001 16.58 9.59029 16.615 9.68751C16.6494 9.78474 16.6666 9.8889 16.6666 10C16.6666 10.1111 16.6494 10.2153 16.615 10.3125C16.58 10.4097 16.5208 10.5 16.4375 10.5833L10.9375 16.0833C10.7847 16.2361 10.5938 16.3161 10.365 16.3233C10.1355 16.33 9.93746 16.25 9.77079 16.0833C9.60413 15.9306 9.51718 15.7397 9.50996 15.5108C9.50329 15.2814 9.58329 15.0833 9.74996 14.9167L13.8333 10.8333H4.52079C4.28468 10.8333 4.08663 10.7536 3.92663 10.5942C3.76718 10.4342 3.68746 10.2361 3.68746 10C3.68746 9.7639 3.76718 9.56612 3.92663 9.40668C4.08663 9.24668 4.28468 9.16668 4.52079 9.16668H13.8333L9.74996 5.08335C9.59718 4.93057 9.51718 4.73612 9.50996 4.50001C9.50329 4.2639 9.58329 4.06946 9.74996 3.91668C9.90274 3.75001 10.0972 3.66668 10.3333 3.66668C10.5694 3.66668 10.7708 3.75001 10.9375 3.91668Z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </Link>

                  <div className="flex items-start flex-col justify-end gap-2 flex-1">
                     <div className="flex items-center justify-center ">
                        <h1 className="text-white text-sm font-bold">Download Now:</h1>
                     </div>
                     <div className="flex items-center justify-start flex-row gap-4">
                        <div className="flex items-center justify-center bg-white rounded-md">
                            <Link to="/" className="flex items-center justify-center gap-2 flex-row w-full text-black">
                                <img src={appstore} alt="appstore" />
                                </Link>
                            </div>
                        <div className="flex items-center justify-center bg-white rounded-md">
                            <Link to="/" className="flex items-center justify-center gap-2 flex-row w-full text-black">
                                <img src={gpay} alt="gpay" />
                                </Link>
                            </div>
                     </div>
                  </div>
                </div>
                <div className="hidden md:flex flex-col items-center p-2 justify-center gap-4 w-[25%] md:bg-lgmind bg-no-repeat bg-cover h-[80vh] bg-center">
                     <div className="flex-1 items-start justify-start gap-2 p-2 flex">
                         <div className="flex items-center justify-center gap-4 flex-col">
                           <div className="flex items-center justify-center gap-2 "><h1 className="text-2xl xl:text-4xl font-bold xl:leading-[3.6rem] text-[#FF9F0A]">4.9</h1>
                          <div className="flex items-center justify-center gap-1"> <img src={star} alt="star" />
                           <img src={star} alt="star" />
                           <img src={star} alt="star" />
                           <img src={star} alt="star" />
                           <img src={star} alt="star" /></div>
                           </div>
                           <p className="text-white text-sm font-medium">App Store Ratings</p>
                           <div className="flex items-center justify-center gap-2 flex-col w-full">
                            <h1 className="text-4xl font-bold xl:leading-[3.6rem] text-[#FF9F0A]">500K+</h1>
                            <p className="text-white text-sm font-medium">Downloads</p>
                           </div>
                         </div>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen h-full">
            <div className="flex items-center justify-center w-full flex-col gap-4 p-2 sm:p-4">
        <div className="flex items-center w-full h-full justify-center flex-row gap-4">
                
                <div className="hidden md:flex flex-col items-center p-2 justify-center gap-4 w-[25%] md:bg-lgriyadh bg-no-repeat bg-cover h-[80vh] bg-center">
                     <div className="flex-1 items-start justify-start gap-2 p-2 flex">
                         <div className="flex items-center justify-center gap-4 flex-col">
                           <div className="flex items-center justify-center gap-2 "><h1 className="text-2xl xl:text-4xl font-bold xl:leading-[3.6rem] text-white">5M+</h1>
                           <p className="text-white text-sm font-medium">Downloads</p>
                           </div>
                          
                           <div className="flex items-center justify-center gap-2 flex-col w-full">
                            <h1 className="text-4xl font-bold xl:leading-[3.6rem] text-[#FF9F0A]">1M+</h1>
                            <p className="text-white text-sm font-medium">Active Users</p>
                           </div>
                         </div>
                     </div>
                </div>
                <div className="flex flex-col items-start p-6 justify-start gap-4 w-[90%] py-12 md:py-6 md:w-[75%] md:bg-mediumriyadh bg-smallriyadh bg-no-repeat h-full md:h-[80vh] bg-center bg-cover">
                  <div className="flex items-start justify-start flex-row gap-2">
                  <h2 className="text-base  text-gray-400">
                    #07 | 
                  </h2>
                  <span className="text-[.5rem] text-gray-400">Rank in the AR Category<br/> on the App Store</span>  
                  </div>  
                  <div className="flex items-end justify-start flex-1">
                    <h1 className="text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem] text-white">
                    Riyadh Season
                    </h1>
                  </div>
                  <div className="flex items-start justify-center w-full sm:w-[40%] flex-1">
                    <p className="font-medium text-[#a0a1a3] leading-normal md:leading-[1.5rem] text-xs sm:text-base">
                    AppStudio designed an all-inclusive app to capture the magic of Riyadh Season, a go-to platform to explore all the exhilarating events and magical zones.
                    </p>
                  </div>
                  
                  <div className="flex items-start flex-col justify-end gap-2 flex-1">
                     <div className="flex items-center justify-center ">
                        <h1 className="text-white text-sm font-bold">Download Now:</h1>
                     </div>
                     <div className="flex items-center justify-start flex-row gap-4">
                        <div className="flex items-center justify-center bg-white rounded-md">
                            <Link to="/" className="flex items-center justify-center gap-2 flex-row w-full text-black">
                                <img src={appstore} alt="appstore" />
                                </Link>
                            </div>
                        <div className="flex items-center justify-center bg-white rounded-md">
                            <Link to="/" className="flex items-center justify-center gap-2 flex-row w-full text-black">
                                <img src={gpay} alt="gpay" />
                                </Link>
                            </div>
                     </div>
                  </div>
                </div>
              </div>
              </div>
        </section>
        <section>
            
        </section>
      </main>
    </>
  );
}
