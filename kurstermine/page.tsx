import CourseList from "@/components/CourseList";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit-Mit-Mary | Kurse & Termine",
};

const page = () => {
  return (
    <div>
      <CourseList />
    </div>
  );
};

export default page;
