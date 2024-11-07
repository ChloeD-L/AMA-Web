import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode; // Defining children as an optional ReactNode type
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section id="home" className="w-full max-h-screen md:h-screen flex flex-col overflow-hidden ">
      <div className="flex flex-row md:flex-col items-center w-full h-3/4 gap-0">
        {/* 左侧灰色半透明背景 (65%) */}
        <div className="flex flex-row w-full h-full text-left">
          <div className="w-full md:w-2/3 relative flex items-center pl-10 md:pl-16 lg:pl-24 md:pb-20 pb-8">
            {/* Background Image */}
            <img
              src="/people.png"
              alt="Left Background"
              className="absolute inset-0 max-w-[60%] md:pt-72 object-contain translate-x-10 z-0"
            />
            {/* Gray Overlay */}
            <div className="absolute inset-0 bg-[#EDEDE6] bg-opacity-90 z-10"></div>
            {/* Content Container - Centered Horizontally and Vertically */}
            <div className="relative z-20 p-8 text-left xlg:w-full md:w-3/4">
              <h1 className="text-4xl mi:text-5xl xlg:text-6xl font-bold text-[#722E7B] mb-2">
                Compassion in <span className=" text-secondary "> Care</span>
              </h1>
              <h1 className="text-4xl mi:text-5xl xlg:text-6xl font-bold text-secondary mb-4">
                <span className="text-[#722E7B]"> Excellence in</span> Support
              </h1>
              <p className="text-lg text-gray-900 mb-10">Contact us for disability daily support, respite, and SIL</p>
              <div className="flex justify-left">
                <button className="bg-secondary text-white font-bold py-2 px-6 rounded-full border-4 border-secondary hover:bg-white hover:text-secondary">
                  Our Service
                </button>
              </div>
            </div>
          </div>

          {/* 右侧紫色背景 (35%) */}
          <div className="md:w-1/3 relative bg-[#722E7B]">
            {/* 中间的不规则图形和图片 */}
            <div className="absolute top-0 lg:left-[-10%] md:left-[-5%] w-[600px] h-[800px] scale-125 flex items-center justify-center z-10">
              <div className="relative left-[-200px]">
                {/* 不规则形状 */}
                <img
                  src="geo.svg"
                  alt="Irregular Shape"
                  className="w-full lg:scale-200 h-auto mi:scale-150 scale-125 z-10 "
                />
                {/* 叠加在不规则形状上的图片 */}
                <img
                  src="hero-mid.png"
                  alt="Hero Image"
                  className="absolute bottom-20 left-20 lg:left-30 w-3/4 lg:scale-300 h-auto mi:scale-200 scale-150 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1/4 relative -top-[10%] z-50">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <div className="relative flex items-center justify-center w-1/3 h-full">
            <img src="/hero-bottom-left.jpg" alt="People Image" className="absolute inset-0 w-full object-cover z-20" />
            <div className="absolute inset-0 bg-secondary bg-opacity-75 z-30 h-[200%]"></div>
          </div>
          <div className="relative flex items-center justify-center w-1/3 h-full">
            <img
              src="/hero-bottom-right.jpg"
              alt="People Image"
              className="absolute inset-0 w-full object-contain z-20"
            />
            <div className="absolute inset-0 bg-tertiary bg-opacity-75 z-30 h-[200%]"></div>
          </div>
          <div className="relative flex items-center justify-center w-1/3 h-full ">
            <img
              src="/hero-bottom-mid.jpg"
              alt="People Image"
              className="absolute inset-0 w-full object-contain z-20"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-75 z-30 h-[200%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
