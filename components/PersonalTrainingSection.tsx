import React from "react";
import PersonalTrainingDescription from "./PersonalTrainingDescription";
import PersonalTrainingTable from "./PersonalTrainingTable";

const PersonalTrainingSection = () => {
  return (
    <section className=" w-full h-screen">
      <PersonalTrainingDescription />
      <PersonalTrainingTable />
    </section>
  );
};

export default PersonalTrainingSection;
