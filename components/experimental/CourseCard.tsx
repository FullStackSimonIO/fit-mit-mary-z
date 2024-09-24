"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, CreditCardIcon } from "lucide-react";
import { Course } from "../../types/types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const isNewCourse = () => {
    const courseStartDate = new Date(course.startDate);
    const currentDate = new Date();
    const daysDifference = Math.ceil(
      (courseStartDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
    );
    return daysDifference <= 7 && daysDifference > 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 md:h-56">
          <Image
            src={course.imgUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
          {isNewCourse() && (
            <Badge className="absolute top-2 left-2 bg-green-500 text-white">
              Neu
            </Badge>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-xl font-bold text-[#2D4542] line-clamp-2 h-14">
              {course.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <p className="text-gray-600 mb-4 line-clamp-3">
              {course.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">
                  Start: {formatDate(course.startDate)}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">
                  Ende: {formatDate(course.endDate)}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Zeit: {course.time}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CreditCardIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Preis: {course.price}</span>
              </div>
              {/* <div className="flex items-center text-sm text-gray-500">
                <UserIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">
                  Kursleiter: {course.instructor}
                </span>
              </div> */}
            </div>
          </CardContent>
        </div>
        {/* <CardFooter className="mt-auto">
          <Button
            className="w-full bg-[#2D4542] text-white hover:bg-[#1A2A29]"
            onClick={() => console.log(`Booking course: ${course.title}`)}
          >
            Jetzt buchen
          </Button>
        </CardFooter> */}
      </Card>
    </motion.div>
  );
};

export default CourseCard;
