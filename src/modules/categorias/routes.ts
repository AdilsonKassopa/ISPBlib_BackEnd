import { Router } from "express";
import { CategoryController } from "./category.controller";

const categoryRouter = Router()
const categoryController = new CategoryController()

categoryRouter.post('/create',categoryController.create)
categoryRouter.get('/',categoryController.get)
categoryRouter.delete('/delete',categoryController.delete)
categoryRouter.put('/update',categoryController.update)

export {categoryRouter}