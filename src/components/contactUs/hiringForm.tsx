import React from "react";
import { TriangleImage } from "../geometric";

const HiringForm = () => {
  return (
    <section className="items-start min-h-screen py-10">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-center mb-16">
          We’re Hiring Disability Support Workers And Home Care Package Cares Across
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10 h-full">
          {/* Left Section - Join Our Team Text */}
          <div className="text-center flex-center md:w-1/3 px-4 ">
            <h2 className="text-lg font-bold mt-40">JOIN OUR TEAM</h2>
            <p className="text-gray-600 mt-2 mx-10 leading-6">
              If you're interested in one of our open positions, start by applying here and attaching your resume.
            </p>

            <div className="relative h-60 mt-5 md:mt-20 flex justify-center items-center gap-10">
              <div
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "15%",
                  width: "40px",
                  height: "40px",
                  border: "3px solid #E34895",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  margin: "30px auto",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "35%",
                  width: "40px",
                  height: "40px",
                  border: "3px solid #4caf50",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  transform: "rotate(15deg)",
                }}
              ></div>
              <TriangleImage top="10%" left="0%" width="50px" height="50px" />
              {/* <Square top="30%" left="0" />
          <Circle top="0" left="0" /> */}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white border-2 border-tertiary rounded-lg shadow-lg p-6 md:w-2/3 w-full pt-10 pb-24">
            <form className="flex flex-col justify-center items-center space-y-6">
              <div className="w-full">
                <label htmlFor="name" className="block text-gray-700 text-sm mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
                />
              </div>

              <div className="w-full">
                <label htmlFor="email" className="block text-gray-700 text-sm mb-1">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
                />
              </div>

              <div className="w-full">
                <label htmlFor="phone" className="block text-gray-700 text-sm mb-1">
                  Your Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
                />
              </div>

              <div className="w-full">
                <label htmlFor="message" className="block text-gray-700 text-sm mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Text here"
                  rows={10}
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 w-full"
                ></textarea>
              </div>

              <label className="font-medium text-gray-800 items-left w-full">
                Attach Resume
                <input
                  type="file"
                  className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                />
              </label>

              {/* <div className="" */}

              <button
                type="submit"
                className="w-32 h-10 bg-tertiary text-white font-bold rounded-full py-2 hover:bg-white hover:text-tertiary border-2 border-tertiary transition-colors text-center"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringForm;
