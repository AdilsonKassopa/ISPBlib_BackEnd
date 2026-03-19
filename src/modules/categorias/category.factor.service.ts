import { CategoryService } from "./category.service";
import { CategoryPrismaRepository } from "./repositories/categoryPrismaRepository";



export class CategoryFactoryService{
    factory(){
        const categoryPrismaRepository = new CategoryPrismaRepository()
        const categoryService = new CategoryService(categoryPrismaRepository)
        return categoryService
    }
}