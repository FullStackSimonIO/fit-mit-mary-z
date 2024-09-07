import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Wirbelsäulengymnastik from "@/components/Wirbelsäulengymnastik";
import YogaOffers from "@/components/YogaOffers";
import YogaTypes from "@/components/YogaTypes";
import React from "react";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";
import Ernährungsberatung from "@/components/Ernährungsberatung";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Angebote",
};

const page = () => {
  return (
    <div>
      <Navbar />
      <YogaTypes />
      <YogaOffers />
      <Wirbelsäulengymnastik />
      <PersonalTrainingSection />
      <Ernährungsberatung />
      <Footer />
    </div>
  );
};

export default page;
