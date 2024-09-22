"use client";
import { wirbelsäulengymnastikData } from "@/data";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Wirbelsäulengymnastik = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/kontakt");
  };

  return (
    <div>
      <section className="py-16 sm:py-24 lg:py-36 bg-primary-backgroundGreen w-full">
        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
              <div className="border-4 border-primary-buttonGreen rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
                <Image
                  src="/assets/wirbelsaeulengymnastik.jpeg"
                  alt="Wirbelsäulengymnastik"
                  width={200}
                  height={300}
                  className="rounded-lg object-cover w-full"
                  priority={true}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-primary-paragraph sm:text-lg  lg:pl-8">
              <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-bold text-primary-buttonGreen text-center lg:text-left">
                {wirbelsäulengymnastikData.title}
              </h2>
              <p className="mb-4 font-semibold text-primary-paragraph text-center lg:text-left">
                {wirbelsäulengymnastikData.description}
              </p>
              <h3 className="font-bold text-xl underline underline-offset-1 pb-3 text-primary-buttonGreen text-center lg:text-left">
                10 Trainingseinheiten je 60 Minuten - nur 150,00€
              </h3>
              <div className="flex justify-center lg:justify-start">
                <Button onClick={handleButtonClick} variant="outline">
                  Jetzt Informieren
                  <svg
                    className="ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wirbelsäulengymnastik;
