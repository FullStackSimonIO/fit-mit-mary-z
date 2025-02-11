"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import {
  MotionValue,
  useMotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  tagline: string;
  heading: string;
  description: string;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Layout408Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const calculateScales = (
  totalSections: number,
  scrollYProgress: MotionValue<number>
) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const Info = (props: Layout408Props) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout408Defaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div
          ref={containerRef}
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0"
        >
          {featureSections.map((featureSection, index) => (
            <FeatureSection
              key={index}
              {...featureSection}
              scale={scales[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  scale,
  index,
  ...featureSection
}: FeatureSectionProps & {
  scale: MotionValue<number>;
  index: number;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isEven = index % 2 === 0;

  return (
    <React.Fragment>
      {isMobile ? (
        <div className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white">
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </div>
      ) : (
        <motion.div
          className="static grid grid-cols-1 content-center overflow-hidden border border-border-primary bg-neutral-white md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] md:grid-cols-2"
          style={{ scale }}
        >
          <FeatureSectionContent isEven={isEven} {...featureSection} />
        </motion.div>
      )}
    </React.Fragment>
  );
};

const FeatureSectionContent = ({
  isEven,
  ...featureSection
}: FeatureSectionProps & { isEven: boolean }) => (
  <React.Fragment>
    <div
      className={clsx(
        "order-first flex flex-col justify-center p-6 md:p-8 lg:p-12",
        isEven ? "md:order-first" : "md:order-last"
      )}
    >
      <p className="mb-2 font-semibold">{featureSection.tagline}</p>
      <h2 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
        {featureSection.heading}
      </h2>
      <p>{featureSection.description}</p>
    </div>
    <div
      className={clsx(
        "order-last flex flex-col items-center justify-center",
        isEven ? "md:order-last" : "md:order-first"
      )}
    >
      <Image
        src={featureSection.image.src}
        alt="Image"
        width={900}
        height={900}
      />
    </div>
  </React.Fragment>
);

export const Layout408Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  featureSections: [
    {
      tagline: "Der Ort",
      heading: "Bamberg am Wildkogel",
      description:
        "Bramberg am Wildkogel liegt inmitten unberührter Natur, umgeben von den sanften Kitzbüheler Alpen und den imposanten Hohen Tauern. Saftige Almwiesen, klare Gebirgsbäche und das smaragdgrüne Habachtal machen die Region zu einem Paradies für Naturliebhaber. Der Wildkogel bietet atemberaubende Ausblicke. ",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "Die Unterkunft",
      heading: "Das Bramberg",
      description:
        "Das Bramberg“ am Wildkogel ist Teil der Wildkogel Resorts und bietet luxuriöse Apartments. Die stilvoll eingerichteten Apartments verfügen über voll ausgestattete Küchen, moderne Wohnbereiche sowie großzügige Balkone mit Blick auf den Nationalpark Hohe Tauern. Gäste genießen kostenfreien Zugang zum hauseigenen Wellnessbereich mit Innenpool, Spa, Sauna und Fitnessraum. Für das Retreat steht uns ein gemeinsames Apartment mit 5 Doppelzimmern, 3 Badezimmern und einem gemeinsamen Wohn- u. Essbereich mit Zugang zu Balkon/Terasse zur Verfügung.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      tagline: "Über Mich",
      heading: "Maria Zillinger",
      description:
        "Ich bin Maria, 39 Jahre jung und arbeite hauptberuflich als Sporttherapeutin in einer Reha-Klinik. Bei mir erwartet dich eine Mischung aus verschiedenen Yoga-Stilen (Yin Yoga, Hatha Yoga, Yoga Nidra) 200 h Yogalehrer Ausbildung auf Bali – Yoga Bali24 h Kursleiterin Hatha Yoga – AHAB60 h Yin Yoga – Yoga Vidya ",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
    },
  ],
};
