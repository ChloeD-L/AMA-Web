import React from "react";
import { Circle, Square, TriangleImage } from "./geometric";
// import Triangle from "./triangle/Triangle";

export const AboutUsSection: React.FC = () => {
  const teamInfo = [
    {
      title: "Our Staff",
      content:
        "We have an amazing team to support people of different age and cultural backgrounds. We have bilingual workers available in Mandarin, Cantonese, Hindi, Vietnamese, and more.",
    },
    {
      title: "Our History",
      content:
        "We started from a small, caring team and are now fast growing to cover Melbourne Metropolitan area. We aim to provide high quality disability support services.",
    },
    {
      title: "Our Mission",
      content:
        "To provide specialised support with highly qualified workers. Making your and your family's life easier is our ultimate goal.",
    },
  ];

  return (
    <section id="about" className="h-screen bg-white pt-12 lg:pt-36 px-10 min-h-screen relative w-full">
      {/* <div className="triangle"></div> */}
      {/* <TriangleImage top="48%" left="10%" width="50px" height="50px" /> */}
      <Square top="4%" left="80%" />
      <Circle top="8%" left="85%" />

      {/* <Square top="60%" left="10%" />
      <Circle top="55%" left="15%" /> */}

      {/* <Circle top="50%" left="75%" /> */}
      {/* <HollowTriangles /> */}
      <h2 className="text-4xl font-bold text-center text-black pb-24">About Us</h2>
      <div className="container mx-auto flex flex-col md:flex-row lg:gap-16 justify-center gap-10">
        {teamInfo.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-tertiary rounded-lg shadow-lg w-full md:w-1/4"
          >
            <h3 className="mt-6 text-xl font-bold mb-4">{info.title}</h3>
            <div className="flex-grow flex items-center pb-10">
              <p className="text-gray-700 text-base ">{info.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative h-60 mt-5 md:mt-20 flex justify-center items-center gap-10">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "15%",
            width: "40px",
            height: "40px",
            border: "3px solid #feb20f",
            borderRadius: "50%",
            backgroundColor: "white",
            margin: "30px auto",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "40px",
            height: "40px",
            border: "3px solid #4caf50",
            backgroundColor: "white",
            borderRadius: "8px",
            transform: "rotate(15deg)",
          }}
        ></div>
        <TriangleImage top="15%" left="10%" width="50px" height="50px" />
        {/* <Square top="30%" left="0" />
          <Circle top="0" left="0" /> */}
      </div>
    </section>
  );
};
