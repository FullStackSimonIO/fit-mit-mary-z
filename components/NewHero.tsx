import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-primary-backgroundGreen pt-24 md:pt-36">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 mb-8 lg:mb-0">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-buttonGreen">
            FIT-MIT-MARY
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-primary-paragraph lg:mb-8 md:text-lg lg:text-xl">
            Das Yogastudio deines Vertrauens in Künzing in der Nähe von Passau
            und Deggendorf.
          </p>
          <Button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary-backgroundGreen bg-primary-buttonGreen border border-transparent rounded-lg transition transform hover:scale-105 hover:bg-opacity-90">
            MEHR ERFAHREN
          </Button>
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Image
            src="/assets/logos/logoGreen.png"
            alt="Logo"
            width={400}
            height={400}
            className="w-72 h-72 md:w-96 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
