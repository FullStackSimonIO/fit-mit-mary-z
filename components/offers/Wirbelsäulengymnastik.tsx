import { wirbelsäulengymnastikData } from "@/data";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Wirbelsäulengymnastik = () => {
  return (
    <div>
      <section className="py-16 sm:py-24 lg:py-36 bg-primary-backgroundGreen w-full">
        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-end">
              <div className="border-4 border-primary-buttonGreen rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
                <Image
                  src="/assets/angebote/angebote-wirbelsäulengymnastik-querformat.JPG"
                  alt="Wirbelsäulengymnastik"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
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
              <h3 className="font-bold pb-3 text-primary-buttonGreen text-center lg:text-left">
                8 Trainingseinheiten je 60 Minuten - Nur 150,00€
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wirbelsäulengymnastik;
