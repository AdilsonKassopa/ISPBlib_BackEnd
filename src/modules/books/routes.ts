import { Router } from "express";
import { BookController } from "./book.controller";
import {upload} from "../../utils/multer.util"

const bookRouter = Router()

const bookController = new BookController()

bookRouter.post('/create',upload.fields([
  { name: 'pathCapa_livro', maxCount: 1 },
  { name: 'path_book', maxCount: 1 }
]),bookController.create)
bookRouter.get('/',bookController.get)
bookRouter.delete('/delete',bookController.delete)
bookRouter.put('/update',upload.fields([
  { name: 'pathCapa_livro', maxCount: 1 },
  { name: 'path_book', maxCount: 1 }
]),bookController.update)


export {bookRouter}