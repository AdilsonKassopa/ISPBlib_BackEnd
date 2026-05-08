import { Router } from "express";
import { AutorController } from "./autor.controller";
import { upload } from '../../utils/multer.util';
const autorRouter = Router()


const autorController = new AutorController()

autorRouter.post('/create',upload.fields([
  { name: 'pathImg', maxCount: 1 }]),autorController.create)
autorRouter.get('/',autorController.get)


export  {autorRouter}