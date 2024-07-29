import React, { ReactNode } from 'react';
import { styles } from '../../styles/style'

interface HeroSectionProps {
  children?: ReactNode; // Defining children as an optional ReactNode type
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (


    // <div className="bg-white container mx-auto py-8 max-h-96 px-20">
    //     {children}

    // // </div>

    <section id="home" className={`flex md:grid md:grid-cols-14 flex-col md:h-screen ${styles.paddingY}`} >
      <div className="md:col-span-7 bg-red-500">Column 1-7</div>
      <div className="md:col-span-7 bg-blue-500">Column 8-14</div>
      <div className={`md:col-start-1 md:col-end-3 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className = {`flex flex-col justify-between items-center`}>
          <h1 className="flex-1 justify-center font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] max-w-2xl text-balance">
            {/* You */}
            Your Specialised NDIS Service Provider, One Call Away
          </h1>
          {/* <h1 className="flex-1 justify-center font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] max-w-xl">
            
          </h1> */}
          {/* <h1 className="flex-1 justify-center font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px] max-w-xl">
            
          </h1> */}


        </div>

        <h2 className={` max-w-xl mt-5 text-xl`}>
          Contact us for disability daily support, respite and SIL
        </h2>


      </div>
      <div className={`flex-1 ${styles.flexCenter} flex-col`}>
        <img
          src="/sample.jpg"
          alt="Example"
          className="w-full h-auto rounded-lg shadow-lg"
        />

      </div>

    </section>





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


