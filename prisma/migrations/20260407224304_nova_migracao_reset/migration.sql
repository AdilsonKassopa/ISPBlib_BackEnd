/*
  Warnings:

  - Made the column `descricao` on table `activities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DescricaoAutor` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Idioma` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Paginas` on table `books` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Pais` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "activities" ALTER COLUMN "descricao" SET NOT NULL;

-- AlterTable
ALTER TABLE "books" ALTER COLUMN "DescricaoAutor" SET NOT NULL,
ALTER COLUMN "Idioma" SET NOT NULL,
ALTER COLUMN "Paginas" SET NOT NULL,
ALTER COLUMN "Pais" SET NOT NULL;
