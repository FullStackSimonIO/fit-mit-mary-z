import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TypewriterEffect } from "../ui/typewriter-effect";
import {
  typewriterErnährungsberatung,
  typewriterPersonalTraining,
  typewriterWirbelsäulengymnastik,
  typewriterYogakurse,
} from "@/data";

export default function YogaHero() {
  return (
    <section className="bg-[#EEFFF3] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <Badge className="bg-[#2D4542] text-white hover:bg-[#1A2A29]">
              FIT-MIT-MARY
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2D4542] leading-tight">
              Das Yogastudio deines Vertrauens in Künzing
            </h1>
            <ul className="list-disc pb-12 px-12">
              <li className="mb-2 font-semibold text-primary-paragraph ">
                <TypewriterEffect words={typewriterYogakurse} />
              </li>
              <li className="mb-2 font-semibold text-primary-paragraph ">
                <TypewriterEffect words={typewriterPersonalTraining} />
              </li>
              <li className="mb-2 font-semibold text-primary-paragraph ">
                <TypewriterEffect words={typewriterErnährungsberatung} />
              </li>
              <li className="mb-2 font-semibold text-primary-paragraph ">
                <TypewriterEffect words={typewriterWirbelsäulengymnastik} />
              </li>
            </ul>
            <div className="relative h-[300px] md:hidden mb-6">
              <Image
                src="/assets/maria/maria-hero.png"
                alt="Peaceful yoga practitioner in a serene natural setting"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-2xl"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#2D4542] hover:bg-[#1A2A29] text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out">
                <a href="/kursuebersicht">Aktuelle Kurse</a>
              </Button>
              <Button
                variant="outline"
                className="text-[#2D4542] border-[#2D4542] hover:bg-[#2D4542] hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300 ease-in-out"
              >
                <a href="/kontakt">Kontaktiere mich</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] hidden md:block order-1 md:order-2">
            <Image
              src="/assets/maria/maria-hero.png"
              alt="Peaceful yoga practitioner in a serene natural setting"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Yogakurse",
              description:
                "Entdecke die wohltuende Wirkung von Yoga! Ob Einsteiger oder geübter Yogi -  meine Kurse bieten dir die perfekte Mischung aus Entspannung, Kraft und Flexibilität. Lerne die Grundlagen oder vertiefe deine Praxis unter professioneller Anleitung.",
            },
            {
              title: "Präventionskurse",
              description:
                "Hier stärken wir deine Wirbelsäule und lockern verklebte Faszien um Schmerzen vorzubeugen und deine Beweglichkeit zu verbessern. Die Kurse werden von der Krankenkasse bezuschusst und du bekommst bis zu 100% der Kursgebühr wieder zurück.",
            },
            {
              title: "Einzelkurse",
              description:
                "Leidest du unter chronischen Schmerzen? In unserer individuellen medizinischen Trainingstherapie arbeiten wir gezielt an deinen Beschwerden um Schmerzen zu lindern und deine Beweglichkeit wiederherzustellen. Maßgeschneiderte Übungen und persönliche Betreuung für deinen Weg zum Wohlbefinden.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#2D4542] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
