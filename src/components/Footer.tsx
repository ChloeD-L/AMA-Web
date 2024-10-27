"use CLient";

import React from "react";
// import "../../../public/globals.css";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black w-screen py-10 text-sm md:text-base shadow-footer-custom">
      <div className="container mx-auto flex flex-row sm:items-start iterms-center justify-between lg:px-16 md:gap-0 px-4 md:px-10">
        {/* <img src="/logo.svg" alt="logo" className="hidden w-24 cursor-pointer" />
        <h3 className="text-center text-primary h3 hidden">Why AMA?</h3> */}

        <div className="hidden md:flex items-center lg:gap-32 sm:gap-24">
          <img src="/logo.svg" alt="logo" className="w-24 cursor-pointer" />
          <h3 className="text-primary h3 text-left md:text-xl text-lg">Why AMA?</h3>
        </div>

        <div className="flex flex-col items-center justify-between space-y-10 md:hidden">
          <img src="/logo.svg" alt="logo" className="w-24 cursor-pointer" />
          <h3 className="text-primary h3 text-center text-xl">Why AMA?</h3>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-center text-primary h3 md:text-xl text-lg">Our Program</h3>
          <p className="text-center text-black footer">NDIS Daily living support</p>
          <p className="text-center text-black footer">NDIS Community Access Support</p>
          <p className="text-center text-black footer">Supported Living and respite</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-center text-primary md:text-xl text-lg">Contact Us</h3>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-black footer">Tel: 0482 026 239</p>
            <p className="text-center text-black footer">info@accessmateau.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-black footer">Melbourne, Victoria</p>
            <p className="text-center text-black footer">AUstralia</p>
          </div>
        </div>
        {/* <p className="text-center">Access Mate Australia</p>
        <p className="text-center">Your Specialised NDIS Service Provider, One Call Away</p>
        <p className="text-center">Contact us for disability daily support, respite and SIL</p> */}
      </div>
      {/* <p>&copy; 2021 Access Mate Australia</p> */}
    </footer>
  );
};
