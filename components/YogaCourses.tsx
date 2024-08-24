"use client";
import React from "react";
import { Course } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface YogaCoursesProps {
  courses: Course[];
}

const YogaCourses: React.FC<YogaCoursesProps> = ({ courses }) => {
  return (
    <section className="flex w-full h-screen items-center justify-center py-12">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <h2 className="text-3xl font-bold text-center text-primary-buttonGreen mb-12">
          Anstehende Kurstermine
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-60 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-72">
                <Image
                  src={course.imgUrl}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 text-primary-buttonGreen h-12 flex items-center">
                  {course.title}
                </h3>
                <p className="text-gray-500 mb-4 flex-grow">
                  {course.description}
                </p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>
                    <strong>Startdatum:</strong> {course.startDate}
                  </p>
                  <p>
                    <strong>Uhrzeit:</strong> {course.time}
                  </p>
                  <p>
                    <strong>Enddatum:</strong> {course.endDate}
                  </p>
                </div>
                <button className="mt-auto w-full bg-primary-buttonGreen text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition">
                  Mehr erfahren
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaCourses;
