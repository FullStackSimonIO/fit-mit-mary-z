import React from "react";
import ErnährungsberatungTable from "./ErnährungsberatungTable";
import ErnährungsberatungDescription from "./ErnährungsberatungDescription";

const Ernährungsberatung = () => {
  return (
    <section className="w-full h-screen">
      <ErnährungsberatungDescription />
      <ErnährungsberatungTable />
    </section>
  );
};

export default Ernährungsberatung;
