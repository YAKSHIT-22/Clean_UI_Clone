
export default function HeroPage({headFirst="", headSecond="", headThird="",subtitle="", img=null,button1=null, button2=null}) {
  return (
    <section className="w-screen h-full md:h-screen">
        <div className="flex items-center justify-center  w-screen h-full sm:p-6">
          <div className="flex items-center justify-center w-full h-full mt-20 sm:mt-20 sm:p-4  md:mt-6">
            <div className="flex items-center flex-col md:flex-row justify-center gap-4 p-4 sm:p-2 lg:p-4 h-full w-full lg:w-[95%] xl:w-[85%]">
            <div className="flex items-start justify-center gap-4 sm:w-[80%] md:w-1/2 flex-col xs:p-4 md:p-3">
             <div className="flex items-center justify-center gap-4 h-full">
             <h1 className="text-3xl lg:text-4xl xl:text-[3rem] font-bold xl:leading-[3.6rem]">{headFirst}<span className="text-[#8873ef]"> {headSecond}</span> {headThird}</h1>
             </div>
             <div className="flex items-center justify-center gap-4 w-full sm:w-[80%] md:w-[90%]">
              <p className="font-semibold text-[#828FAD] leading-normal md:leading-[1.5rem] text-xs sm:text-sm md:text-base">{subtitle}</p>
             </div>
             <div className="flex items-center justify-center gap-2 w-full xl:w-[75%] h-full">
              {button1}
              {button2}
            </div>
            </div>       
          <div className="flex items-center justify-center  w-3/4 md:w-1/2 p-4">
            <img src={img} alt="hero" className="h-[60%] sm:h-[70%] lg:h-[90%] md:h-[80%]" />
          </div>
          </div>
          </div>
        </div>
      </section>
  )
}
