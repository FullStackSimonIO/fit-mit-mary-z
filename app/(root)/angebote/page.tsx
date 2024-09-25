import Wirbelsäulengymnastik from "@/components/offers/Wirbelsäulengymnastik";
import YogaOffers from "@/components/offers/YogaOffers";
import YogaTypes from "@/components/offers/YogaTypes";
import React from "react";
import PersonalTrainingSection from "@/components/offers/PersonalTrainingSection";

import { Metadata } from "next";
import Ernährungsberatung from "@/components/offers/Ernährungsberatung";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Angebote",
};

const page = () => {
  //localhost:3000/_next/image?url=%2Fassets%2Fwirbelsaeulengymnastik.jpeg&w=256&q=75
  http: return (
    <div>
      <YogaTypes />
      <YogaOffers />
      <Wirbelsäulengymnastik />
      <PersonalTrainingSection />
      <Ernährungsberatung />
    </div>
  );
};

export default page;
