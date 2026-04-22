import { Router } from "express";
import { AutorController } from "./autor.controller";
const autorRouter = Router()


const autorController = new AutorController()

autorRouter.post('/create',autorController.create)
autorRouter.get('/',autorController.get)


export  {autorRouter}