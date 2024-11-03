/*
  Warnings:

  - Added the required column `dauer` to the `Kurse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kurse" ADD COLUMN     "dauer" INTEGER NOT NULL,
ALTER COLUMN "startDatum" SET DATA TYPE TEXT,
ALTER COLUMN "endDatum" SET DATA TYPE TEXT;
