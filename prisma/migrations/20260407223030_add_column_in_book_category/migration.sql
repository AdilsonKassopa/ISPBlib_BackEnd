-- AlterTable
ALTER TABLE "activities" ADD COLUMN     "descricao" TEXT;

-- AlterTable
ALTER TABLE "books" ADD COLUMN     "DescricaoAutor" TEXT,
ADD COLUMN     "Idioma" TEXT,
ADD COLUMN     "Paginas" TEXT,
ADD COLUMN     "Pais" TEXT;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
