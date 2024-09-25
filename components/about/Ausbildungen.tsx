"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const content = [
  {
    title: "Ausbildung - Trainerin Wirbelsäulengymnastik",
    date: "Juni 2024",
    imageSrc: "/assets/ueber-mich/wirbelsaeulengymnastik.svg",
  },
  {
    title: "Fortbildung - Medizinische Trainingstherapie",
    date: "Mai 2023 - Januar 2024",
    imageSrc: "/assets/ueber-mich/medizinische-trainingstherapie.svg",
  },
  {
    title: "Ausbildung - Yogalehrerin auf Bali",
    date: "Oktober 2023 - November 2023 (200 Stunden)",
    imageSrc: "/assets/ueber-mich/yogalehrerin.svg",
  },
  {
    title: "Fortbildung - Aqua Fitness Trainerin",
    date: "August 2019",
    imageSrc: "/assets/ueber-mich/aqua-fitness.svg",
  },
  {
    title: "Fortbildung - Jumping Fitness Trainerin",
    date: "2016",
    imageSrc: "/assets/ueber-mich/jumping-fitness.svg",
  },
  {
    title: "Ausbildung - Intensive Yoga 1",
    date: "2008",
    imageSrc: "/assets/ueber-mich/yoga-intense.svg",
  },
  {
    title: "Studium - Diplom Fitnessökonomin",
    date: "September 2005 - August 2008",
    imageSrc: "/assets/ueber-mich/diplom.svg",
  },
];

interface EducationItem {
  title: string;
  date: string;
  imageSrc: string;
}

interface EducationCardProps {
  item: EducationItem;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ item, index }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="mb-8 overflow-hidden bg-[#EEFFF3] border-[#2D4542]">
        <CardContent className="p-0">
          <div className="flex flex-col pt-12 md:flex-row">
            <div className="w-full md:w-1/3 p-4">
              <motion.div style={{ y }} className="sticky top-0">
                <Image
                  src={item.imageSrc}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="w-full  object-contain"
                  style={{
                    objectFit: "contain",
                    maxHeight: "300px",
                    width: "100%",
                  }}
                />
              </motion.div>
            </div>
            <div className="w-full md:w-2/3 p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#2D4542] mb-2">
                  {item.title}
                </CardTitle>
                <Badge variant="default" className="mb-4">
                  {item.date}
                </Badge>
              </CardHeader>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function Ausbildungen() {
  return (
    <section className="bg-[#EEFFF3] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#2D4542] mb-12 text-center">
          Meine Ausbildungen und Qualifikationen
        </h2>
        <div className="space-y-8">
          {content.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
