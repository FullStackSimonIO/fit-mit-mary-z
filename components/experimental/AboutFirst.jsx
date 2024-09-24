"use client";
import React from "react";
import Image from "next/image";
import { motion, Variant } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { aboutFirst } from "@/data";
import { VariantProps } from "class-variance-authority";

const AboutFirst = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      <motion.section
        className="bg-[#EEFFF3] antialiased pt-8 lg:pt-24 w-full"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-screen-xl px-4 mx-auto lg:px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={fadeInUp}
          >
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2D4542] sm:text-4xl">
              {aboutFirst.header.title}
            </h1>
            <p className="mt-4 text-base font-semibold text-[#1f2937] sm:text-xl">
              {aboutFirst.header.description}
            </p>
          </motion.div>

          <motion.div
            className="mt-12 space-y-16 sm:mt-16"
            variants={staggerChildren}
          >
            {[
              aboutFirst.firstSection,
              aboutFirst.secondSection,
              aboutFirst.thirdSection,
            ].map((section, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row items-center">
                      <div
                        className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-last" : ""}`}
                      >
                        <Image
                          src={section.imgUrl}
                          alt={`Image ${index + 1}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-48 lg:h-full"
                          unoptimized
                        />
                      </div>
                      <div className="w-full lg:w-1/2 p-6 lg:p-8">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold text-[#2D4542] mb-4">
                            {section.header}
                          </CardTitle>
                        </CardHeader>
                        <p className="text-base text-[#1f2937]">
                          {
                            section[
                              `${["first", "second", "third"][index]}Paragraph`
                            ]
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="flex items-center justify-center py-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <Button
          variant="default"
          size="lg"
          className="bg-[#2D4542] text-[#EEFFF3] hover:bg-[#1f2937] transition-all duration-300 transform hover:scale-105"
        >
          TERMIN ANFRAGEN
          <motion.svg
            whileHover={{ x: 5 }}
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </motion.svg>
        </Button>
      </motion.div>
    </>
  );
};

export default AboutFirst;
