import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PersonalTrainingTable from "@/components/PersonalTraining";

import Wirbelsäulengymnastik from "@/components/Wirbelsäulengymnastik";
import YogaOffers from "@/components/YogaOffers";
import YogaTypes from "@/components/YogaTypes";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <YogaTypes />
      <YogaOffers />
      <Wirbelsäulengymnastik />
      <PersonalTrainingTable />
      <Footer />
    </div>
  );
};

export default page;
