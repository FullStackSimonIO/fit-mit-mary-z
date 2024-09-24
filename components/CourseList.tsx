import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data";

const CourseList: React.FC = () => {
  return (
    <section className="w-full justify-center pt-8 lg:pt-24 md:pt-36">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="text-3xl font-bold text-center text-primary-buttonGreen mb-12">
          Anstehende Kurstermine
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
