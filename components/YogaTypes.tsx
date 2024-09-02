import Image from "next/image";
import React from "react";
import { yogaTypes } from "@/data";

const YogaTypes = () => {
  return (
    <section className="bg-primary-backgroundGreen antialiased w-full  ">
      <div className="max-w-screen-xl px-4 py-36 mx-auto lg:px-6 lg:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-buttonGreen sm:text-4xl">
            {yogaTypes.header.title}
          </h2>
          <p className="mt-4 text-base font-bold text-primary-paragraph sm:text-xl">
            {yogaTypes.header.description}
          </p>
        </div>

        {/* Yin Yoga Section */}
        <div className="mt-12 space-y-16 sm:mt-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <h3 className="text-3xl font-bold leading-tight text-primary-buttonGreen sm:text-4xl mb-4 lg:hidden">
              {yogaTypes.yinYoga.title}
            </h3>
            <div className="relative mb-6 lg:mb-0">
              <Image
                src="/assets/angebote/angebote-yin-yoga-querformat.jpg"
                alt="yin yoga"
                width={500}
                height={500}
                className="object-cover w-full rounded-lg shadow-lg border-4 border-primary-buttonGreen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg opacity-70"></div>
            </div>
            <div className="w-full lg:max-w-lg shrink-0 xl:max-w-2xl">
              <h3 className="text-3xl font-bold leading-tight text-primary-buttonGreen sm:text-4xl hidden lg:block">
                {yogaTypes.yinYoga.title}
              </h3>
              <p className="text-base font-semibold text-primary-paragraph sm:text-lg mt-4 lg:mt-0">
                {yogaTypes.yinYoga.description}
              </p>
            </div>
          </div>
        </div>

        {/* Hatha Yoga Section */}
        <div className="mt-12 space-y-16 sm:mt-16">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <h3 className="text-3xl font-bold leading-tight text-primary-buttonGreen sm:text-4xl mb-4 lg:hidden">
              {yogaTypes.hathaYoga.title}
            </h3>
            <div className="relative mb-6 lg:mb-0">
              <Image
                unoptimized
                src="/assets/angebote/angebote-hatha-yoga-querformat.JPG"
                alt=""
                width={500}
                height={500}
                className="object-cover w-full rounded-lg shadow-lg border-4 border-primary-buttonGreen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg opacity-70"></div>
            </div>
            <div className="w-full lg:max-w-lg shrink-0 xl:max-w-2xl">
              <h3 className="text-3xl font-bold leading-tight text-primary-buttonGreen sm:text-4xl hidden lg:block">
                {yogaTypes.hathaYoga.title}
              </h3>
              <p className="text-base font-semibold text-primary-paragraph sm:text-lg mt-4 lg:mt-0">
                {yogaTypes.hathaYoga.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaTypes;
