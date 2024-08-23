import { Hero } from "@/components/Hero";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Navbar from "@/components/Navbar";
import React from "react";

import Info from "@/components/Info";
import LandingOffers from "@/components/LandingOffers";
import Footer from "@/components/Footer";
import { ParallaxImageContainer } from "@/components/ParallaxImageContainer";

const Home = () => {
  return (
    <div className="bg-[#EEFFF3]">
      <Navbar />
      <Hero />
      <Info />
      <LandingOffers />
      <ParallaxImageContainer />
      <Footer />
    </div>
  );
};
export default Home;
