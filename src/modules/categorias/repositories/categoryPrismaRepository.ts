import { prismaClient } from "../../../database/client";
import { categorySave, ICategoryRepository } from "./ICategoryRepository";


export class CategoryPrismaRepository implements ICategoryRepository{
   async save(name: string): Promise<categorySave> {
        const categorySave = await prismaClient.category.create({
            data:{
                name
            }
        })

        return categorySave
    }
    async getCategory(): Promise<categorySave[]> {
        const getCategory = await prismaClient.category.findMany()

        return getCategory
    }
    async deleteCategory(id: string): Promise<categorySave> {
        const categoryDel = await prismaClient.category.delete({
            where:{
                id
            }
        })
        return categoryDel
    }

}