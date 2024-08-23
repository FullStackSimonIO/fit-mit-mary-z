import React from "react";
import { MeteorsDemo } from "./MeteorCard";
import { aboutSecond } from "@/data";

const AboutSecond = () => {
  return (
    <section className="bg-primary-backgroundGreen antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-buttonGreen sm:text-4xl ">
            Meine Angebote
          </h2>
          <p className="mt-4 text-base font-normal text-primary-paragraph sm:text-xl ">
            Entdecken Sie eine Auswahl an Kursen, Therapien und
            Beratungsangeboten.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-5 justify-center items-center mt-6 mb-32">
        {aboutSecond.map((item) => (
          <MeteorsDemo
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSecond;
