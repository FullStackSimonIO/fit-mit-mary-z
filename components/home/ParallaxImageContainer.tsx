"use client";

import { parallaxImages } from "@/data";
import { ParallaxScrollSecond } from "../ui/parallax-scroll";

export function ParallaxImageContainer() {
  return (
    <div className="hidden lg:block">
      <ParallaxScrollSecond images={parallaxImages} />
    </div>
  );
}
