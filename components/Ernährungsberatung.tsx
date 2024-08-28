import React from "react";
import ErnährungsberatungTable from "./ErnährungsberatungTable";
import ErnährungsberatungDescription from "./ErnährungsberatungDescription";

const Ernährungsberatung = () => {
  return (
    <section>
      <ErnährungsberatungDescription />
      <ErnährungsberatungTable />
    </section>
  );
};

export default Ernährungsberatung;
