"use client";
import { ParallaxScrollSecond } from "./ui/parallax-scroll";
import { parallaxImages } from "@/data";

export function ParallaxImageContainer() {
  return <ParallaxScrollSecond images={parallaxImages} />;
}
