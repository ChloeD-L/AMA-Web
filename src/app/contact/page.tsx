// app/about/page.tsx
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import HiringForm from "@/components/contactUs/hiringForm";
import { QuerySection } from "@/components/contactUs/querySection";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full snap-y">
      <Header />
      <QuerySection />

      {/* //{" "}
      <div className="container mx-auto p-4">
        // <h1 className="text-3xl font-bold">About Us</h1>
        // <p className="mt-4 text-lg">Welcome to our website! We are dedicated to providing the best services.</p>
        //{" "}
      </div> */}
      <HiringForm />
      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
};

export default ContactPage;
