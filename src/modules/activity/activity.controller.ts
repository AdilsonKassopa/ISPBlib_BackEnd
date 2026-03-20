import { Request, Response } from "express";
import { ActivityFactoryService } from "./activity.factor.service";


const activityFactoryService = new ActivityFactoryService()

export class ActivityController{
    async create(request:Request,response:Response){
        try{
            const {activity,pathImg} = request.body
            return response.status(200).json(await activityFactoryService.factory().execute(activity,pathImg))

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
    async get(request:Request,response:Response){
        try{
            return response.status(200).json(await activityFactoryService.factory().get())

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
}