// pages/index.tsx
import React from "react";
import CourseList from "@/components/courses/CourseList";
import { getCourses } from "@/lib/getCourses";
import { Course } from "@/types";

const HomePage = () => {
  return <CourseList />;
};

export default HomePage;
