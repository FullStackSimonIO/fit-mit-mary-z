import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/experimental/Navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MapProvider } from "@/providers/maps-provider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Kontakt",
};

const page = () => {
  return (
    <>
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
