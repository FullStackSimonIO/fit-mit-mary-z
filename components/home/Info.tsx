"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sevillana } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { infoData } from "@/data";

const sevillana = Sevillana({
  weight: "400",
  subsets: ["latin"],
});

export default function YogaInfo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen w-full bg-[#EEFFF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#2D4542] text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {infoData[0].title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 mb-4">
                  {infoData[0].firstParagraph}
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  {infoData[0].secondParagraph}
                </p>
                <p className="text-lg text-gray-700">
                  {infoData[0].thirdParagraph}
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <motion.h4
                className={`text-[#2D4542] font-bold text-4xl sm:text-5xl ${sevillana.className}`}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Maria
              </motion.h4>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                className="bg-[#2D4542] text-white hover:bg-[#1A2A29]"
                onClick={() => setActiveIndex(0)}
              >
                Über Mich
              </Button>
              <Button
                variant="outline"
                className="bg-[#2D4542] text-white hover:bg-[#1A2A29]"
                onClick={() => setActiveIndex(1)}
              >
                Meine Angebote
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                className="w-full h-auto rounded-lg shadow-xl"
                src={infoData[0].firstImgUrl}
                alt={infoData[0].firstImgAlt}
                width={400}
                height={300}
                layout="responsive"
                priority
                unoptimized
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                className="w-full h-auto rounded-lg shadow-xl mt-8 lg:mt-16"
                src={infoData[0].secondImgUrl}
                alt={infoData[0].secondImgAlt}
                width={400}
                height={300}
                layout="responsive"
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-[#2D4542] mb-4">
                {activeIndex === 0 ? "Über Mich:" : "Meine Angebote:"}
              </h3>
              <p className="text-lg text-primary-paragraph">
                {activeIndex === 0 ? (
                  "Ich bin eine zertifizierte Yogalehrerin und Ernährungsberaterin mit über 10 Jahren Erfahrung. Meine Leidenschaft ist es, für ganzheitliche Gesundheit und Wohlbefinden zu sorgen und meinen Schülern zu helfen, ihre Ziele zu erreichen und ein gesundes, erfülltes Leben zu führen."
                ) : (
                  <ul className="list-disc text-primary-paragraph font-normal">
                    <li>
                      Yogakurse für Anfänger / Fortgeschrittene (Hatha & Yin
                      Yoga)
                    </li>
                    <li>Private Yogastunden</li>
                    <li>Wirbelsäulengymnastik</li>
                    <li>Personal Training</li>
                    <li>Ernährungsberatung</li>
                  </ul>
                )}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Button className="bg-[#2D4542] text-white hover:bg-[#1A2A29] text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            <a href="/kursuebersicht">Aktuelle Kursübersicht</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
