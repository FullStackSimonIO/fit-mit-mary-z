import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CourseList from "@/components/CourseList";
import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/experimental/Navigation";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Kurse & Termine",
};

const page = () => {
  return (
    <div>
      <CourseList />
      <Footer />
    </div>
  );
};

export default page;