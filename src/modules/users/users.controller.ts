import type { Request, Response } from "express";
import { CreateUserService } from "./users.create.service.ts";
import { UsersPrismaRepository } from "./repositories/UsersPrismaRepository.ts";


export class UserController{
    async create(request:Request,response:Response){
        try{
            const {body} = request
            const userPrismaRepository = new UsersPrismaRepository()
            const createUserService = new CreateUserService(userPrismaRepository)
            const result = await createUserService.execute(body)
            return response.status(200).json(result)
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }
}