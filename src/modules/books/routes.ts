import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router()

const bookController = new BookController()

bookRouter.post('/create',bookController.create)
bookRouter.get('/',bookController.get)
bookRouter.delete('/delete',bookController.delete)
bookRouter.put('/update',bookController.update)


export {bookRouter}