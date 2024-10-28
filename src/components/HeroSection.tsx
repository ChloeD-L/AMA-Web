import React, { ReactNode } from "react";

interface HeroSectionProps {
  children?: ReactNode; // Defining children as an optional ReactNode type
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section id="home" className="w-full h-screen flex px-16 py-16 overflow-hidden">
      <div className="container mx-auto flex items-center h-full gap-0">
        {/* 左侧灰色半透明背景 (65%) */}
        <div className="w-2/3 relative bg-gray-300 bg-opacity-80">
          {/* 背景图片 */}
          <img
            src="/images/left-background-image.jpg"
            alt="Left Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* 内容容器 */}
          <div className="relative z-10 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6 leading-tight">
              Compassion in Care <br />
              <span className="text-blue-500">Excellence in Support</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">Contact us for disability daily support, respite, and SIL</p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">Our Service</button>
          </div>
        </div>

        {/* 右侧紫色背景 (35%) */}
        <div className="w-1/3 relative bg-purple-600">
          {/* 中间的不规则图形和图片 */}
          <div className="absolute top-0 left-[-10%] w-full h-full flex items-center justify-center">
            <div className="relative">
              {/* 不规则形状 */}
              <img src="/images/irregular-bg.svg" alt="Irregular Shape" className="w-full h-auto" />
              {/* 叠加在不规则形状上的图片 */}
              <img src="/images/hero-image.svg" alt="Hero Image" className="absolute top-0 left-0 w-3/4 h-auto z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* 下方的三个小方块 */}
      <div className="relative mt-10 flex justify-center space-x-6 mx-auto w-full max-w-5xl">
        {/* Block 1 */}
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

        {/* Block 2 */}
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

        {/* Block 3 */}
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
      </div>
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
