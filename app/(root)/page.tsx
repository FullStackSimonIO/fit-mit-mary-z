import Hero from "@/components/NewHero";
import React from "react";

import Info from "@/components/experimental/Info";
import LandingOffers from "@/components/experimental/LandingOffers";
import Footer from "@/components/Footer";
import { ParallaxImageContainer } from "@/components/ParallaxImageContainer";

import YogaHero from "@/components/experimental/Hero";

const Home = () => {
  return (
    <div className="bg-[#EEFFF3]">
      <YogaHero />
      <Info />
      <LandingOffers />
      <ParallaxImageContainer />
      <Footer />
    </div>
  );
};
export default Home;
