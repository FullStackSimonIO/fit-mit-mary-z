import React from "react";
import CourseCard from "./CourseCard";
import { exampleCourses } from "../data";

const CourseList: React.FC = () => {
  return (
    <section className="w-full justify-center py-36">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="text-3xl font-bold text-center text-primary-buttonGreen mb-12">
          Anstehende Kurstermine
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {exampleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
