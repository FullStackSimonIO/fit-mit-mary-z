// lib/getCourses.ts
import { Prisma, PrismaClient } from "@prisma/client";
import { Course } from "@/types";

export const getCourses = async () => {
  const prisma = new PrismaClient();
  const courses = await prisma.course.findMany();
  await prisma.$disconnect();
  return courses;
};
