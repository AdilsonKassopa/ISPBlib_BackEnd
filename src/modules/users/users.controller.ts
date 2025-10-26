import type { Request, Response } from "express";
import { UsersFactory } from "./users.factory.service.ts";
const usersFactory = new UsersFactory()

export class UserController{
    async create(request:Request,response:Response){
        try{
            const {body} = request
            
            const result = await usersFactory.service().execute(body)
            return response.status(200).json(result)
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }
    async delete(request:Request,response:Response){
       try{
            const {id} = request.body
            const delResult = await usersFactory.delService().deleteUser(id)
            return response.status(200).json(delResult)
       }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }

    async login(request:Request,response:Response){
        try{
            const {userName,password} = request.body
            const loginResult = await usersFactory.loginUser().execute({userName,password})
            return response.status(200).json(loginResult)
        }catch(err:any){
            response.status(400).json({
                message: err.message
            })
        }
    }

}