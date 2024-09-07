import { GrYoga } from "react-icons/gr";
import { FaBowlFood } from "react-icons/fa6";
import { GiSportMedal } from "react-icons/gi";
import { SiSpine } from "react-icons/si";
import { landingOffersData, landingOffersHeader } from "@/data";
import React from "react";

const LandingOffers = () => {
  return (
    <section className="bg-[#EEFFF3] w-full flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#0F3B1C] sm:text-4xl">
          {landingOffersHeader}
        </h2>

        <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-4 lg:mt-12">
          {landingOffersData.map((offer, index) => (
            <div key={index}>
              {index === 0 && (
                <FaBowlFood className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
              )}
              {index === 1 && (
                <GrYoga className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
              )}
              {index === 2 && (
                <GiSportMedal className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
              )}
              {index === 3 && (
                <SiSpine className="mx-auto mb-4 w-12 h-12 text-primary-buttonGreen" />
              )}
              <h3 className="mb-2 text-xl font-bold text-[#0F3B1C]">
                {offer.title}
              </h3>
              <p className="mb-4 text-primary-paragraph font-semibold">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingOffers;
