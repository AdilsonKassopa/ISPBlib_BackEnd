import { Request, Response } from "express";
import { BookfactorService } from "./book.factor.service";

const bookFactorService = new BookfactorService()

export class BookController{
    async create(request:Request,response:Response){
        try{
            const data = request.body
            return response.status(200).json(await bookFactorService.factor().create(data))
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }

    async get(request:Request,response:Response){
        try{
            return response.status(200).json( await bookFactorService.factor().get())
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }

    async delete(request:Request,response:Response){
        try{
            const {id} = request.body

            return response.status(200).json( await bookFactorService.factor().delete(id))

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }

    async update(request:Request,response:Response){
        try{
            const {id,data} = request.body

            return response.status(200).json( await bookFactorService.factor().update(id,data))
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
}