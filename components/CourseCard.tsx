"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Course } from "../types/types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-60 border border-white/20 transform transition duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 md:h-80">
        <Image
          src={course.imgUrl}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-semibold mb-2 text-primary-buttonGreen">
          {course.title}
        </h3>
        <p className="text-gray-500 mb-4 flex-grow">{course.description}</p>
        <div className="text-sm text-gray-600 mb-4 space-y-1">
          <p>
            <strong>Startdatum:</strong>{" "}
            {new Date(course.startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Uhrzeit:</strong> {course.time}
          </p>
          <p>
            <strong>Enddatum:</strong>{" "}
            {new Date(course.endDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Preis:</strong> {course.price}
          </p>
        </div>
        <button className="mt-auto w-full bg-primary-buttonGreen text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition">
          Mehr erfahren
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
