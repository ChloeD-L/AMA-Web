import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode; // Defining children as an optional ReactNode type
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section id="home" className="w-full h-screen flex flex-col overflow-hidden ">
      <div className="flex flex-col items-center w-full h-3/4 gap-0">
        {/* 左侧灰色半透明背景 (65%) */}
        <div className="flex flex-row w-full h-full text-left">
          <div className="w-2/3 relative flex items-center pl-4 md:pl-10 lg:pl-16 md:pb-20 pb-8">
            {/* Background Image */}
            <img
              src="/people.png"
              alt="Left Background"
              className="absolute inset-0 max-w-[80%] pt-40 object-contain z-0"
            />
            {/* Gray Overlay */}
            <div className="absolute inset-0 bg-[#EDEDE6] bg-opacity-85 z-10"></div>
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
          <div className="w-1/3 relative bg-[#722E7B]">
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

      {/* 下方的三个小方块 */}
      {/* <div className="relative mt-10 flex justify-center space-x-6 mx-auto w-full max-w-5xl">
        
        <div className="flex-1 bg-white relative p-6 rounded-lg shadow-lg">
          <img
            src="/images/block-1-bg.jpg"
            alt="Block 1 Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center text-gray-800">
            <h3 className="text-2xl font-bold">Title 1</h3>
            <p className="mt-4">Description for block 1</p>
          </div>
        </div>

    
        <div className="flex-1 bg-white relative p-6 rounded-lg shadow-lg">
          <img
            src="/images/block-2-bg.jpg"
            alt="Block 2 Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center text-gray-800">
            <h3 className="text-2xl font-bold">Title 2</h3>
            <p className="mt-4">Description for block 2</p>
          </div>
        </div>

        <div className="flex-1 bg-white relative p-6 rounded-lg shadow-lg">
          <img
            src="/images/block-3-bg.jpg"
            alt="Block 3 Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center text-gray-800">
            <h3 className="text-2xl font-bold">Title 3</h3>
            <p className="mt-4">Description for block 3</p>
          </div>
        </div>
      </div> */}
    </section>

    // <section id="home" className={`flex md:grid md:grid-cols-14 flex-col md:h-screen ${styles.paddingY}`} >
    //   <div className={`md:col-start-1 md:col-end-3 flex-col xl:px-0 sm:px-16 px-6`}>
    //     <div className = {`flex flex-col justify-between items-center`}>
    //       <h1 className="flex-1 justify-center font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] max-w-2xl text-balance">
    //         Your Specialised NDIS Service Provider, One Call Away
    //       </h1>

    //     </div>

    //     <h2 className={` max-w-xl mt-5 text-xl`}>
    //       Contact us for disability daily support, respite and SIL
    //     </h2>

    //   </div>
    //   <div className={`flex-1 ${styles.flexCenter} flex-col`}>
    //     <img
    //       src="/sample.jpg"
    //       alt="Example"
    //       className="w-full h-auto rounded-lg shadow-lg"
    //     />

    //   </div>

    // </section>

    // <div className="hero-section bg-white relative flex items-center justify-center text-center z-0">
    //   <div className="absolute left-10 top-10 w-48 h-48 rounded-full bg-pink-300 blur-lg"></div>
    //   <div className="absolute right-10 bottom-10 w-48 h-48 rounded-full bg-blue-300 blur-lg"></div>
    //   <div className="relative z-10">
    //     <h1 className="text-4xl font-bold text-gray-800">Your Specialised NDIS Service Provider, One Call Away</h1>
    //     <p className="mt-4 text-lg text-gray-600">Contact us for disability daily support, respite and SIL</p>
    //     <div className="mt-8 space-x-4">
    //       <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600">Contact Us</button>
    //       <button className="px-6 py-2 border border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-50">Learn More</button>
    //     </div>
    //   </div>
    //   {children}
    // </div>
  );
};

export default HeroSection;
