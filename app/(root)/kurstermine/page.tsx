import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import YogaCourses from "@/components/YogaCourses";
import { exampleCourses } from "@/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <YogaCourses courses={exampleCourses} />
      <Footer />
    </div>
  );
};

export default page;
