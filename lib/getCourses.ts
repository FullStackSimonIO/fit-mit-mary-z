// lib/getCourses.ts
import { Prisma, PrismaClient } from "@prisma/client";
import { Course } from "@/types";

export const getCourses = async () => {
  const prisma = new PrismaClient();
  const courses = await prisma.kurse.findMany();
  await prisma.$disconnect();
  return courses;
};
  