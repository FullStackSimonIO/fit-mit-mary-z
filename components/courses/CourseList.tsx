"use client";

import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/data";

const CourseList: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="w-full bg-[#EEFFF3] py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-[#2D4542] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Anstehende Kurstermine
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Entdecke meine aktuellen Kurse und Workshops. Hier findest du eine
          Übersicht über alle anstehenden Termine.
        </motion.p>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            className="bg-[#2D4542] text-white hover:bg-[#1A2A29] text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            onClick={() => console.log("Clicked on View All Courses")}
          >
            <a href="/kontakt">JETZT ANMELDEN</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseList;
