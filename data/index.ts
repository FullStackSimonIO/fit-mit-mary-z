/* Kurze Anleitung zum Ändern von Texten und Bildern auf der Website:

Texte:
1. Suche den richtigen Bereich in der Datei, die für die gewünschte Unterseite zuständig ist. (in der unteren Datei finden sich Kommentare im Code für die jeweiligen Seiten z.B. "// Startseite", "// Über Mich", "// Angebote" ...)
2. Suche den Abschnitt, den du ändern möchtest. (z.B. "Hero Section Data", "First Section Data", "Second Section Data" ...)
3. Ändere den Text, den du ändern möchtest. (z.B. "title", "description", "firstParagraph", "secondParagraph" ...)
4. Speichere die Datei ab.

Bilder:
1. Suche den richtigen Bereich in der Datei, die für die gewünschte Unterseite zuständig ist. (in der unteren Datei finden sich Kommentare im Code für die jeweiligen Seiten z.B. "// Startseite", "// Über Mich", "// Angebote" ...)
2. Suche den Abschnitt, den du ändern möchtest. (z.B. "Hero Section Data", "First Section Data", "Second Section Data" ...)
3. Ändere den Bildpfad, den du ändern möchtest. (z.B. "logo.png", "yogastudio.png" ...)
4. Speichere die Datei ab.
Beim Hinzufügen der Bilder muss der Bildpfad relativ zum Ordner "public" sein.
Grundstruktur der Bildpfade: "/assets/seitenname/bildname.format" (z.B. "/assets/ueber-mich/yogastudio.png")

* WICHTIG: Achte darauf ausschließlich die Texte abzuändern. Wenn "" oder '' vorhanden, UMBEDINGT STEHE LASSEN, da der Code sonst bricht.

Änderungen selbstständig updaten:

1. Speichere die Datei ab. (Strg + S)
2. Gehe in die Konsole und führe den Befehl "git add ." aus.
3. Führe den Befehl "git commit -m 'Beschreibung der Änderungen'" aus.
4. Führe den Befehl "git push" aus.
5. Die Änderungen sollten jetzt in ca. 5 Minuten auf der Website sichtbar sein.


*/

import { Course } from "@/types";

//* Hier befinden sich allgemeine Daten, die auf der Website angezeigt werden. Diese Daten können hier geändert werden.

// ! Metadata
// Hier kann die Meta-Beschreibung und der Titel der Website angepasst werden. (Metadata: Titel der Website und Beschreibung, die in den Suchergebnissen angezeigt wird)
export const metaData = {
  title: "FIT-MIT-MARY",
  description:
    "Erleben Sie tiefenentspannende Yoga-Kurse in unserem professionellen Studio. Egal ob Anfänger oder Fortgeschrittener – finden Sie Balance und innere Ruhe durch individuelle Anleitungen. Besuchen Sie uns für Yoga in Künzing. Jetzt Platz reservieren!",
};

// ! NAVBAR
// Hier werden die Begriffe gerendert, die in der Navigationsleiste angezeigt werden.
export const navItems = [
  { name: "Startseite", link: "/" },
  { name: "Über Mich", link: "/ueber-mich" },
  { name: "Angebote", link: "/angebote" },
  { name: "Kurse", link: "/kurse" },
];

// * Homepage

// ! HERO SECTION
// Erster Bereich auf der Startseite
export const name = "FIT-MIT-MARY";
export const description =
  "Erleben Sie tiefenentspannende Yoga-Kurse in unserem professionellen Studio. Egal ob Anfänger oder Fortgeschrittener – finden Sie Balance und innere Ruhe durch individuelle Anleitungen. Besuchen Sie uns für Yoga in Künzing. Jetzt Platz reservieren!";

// ! Info Section
// Zweiter Bereich auf der Startseite
export const infoData = [
  {
    id: 1,
    title: "Yoga & Sporttherapie", // Überschrift des Abschnitts
    firstParagraph:
      "Yoga und Sporttherapie bieten eine ganzheitliche Methode, Körper und Geist in Einklang zu bringen. Yoga, eine jahrtausendealte Praxis, vereint körperliche Übungen, Atemtechniken und Meditation, um Flexibilität, Kraft und innere Ruhe zu fördern. Sporttherapie ergänzt diese Ansätze durch gezielte Bewegungsprogramme, die auf individuelle gesundheitliche Bedürfnisse abgestimmt sind. Zusammen können Yoga und Sporttherapie helfen, Stress abzubauen, Verletzungen zu rehabilitieren und die allgemeine körperliche Fitness zu verbessern.",
    secondParagraph:
      "Diese Kombination unterstützt nicht nur die physische Gesundheit, sondern fördert auch das mentale Wohlbefinden, indem sie Achtsamkeit und Entspannung in den Alltag integriert.",
    firstImgUrl: "/assets/startseite/1.jpg",
    firstImgAlt: "Buddha auf Fensterbrett",
    secondImgUrl: "/assets/startseite/3.jpg",
    secondImgAlt: "Buddha Kerze anzünden",
  },
];

