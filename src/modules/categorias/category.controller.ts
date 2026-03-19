import { Request, Response } from "express";
import { CategoryFactoryService } from "./category.factor.service";

const categoryFactoryService = new CategoryFactoryService()


export class CategoryController{
    async create(request:Request,response:Response){
        try{
            const {name} = request.body
            return response.status(200).json( await categoryFactoryService.factory().create(name))
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
    async get(request:Request,response:Response){
        try{
            response.status(200).json(await categoryFactoryService.factory().get())
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
    async delete(request:Request,response:Response){
        try{
            const {id} = request.body
            response.status(200).json(await categoryFactoryService.factory().delete(id))
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
}