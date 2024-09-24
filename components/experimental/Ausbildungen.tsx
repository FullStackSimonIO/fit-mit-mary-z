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
    description:
      "Im Jahr 2024 habe ich meine Ausbildung zur Trainerin für Wirbelsäulengymnastik erfolgreich abgeschlossen. Diese spezialisierte Qualifikation hat mein Verständnis für die Gesundheit und Beweglichkeit der Wirbelsäule vertieft.",
    imageSrc: "/assets/ueber-mich/wirbelsaeulengymnastik.svg",
  },
  {
    title: "Fortbildung - Medizinische Trainingstherapie",
    date: "Mai 2023 - Januar 2024",
    description:
      "Kürzlich habe ich eine Fortbildung in der medizinischen Trainingstherapie absolviert, die mein Wissen im Bereich Rehabilitation und Prävention erweitert hat.",
    imageSrc: "/assets/ueber-mich/medizinische-trainingstherapie.svg",
  },
  {
    title: "Ausbildung - Yogalehrerin auf Bali",
    date: "Oktober 2023 - November 2023 (200 Stunden)",
    description:
      "Im Jahr 2023 habe ich meine Ausbildung zur Yogatrainerin auf Bali abgeschlossen, die sich über 200 intensive Stunden erstreckte. In der malerischen Umgebung von Balis tropischen Stränden und spirituellen Tempeln habe ich mich in den traditionellen Techniken des Yoga vertieft.",
    imageSrc: "/assets/ueber-mich/yogalehrerin.svg",
  },
  {
    title: "Fortbildung - Aqua Fitness Trainerin",
    date: "August 2019",
    description:
      "Im Jahr 2019 habe ich eine Fortbildung zur Aqua Fitness Trainerin absolviert, um meine Fähigkeiten im Bereich des Wassersports zu erweitern. Aqua Fitness ist eine effektive und schonende Trainingsmethode, die die Gelenke schont und den Körper stärkt.",
    imageSrc: "/assets/ueber-mich/aqua-fitness.svg",
  },
  {
    title: "Fortbildung - Jumping Fitness Trainerin",
    date: "2016",
    description:
      "Im Jahr 2016 habe ich eine Fortbildung zur Jumping Fitness Trainerin abgeschlossen. Jumping Fitness ist ein effektives und dynamisches Training auf dem Trampolin, das den gesamten Körper stärkt und die Ausdauer verbessert.",
    imageSrc: "/assets/ueber-mich/jumping-fitness.svg",
  },
  {
    title: "Ausbildung - Intensive Yoga 1",
    date: "2008",
    description:
      "Im Jahr 2008 habe ich meine Ausbildung in Intensivem Yoga abgeschlossen. Intensives Yoga ist eine kraftvolle und dynamische Form des Yoga, die Körper und Geist stärkt.",
    imageSrc: "/assets/ueber-mich/yoga-intense.svg",
  },
  {
    title: "Studium - Diplom Fitnessökonomin",
    date: "September 2005 - August 2008",
    description:
      "Von 2005 bis 2008 habe ich Fitnessökonomie an der Deutschen Hochschule für Prävention und Gesundheitsmanagement studiert und mein Diplom als Fitnessökonomin erworben. Dieses Studium hat mir ein fundiertes Verständnis für die betriebswirtschaftlichen und gesundheitlichen Aspekte des Fitnessmanagements vermittelt.",
    imageSrc: "/assets/ueber-mich/diplom.svg",
  },
];

interface EducationItem {
  title: string;
  date: string;
  description: string;
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
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-4">
              <motion.div style={{ y }} className="sticky top-0">
                <Image
                  src={item.imageSrc}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
            <div className="w-full md:w-2/3 p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#2D4542] mb-2">
                  {item.title}
                </CardTitle>
                <Badge variant="outline" className="mb-4">
                  {item.date}
                </Badge>
              </CardHeader>
              <p className="text-[#1f2937]">{item.description}</p>
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
