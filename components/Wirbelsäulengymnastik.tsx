import { wirbelsäulengymnastikData } from "@/data";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image"; // Importiere das Next.js Image Tag

const Wirbelsäulengymnastik = () => {
  return (
    <div>
      <section className="py-36 bg-primary-backgroundGreen w-full">
        <div className=" px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
              <div className="border-4 border-primary-buttonGreen rounded-lg shadow-lg">
                <Image
                  src="/assets/wirbelsaeulengymnastik.jpg" // Pfad zum Bild
                  alt="Wirbelsäulengymnastik"
                  width={500} // Angepasste Breite
                  height={750} // Angepasste Höhe für Hochformat
                  className="rounded-lg object-cover"
                  priority={true}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-gray-500 sm:text-lg dark:text-gray-400 lg:pl-8">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-primary-buttonGreen">
                {wirbelsäulengymnastikData.title}
              </h2>
              <p className="mb-4 font-light">
                {wirbelsäulengymnastikData.description}
              </p>
              <h3 className="font-bold pb-3 text-primary-buttonGreen">
                {" "}
                8 Trainingseinheiten je 60 Minuten - Nur 150,00€
              </h3>

              <Button variant="ghost">
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
      </section>
    </div>
  );
};

export default Wirbelsäulengymnastik;
