import Hero from "@/components/NewHero";
import React from "react";

import Info from "@/components/Info";
import LandingOffers from "@/components/LandingOffers";
import Footer from "@/components/Footer";
import { ParallaxImageContainer } from "@/components/ParallaxImageContainer";
import Navigation from "@/components/experimental/Navigation";

const Home = () => {
  return (
    <div className="bg-[#EEFFF3]">
      <Hero />
      <Info />
      <LandingOffers />
      <ParallaxImageContainer />
      <Footer />
    </div>
  );
};
export default Home;
