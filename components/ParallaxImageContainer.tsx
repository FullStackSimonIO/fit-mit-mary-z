"use client";
import { ParallaxScrollSecond } from "./ui/parallax-scroll";
import { parallaxImages } from "@/data";

export function ParallaxImageContainer() {
  return (
    <div className="hidden lg:block">
      <ParallaxScrollSecond images={parallaxImages} />
    </div>
  );
}
