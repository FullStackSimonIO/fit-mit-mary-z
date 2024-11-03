// app/components/CourseCard.tsx

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, CreditCardIcon } from "lucide-react";

export interface CourseCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  duration: string;
  imgUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  startDate,
  endDate,
  price,
  duration,
  imgUrl,
}) => {
  return (
    <div>
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 md:h-56">
          <Image
            src={imgUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-xl font-bold text-[#2D4542] line-clamp-2 h-14">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Start: {startDate}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Ende: {endDate}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Zeit: {duration}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CreditCardIcon className="mr-2 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Preis: {price}</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CourseCard;
