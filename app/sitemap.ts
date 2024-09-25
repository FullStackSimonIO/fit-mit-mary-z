import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://fit-mit-mary.de",
    },
    {
      url: "https://fit-mit-mary.de/ueber-mich",
    },
    {
      url: "https://fit-mit-mary.de/kurstermine",
    },
    {
      url: "https://fit-mit-mary.de/kontakt",
    },
    {
      url: "https://fit-mit-mary.de/angebote",
    },
    {
      url: "https://fit-mit-mary.de/datenschutzverordnung",
    },
    {
      url: "https://fit-mit-mary.de/impressum",
    },
    {
      url: "https://fit-mit-mary.de/teilnahmebedingungen",
    },
  ];
}
