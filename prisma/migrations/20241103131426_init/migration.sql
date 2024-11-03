-- CreateTable
CREATE TABLE "Kurse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDatum" TIMESTAMP(3) NOT NULL,
    "endDatum" TIMESTAMP(3) NOT NULL,
    "beschreibung" TEXT NOT NULL,
    "preis" DOUBLE PRECISION NOT NULL,
    "bild" TEXT NOT NULL,

    CONSTRAINT "Kurse_pkey" PRIMARY KEY ("id")
);
