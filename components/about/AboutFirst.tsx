"use client";

import clsx from "clsx";
import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Feature = {
  image: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
};

export type Layout458Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutFirst = (props: Layout458Props) => {
  const { tagline, heading, description, features } = {
    ...Layout458Defaults,
    ...props,
  } as Props;

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="rb-12 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1
              className="text-5xl font-bold md:text-7xl lg:text-8xl"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            <p
              className="md:text-md"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {/* {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>}
              )) */}
            </div>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-12 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx("w-full", {
                "md:mt-[25%]": index === 1,
                "md:mt-[50%]": index === 2,
              })}
            >
              <div className="rb-6 mb-6 w-full md:mb-8">
                <Image
                  src={feature.image.src}
                  alt="Image"
                  className="aspect-[3/2] w-full object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {feature.heading}
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: feature.description,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout458Defaults: Layout458Props = {
  tagline: "Über mich",
  heading: "Ganzheitlich.<br/>Achtsam.<br/>Für Dich.",
  description:
    "Willkommen auf meiner Reise, die ich mit Leidenschaft und Hingabe gestaltet habe, um dich zu inspirieren und zu begleiten.<br/>Als erfahrene Yogalehrerin und Sporttherapeutin liegt mir das Wohlbefinden meiner Klienten am Herzen.<br/>In meinen Kursen und Angeboten vereine ich Bewegung, Entspannung und Achtsamkeit – für ein Leben in Balance und innerer Stärke. Lass uns gemeinsam Körper und Geist in Einklang bringen und zu mehr Leichtigkeit im Alltag finden.",

  features: [
    {
      image: {
        src: "/assets/maria/maria-hero.png",
        alt: "Relume placeholder image 1",
      },
      heading: "Wer bin ich?",
      description:
        "Ich bin Mary, arbeite als Sporttherapeutin in eine Rehaklinik.<br/> Mein lang gehegter Traum ist es ein eigenes Yoga-Studio zu führen, in dem ich meine Kenntnisse und Erfahrungen mit euch teilen kann.<br/>Diesen Traum habe ich mir vor kurzem mit „Fit mit Mary“ erfüllt.",
    },
    {
      image: {
        src: "/assets/ueber-mich/kissen.jpeg",
        alt: "Relume placeholder image 2",
      },
      heading: "Mein Yogastudio:",
      description:
        "In meinem Studio biete ich unter anderem Yoga-Kurse, Personal-Training, Ernährungsberatung und Wirbelsäulengymnastik an.<br/>Mein Ziel ist es euch zu einem Leben mit mehr Spaß, Leichtigkeit und Lebensfreude sowie einem besseren Körpergefühl zu verhelfen.",
    },
    {
      image: {
        src: "/assets/maria/mariaYoga.jpeg",
        alt: "Relume placeholder image 3",
      },
      heading: "Vorteile:",
      description:
        "Teilnahme an einem Yogakurs bietet zahlreiche Vorteile:<br/>Verbesserung der Flexibilität, Stärkung der Muskulatur und Förderung der inneren Ruhe.<br/>Reduzieren Sie Stress, steigern Sie Ihre Konzentration und fördern Sie das allgemeine Wohlbefinden.<br/>Geeignet für alle Altersgruppen, bringt Yoga Körper und Geist in Einklang.",
    },
  ],
};
