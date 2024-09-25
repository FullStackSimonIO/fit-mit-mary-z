import ContactForm from "@/components/contact/ContactForm";
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
    </>
  );
};

export default page;
