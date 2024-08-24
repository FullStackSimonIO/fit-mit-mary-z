import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PersonalTrainingTable from "@/components/PersonalTrainingTable";
import PersonalTrainingDescription from "@/components/PersonalTrainingDescription";

import Wirbelsäulengymnastik from "@/components/Wirbelsäulengymnastik";
import YogaOffers from "@/components/YogaOffers";
import YogaTypes from "@/components/YogaTypes";
import React from "react";
import PersonalTrainingSection from "@/components/PersonalTrainingSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <YogaTypes />
      <YogaOffers />
      <Wirbelsäulengymnastik />
      <PersonalTrainingSection />
      <Footer />
    </div>
  );
};

export default page;
