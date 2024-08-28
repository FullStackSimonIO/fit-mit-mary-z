"use client";
import React from "react";
import { yogaOffers } from "@/data";
import { Button } from "./ui/button";

const YogaOffers = () => {
  return (
    <div>
      <section className="bg-primary-backgroundGreen py-8 px-4 lg:py-16 lg:px-6 w-full min-h-screen">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary-buttonGreen mb-4">
              {yogaOffers.header.title}
            </h2>
            <p className="text-primary-paragraph sm:text-xl font-bold">
              {yogaOffers.header.description}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {yogaOffers.offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white shadow-lg rounded-[22px] p-6 sm:p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-primary-buttonGreen mb-4">
                    {offer.title}
                  </h3>
                  <p className="text-primary-paragraph font-semibold sm:text-lg mb-8">
                    {offer.description}
                  </p>
                  <div className="flex justify-center items-baseline mb-8">
                    <span className="text-5xl font-extrabold text-primary-buttonGreen">{`€${offer.price}`}</span>
                    <span className="text-primary-paragraph font-semibold ml-2 text-lg">
                      /Kurs
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4">
                    {[
                      offer.ad_1,
                      offer.ad_2,
                      offer.ad_3,
                      offer.ad_4,
                      offer.ad_5,
                    ]
                      .filter(Boolean)
                      .map((ad, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <svg
                            className="flex-shrink-0 w-6 h-6 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-primary-paragraph font-semibold">
                            {ad}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="text-center mt-auto">
                  <Button
                    variant="ghost"
                    className="w-full py-3 text-lg font-bold"
                  >
                    Termin sichern
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaOffers;
