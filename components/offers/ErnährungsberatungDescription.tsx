import Image from "next/image";
import React from "react";

const ErnährungsberatungDescription = () => {
  return (
    <section>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="w-full flex justify-center md:justify-start">
          <Image
            className="w-full block border-primary-buttonGreen border-8 rounded-lg max-w-xs sm:max-w-sm md:max-w-full"
            src="/assets/angebote/angebote-ernährungsberatung-querformat.jpeg"
            alt="Ernährungsberatung Bild"
            width={500}
            height={500}
            unoptimized
          />
        </div>

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-buttonGreen">
            Professionelle Ernährungsberatung
          </h2>
          <p className="mb-6 font-semibold text-primary-paragraph md:text-lg dark:text-gray-400">
            Ich erstelle dir einen individuellen Ernährungsplan, abgestimmt auf
            deine Ziele und deine Anamnese. Gemeinsam schaffen wir es, dass du
            dich in deinem Körper wohlfühlst und deine Ziele erreichst.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErnährungsberatungDescription;
