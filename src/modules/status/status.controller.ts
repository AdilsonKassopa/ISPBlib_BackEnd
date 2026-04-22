import { Request, Response } from "express";
import { StatusFactoryService } from "./status.factor.service";



export class StatusController{
    async  get(request:Request,response:Response){
        try{
            const statusFactoryService = new StatusFactoryService()
            
            
            return response.status(200).json(await statusFactoryService.factory().execute())
        }catch(err:any){
            response.status(400).json({
                message:err.message
            })
        }
    }
}