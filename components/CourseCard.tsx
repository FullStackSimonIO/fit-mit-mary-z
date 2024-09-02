"use client";
import React from "react";
import Image from "next/image";
import { Course } from "../types/types";
import { Button } from "./ui/button";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Optional: Formatierung der Daten
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-60 border border-white/20 transform transition duration-500 hover:scale-105">
      <div className="relative h-64 md:h-80">
        <Image
          src={course.imgUrl}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="">
        <h3 className="flex items-center justify-center text-xl text-primary-buttonGreen py-4">
          {course.title}
        </h3>
        <div className=" font-semibold text-primary-buttonGreen py-2">
          <p>{course.description}</p>
        </div>
        <div className="py-4">
          <p>Kursbeginn: {course.startDate}</p>
          <p>Kursende: {course.endDate}</p>
          <p>Beginn: {course.time}</p>
          <p>Preis: {course.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
