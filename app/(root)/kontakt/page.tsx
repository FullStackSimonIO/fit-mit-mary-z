import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import MapWithPlaces from "@/components/Map";
import Navbar from "@/components/Navbar";
import { MapProvider } from "@/providers/maps-provider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Kontakt",
};

const page = () => {
  return (
    <MapProvider>
      <Navbar />
      <ContactForm />
      <Map />
      <Footer />
    </MapProvider>
  );
};

export default page;
