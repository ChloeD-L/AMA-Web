import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { RandomCollision } from "./RamdomCollision";
import BouncingBalls from "./BouncingBalls";
import BouncingBallsSecond from "./BouncingBalls2";
import { Footer } from "./Footer";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
