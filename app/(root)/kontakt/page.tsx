import ContactForm from "@/components/contact/ContactForm";
import { MapProvider } from "@/providers/maps-provider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Kontakt",
};

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ContactForm />
      </main>
    </div>
  );
};

export default page;
