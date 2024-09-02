import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { MapProvider } from "@/providers/maps-provider";
import React from "react";

const page = () => {
  return (
    <MapProvider>
      <Navbar />
      <ContactForm />
      <Footer />
    </MapProvider>
  );
};

export default page;
