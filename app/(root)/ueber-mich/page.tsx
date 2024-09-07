import AboutFirst from "@/components/AboutFirst";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Ausbildungen } from "@/components/Ausbildungen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Über mich",
};

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
