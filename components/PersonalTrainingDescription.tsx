import Image from "next/image";
import React from "react";

const PersonalTrainingDescription = () => {
  return (
    <section className="bg-primary-backgroundGreen px-4 py-8 antialiased md:py-16">
      <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="lg:col-span-5 lg:mt-0">
          <a href="#">
            <Image
              className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
              src="/assets/angebote/trainingsplan.svg"
              alt="peripherals"
              width={500}
              height={500}
            />
          </a>
        </div>
        <div className="me-auto place-self-center lg:col-span-7">
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-primary-paragraph placeholder:md:text-4xl">
            Ich erstelle dir einen persönlichen, <br />
            individuellen Trainingsplan
          </h1>
          <p className="mb-6 text-primary-paragraph">
            abgestimmt auf deine Ziele und deine Anamnese (Rückenprobleme,
            Schulterprobleme,..) auch gerne im Rahmen der medizinischen
            Trainingstherapie für die ich ausgebildet bin.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {" "}
            Pre-order now{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalTrainingDescription;
