// pages/index.tsx
import React from "react";
import CourseList from "@/components/courses/CourseList";
import { getCourses } from "@/lib/getCourses";
import { Course } from "@/types";

interface HomePageProps {
  courses: Course[];
}

const HomePage: React.FC<HomePageProps> = ({ courses }) => {
  return <CourseList courses={courses} />;
};

export default HomePage;
