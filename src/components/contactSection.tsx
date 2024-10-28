"use client";

import React from "react";

const ContactUsSection: React.FC = () => {
  return (
    <section id="contact" className="w-full h-screen bg-white px-4 md:px-10 lg:px-16 py-10">
      <div className="container mx-auto flex flex-row items-center h-full gap-0 ">
        <img src="/2.jpg" alt="Contact Us" className="w-1/2 h-auto relative -left-48" />
        <div className="flex flex-col items-center justify-center gap-10 lg:w-4/5 text-center md:w-3/5 ">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-10">
              <span className="text-primary font-extrabold"> Contact Us </span>
              Today To See What We Can Help With.
            </h2>
            <h3 className="text-lg font-semibold text-gray-800">Better Yet, See Us In Person</h3>
            <p className="text-gray-600">We love our customers, so feel free to visit during normal business hours.</p>
          </div>

          <button className="bg-tertiary hover:bg-white hover:text-tertiary border-2 border-tertiary text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
