import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CourseList from "@/components/CourseList";

import { exampleCourses } from "@/data";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <CourseList />
      <Footer />
    </div>
  );
};

export default page;
