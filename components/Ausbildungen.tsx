"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { description } from "@/data";

const content = [
  {
    title: "Ausbildung - Trainerin Wirbelsäulengymnastik",
    date: "Juni 2024",
    description:
      "Im Jahr 2024 habe ich meine Ausbildung zur Trainerin für Wirbelsäulengymnastik erfolgreich abgeschlossen. Diese spezialisierte Qualifikation hat mein Verständnis für die Gesundheit und Beweglichkeit der Wirbelsäule vertieft.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/assets/ueber-mich/wirbelsaeulengymnastik.svg"
          width={300}
          height={300}
          alt=""
          className="h-full w-full object-cover bg-transparent"
        />
      </div>
    ),
  },
  {
    title: "Fortbildung - Medizinische Trainingstherapie",
    date: "Mai 2023 - Januar 2024",
    description:
      "Kürzlich habe ich eine Fortbildung in der medizinischen Trainingstherapie absolviert, die mein Wissen im Bereich Rehabilitation und Prävention erweitert hat. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/assets/ueber-mich/medizinische-trainingstherapie.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ausbildung - Yogalehrerin auf Bali",
    date: "Oktober 2023 - November 2023 (200 Stunden)",
    description:
      "Im Jahr 2023 habe ich meine Ausbildung zur Yogatrainerin auf Bali abgeschlossen, die sich über 200 intensive Stunden erstreckte. In der malerischen Umgebung von Balis tropischen Stränden und spirituellen Tempeln habe ich mich in den traditionellen Techniken des Yoga vertieft.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/ueber-mich/yogalehrerin.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Fortbildung - Aqua Fitness Trainerin",
    date: "August 2019",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/ueber-mich/aqua-fitness.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Fortbildung - Jumping Fitness Trainerin",
    date: "2016",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/ueber-mich/jumping-fitness.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ausbildung - Intensive Yoga 1",
    date: "2008",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/ueber-mich/yoga-intense.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Studium - Diplom Fitnessökonomin",
    date: "September 2005 - August 2008",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/ueber-mich/diplom.svg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Ausbildungen() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
