import AboutFirst from "@/components/AboutFirst";
import Footer from "@/components/Footer";
import Navigation from "@/components/experimental/Navigation";
import React from "react";
import { Ausbildungen } from "@/components/Ausbildungen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Über mich",
};

const page = () => {
  return (
    <div>
      <AboutFirst />
      <Ausbildungen />
      {/*<AboutSecond /> */}
      <Footer />
    </div>
  );
};

export default page;
