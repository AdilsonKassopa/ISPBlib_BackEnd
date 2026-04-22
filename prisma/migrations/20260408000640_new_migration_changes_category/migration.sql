-- DropForeignKey
ALTER TABLE "public"."categories" DROP CONSTRAINT "categories_categoriaId_fkey";

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "categoriaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
