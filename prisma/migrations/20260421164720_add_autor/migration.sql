/*
  Warnings:

  - You are about to drop the column `Autor` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `DescricaoAutor` on the `books` table. All the data in the column will be lost.
  - Added the required column `autorId` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "Autor",
DROP COLUMN "DescricaoAutor",
ADD COLUMN     "autorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "pathImg" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
