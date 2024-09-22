"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBowlFood } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { GiSportMedal } from "react-icons/gi";
import { SiSpine } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { landingOffersData, landingOffersHeader } from "@/data";

const iconComponents = [FaBowlFood, GrYoga, GiSportMedal, SiSpine];

export default function LandingOffers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="bg-[#EEFFF3] w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#0F3B1C] text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {landingOffersHeader}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {landingOffersData.map((offer, index) => {
            const IconComponent = iconComponents[index];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#2D4542] rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#0F3B1C] text-center">
                      {offer.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 mb-4">
                      {offer.description}
                    </p>
                    {/* <Button
                      className="w-full bg-[#2D4542] text-white hover:bg-[#1A2A29]"
                      onClick={() => console.log(`Clicked on ${offer.title}`)}
                    >
                      Learn More
                    </Button> */}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            className="bg-[#0F3B1C] text-white hover:bg-[#0A2914] text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            onClick={() => console.log("Clicked on main CTA")}
          >
            <a href="/kontakt">Schreib mir eine Nachricht</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
