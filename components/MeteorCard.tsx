import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-primary-buttonGreen border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-primary-backgroundGreen mb-4 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-base text-primary-backgroundGreen mb-4 relative z-50">
            {description}
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
