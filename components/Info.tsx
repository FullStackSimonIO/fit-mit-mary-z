import Image from "next/image";
import React from "react";
import { infoData } from "@/data";

const Info = () => {
  return (
    <section className="bg-[#EEFFF3] ">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0F3B1C] dark:text-white">
            {infoData[0].title}
          </h2>
          <p className="mb-4">{infoData[0].firstParagraph}</p>
          <p>{infoData[0].secondParagraph}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg border-4 border-primary-buttonGreen"
            src={infoData[0].firstImgUrl}
            alt={infoData[0].firstImgAlt}
            width={100}
            height={100}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg border-4 border-primary-buttonGreen"
            src={infoData[0].secondImgUrl}
            alt={infoData[0].secondImgAlt}
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
