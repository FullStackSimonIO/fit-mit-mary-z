import Footer from "@/components/Footer";

import React from "react";
import { Ausbildungen } from "@/components/experimental/Ausbildungen";
import { Metadata } from "next";
import AboutFirst from "@/components/experimental/AboutFirst";

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
