// app/components/CourseList.tsx

import React from "react";
import { getCourses } from "@/lib/getCourses"; // Diese Funktion lädt Daten von Prisma
import CourseCard from "./CourseCard";

// Server-Komponente, die Daten abruft und CourseCards rendert
const CourseList = async () => {
  const courses = await getCourses();

  return (
    <section className="w-full bg-[#EEFFF3] py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="text-4xl font-bold text-center text-[#2D4542] mb-6">
          Anstehende Kurstermine
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Entdecke meine aktuellen Kurse und Workshops. Hier findest du eine
          Übersicht über alle anstehenden Termine.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.name}
              description={course.beschreibung}
              startDate={course.startDatum}
              endDate={course.endDatum}
              price={course.preis}
              duration={course.dauer}
              imgUrl={course.bild}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
