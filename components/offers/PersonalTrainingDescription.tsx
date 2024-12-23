import Image from "next/image";
import React from "react";

const PersonalTrainingDescription = () => {
  return (
    <section className="bg-primary-backgroundGreen px-4 py-8 antialiased md:py-16">
      <h2 className="flex items-center justify-center text-3xl text-primary-buttonGreen font-bold pb-10">
        Personal Training:
      </h2>
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0">
          <a href="#">
            <Image
              className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
              src="/assets/angebote/trainingsplan.svg"
              alt="peripherals"
              width={500}
              height={500}
              unoptimized
            />
          </a>
        </div>
        <div className="me-auto place-self-center lg:col-span-7">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-primary-buttonGreen placeholder:md:text-4xl">
            Ich erstelle dir einen persönlichen, <br />
            individuellen Trainingsplan
          </h1>
          <p className="mb-6 font-semibold text-primary-paragraph">
            abgestimmt auf deine Ziele und deine Anamnese (Rückenprobleme,
            Schulterprobleme,..) auch gerne im Rahmen der medizinischen
            Trainingstherapie für die ich ausgebildet bin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingDescription;