// ! Landing Offers
// Dritter Bereich auf der Startseite

export const landingOffersHeader = "Für jeden etwas dabei";

export const landingOffersData = [
  {
    id: 1,
    title: "Ernährungsberatung",
    description:
      "Ernährungsberatung optimiert die Gesundheit durch maßgeschneiderte Ernährungspläne, fördert gesunde Gewohnheiten und unterstützt Gewichtsmanagement sowie Wohlbefinden.",
  },
  {
    id: 2,
    title: "Yoga",
    description:
      "Yoga vereint Körper und Geist, fördert Flexibilität, Kraft und innere Ruhe. Perfekt für Stressabbau und ganzheitliches Wohlbefinden.",
  },
  {
    id: 3,
    title: "Sporttherapie",
    description:
      "Sporttherapie verbessert Gesundheit durch gezielte Bewegung, rehabilitiert Verletzungen, stärkt den Körper und fördert langfristiges Wohlbefinden.",
  },
];

// Parallax Scroll Animation Images
// Bild in "public/assets/startseite" ablegen und den Pfad hier eintragen
export const parallaxImages = [
  "/assets/startseite/1.JPG",
  "/assets/startseite/2.JPG ",
  "/assets/startseite/3.JPG",
  "/assets/startseite/4.JPG",
  "/assets/startseite/5.JPG",
  "/assets/startseite/6.JPG",
  "/assets/startseite/7.JPG",
  "/assets/startseite/8.JPG",
  "/assets/startseite/10.JPG",
];

// * Über-Mich Seite

// ! AboutFirst Section
// Erster Bereich auf der Über-Mich Seite
export const aboutFirst = {
  header: {
    title: "Über Mich:",
    description:
      "Ich konnte dein Interesse wecken? Hier findest du mehr Informationen zu meinem Studio und mir.",
  },
  firstSection: {
    header: "Wer bin ich?",
    firstParagraph:
      "Ich bin Mary, arbeite als Sporttherapeutin in eine Rehaklinik. Mein lang gehegter Traum ist es ein eigenes Yoga-Studio zu führen, in dem ich meine Kenntnisse und Erfahrungen mit euch teilen kann. Diesen Traum habe ich mir vor kurzem mit „Fit mit Mary“ erfüllt.",
    imgUrl: "/assets/maria/maria.jpg",
  },
  secondSection: {
    header: "Mein Yogastudio:",
    secondParagraph:
      "In meinem Studio biete ich unter anderem Yoga-Kurse, Personal-Training, Ernährungsberatung und Wirbelsäulengymnastik an. Mein Ziel ist es euch zu einem Leben mit mehr Spaß, Leichtigkeit und Lebensfreude sowie einem besseren Körpergefühl zu verhelfen.",
    imgUrl: "/assets/ueber-mich/kissen.jpg",
  },
  thirdSection: {
    header: "Vorteile:",
    thirdParagraph:
      "Teilnahme an einem Yogakurs bietet zahlreiche Vorteile: Verbesserung der Flexibilität, Stärkung der Muskulatur und Förderung der inneren Ruhe. Reduzieren Sie Stress, steigern Sie Ihre Konzentration und fördern Sie das allgemeine Wohlbefinden. Geeignet für alle Altersgruppen, bringt Yoga Körper und Geist in Einklang.",
    imgUrl: "/assets/maria/mariaYoga.jpg",
  },
};

export const aboutSecond = [
  {
    title: "Yogakurse",
    description:
      "Teilnahme an einem Yogakurs bietet zahlreiche Vorteile: Verbesserung der Flexibilität, Stärkung der Muskulatur und Förderung der inneren Ruhe. Reduzieren Sie Stress, steigern Sie Ihre Konzentration und fördern Sie das allgemeine Wohlbefinden. Geeignet für alle Altersgruppen, bringt Yoga Körper und Geist in Einklang. Jetzt ausprobieren!",
  },
  {
    title: "Sporttherapie",
    description:
      "Sporttherapie, wie Wirbelsäulengymnastik, verbessert die Körperhaltung, stärkt die Rückenmuskulatur und lindert Schmerzen. Sie fördert Beweglichkeit, beugt Verletzungen vor und unterstützt die Rehabilitation. Diese Therapieform ist ideal für Menschen jeden Alters, um gezielt Rückenbeschwerden vorzubeugen und ein gesundes, aktives Leben zu führen.",
  },
  {
    title: "Ernährungsberatung",
    description:
      "Ernährungsberatung hilft, gesunde Essgewohnheiten zu entwickeln, Gewicht zu regulieren und Energielevel zu steigern. Sie bietet individuelle Pläne zur Verbesserung der allgemeinen Gesundheit, Vorbeugung von Krankheiten und Steigerung des Wohlbefindens. Mit professioneller Unterstützung lernen Sie, bewusste und nahrhafte Entscheidungen zu treffen. Jetzt den ersten Schritt zu einem gesünderen Leben machen!",
  },
];

