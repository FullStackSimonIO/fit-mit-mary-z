import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary-backgroundGreen pt-36">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-buttonGreen">
            FIT-MIT-MARY
          </h1>
          <p className="max-w-2xl mb-6 font-semibold text-primary-paragraph lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Das Yogastudio deines Vertrauens in Künzing in der Nähe von Passau
            und Deggendorf.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            MEHR ERFAHREN
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="/assets/logos/logoGreen.png"
            alt="Logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
