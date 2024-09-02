import AboutFirst from "@/components/AboutFirst";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import AboutSecond from "@/components/AboutSecond";
import { Stick } from "next/font/google";
import { Ausbildungen } from "@/components/Ausbildungen";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutFirst />
      <Ausbildungen />
      {/*<AboutSecond /> */}
      <Footer />
    </div>
  );
};

export default page;
