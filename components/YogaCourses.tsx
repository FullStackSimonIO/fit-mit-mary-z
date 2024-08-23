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
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <h2 className="text-3xl font-bold text-center text-primary-buttonGreen mb-8">
        Anstehende Kurstermine
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-48">
              <Image
                src="/assets/yoga-class.jpg"
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-backgroundGreen">
                {course.title}
              </h3>
              <p className="text-gray-500 mb-4">{course.description}</p>
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
              <button className="mt-4 w-full bg-primary-buttonGreen text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 transition">
                Mehr erfahren
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default YogaCourses;