// * Angebote Seite

// ! YogaOffers Sectio

export const yogaOffers = {
  header: {
    title: "Aktuelle Yoga Angebote",
    description: "Hier findest du unsere aktuellen Yoga Angebote:",
  },
  offers: [
    {
      id: 1,
      title: "Yoga - 8x 75 Minuten",
      imgUrl: "",
      imgAlt: "Yoga",
      description:
        "Perfekt, wenn du noch nie Yoga praktiziert hast. Hier bringe ich dir die Grundlagen bei.",
      price: "120,00",
      ad_1: "Verbesserte Flexibilität",
      ad_2: "Stressabbau und Entspannung",
      ad_3: "Stärkung der Muskulatur",
      ad_4: "Verbesserte Körperwahrnehmung",
      ad_5: "Förderung des inneren Gleichgewichts",
    },
    {
      id: 2,
      title: "Yoga - 8x 90 Minuten",
      imgUrl: "",
      imgAlt: "Yoga",
      description:
        "Für Fortgeschrittene, die ihre Praxis vertiefen möchten. Ideal für alle, die regelmäßig Yoga praktizieren.",
      price: "144,00",
      ad_1: "Intensivierung der Praxis",
      ad_2: "Erweiterung des Übungsrepertoires",
      ad_3: "Vertiefung der Atemtechniken",
      ad_4: "Verbesserte mentale Konzentration und Meditation",
      ad_5: "Steigerung der Körperkraft",
    },
    {
      id: 3,
      title: "Einzelstunde - 90 Minuten",
      imgUrl: "",
      imgAlt: "Yoga",
      description:
        "Ideal für alle, die regelmäßig Yoga praktizieren und ihre Praxis intensivieren möchten.",
      price: "85,00",
      ad_1: "Individuelle Betreuung",
      ad_2: "Anpassung der Praxis an die persönlichen Bedürfnisse",
      ad_3: "Vertiefung der Atemtechniken",
      ad_4: "Förderung der Konzentration",
      ad_5: "Steigerung der Körperkraft",
    },
  ],
};

export const yogaTypes = {
  header: {
    title: "Yoga Arten",
    description: "Hier findest du unsere verschiedenen Yoga Arten:",
  },
  yinYoga: {
    title: "Yin Yoga",
    description:
      "Yin Yoga ist eine ruhige und meditative Form des Yoga, bei der die Asanas (Körperhaltungen) lange gehalten werden, um tief in das Bindegewebe einzudringen und die Flexibilität sowie die innere Ruhe zu fördern.",
  },
  hathaYoga: {
    title: "Hatha Yoga",
    description:
      "Hatha Yoga ist eine traditionelle Form des Yoga. Es umfasst körperliche Übungen (Asanas), Atemtechniken (Pranayama) und Meditation, um den Körper zu stärken, den Geist zu beruhigen und die Flexibilität sowie das Gleichgewicht zu verbessern. Hatha Yoga ist oft langsam und sanft, was es besonders für Anfänger und Menschen, die Stress abbauen oder ihre körperliche und geistige Gesundheit fördern möchten, geeignet macht.",
  },
};

export const wirbelsäulengymnastikData = {
  title: "Wirbelsäulengymnastik",
  description:
    "Bewegungstherapie, die speziell darauf abzielt, die Muskulatur der Wirbelsäule zu stärken, die Beweglichkeit zu verbessern und Haltungsschäden vorzubeugen und zu korrigieren. Durch gezielte Übungen werden Rücken- u. Bauchmuskeln trainiert, um die Wirbelsäule zu stabilisieren und Schmerzen vorzubeugen.",
};

export const exampleCourses: Course[] = [
  {
    id: "1",
    title: "Yoga für Anfänger",
    startDate: "2024-09-01",
    time: "10:00",
    endDate: "2024-09-01",
    description: "Einführung in die Welt des Yoga für absolute Anfänger.",
  },
  {
    id: "2",
    title: "Fortgeschrittenes Hatha Yoga",
    startDate: "2024-09-02",
    time: "18:00",
    endDate: "2024-09-02",
    description: "Hatha Yoga mit fortgeschrittenen Asanas.",
  },
  {
    id: "3",
    title: "Meditation und Entspannung",
    startDate: "2024-09-03",
    time: "20:00",
    endDate: "2024-09-03",
    description: "Geführte Meditationen zur Entspannung und Stressbewältigung.",
  },
];
