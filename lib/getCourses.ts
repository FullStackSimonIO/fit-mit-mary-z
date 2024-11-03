// lib/getCourses.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCourses = async () => {
  try {
    return await prisma.kurse.findMany();
  } catch (error) {
    console.error("Fehler beim Abrufen der Kurse:", error);
    return [];
  }
};
