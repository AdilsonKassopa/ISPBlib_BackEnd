import { Request, response, Response } from "express";
import { AutorFactorService } from "./autor.factor.service";

const autorFactorService = new AutorFactorService()

export class AutorController{
    async create(request:Request,reponse:Response){
        try{
            const {name,descricao,pathImg} = request.body
            return reponse.status(200).json(await autorFactorService.factor().create({name,descricao,pathImg}))
        }catch(err:any){
            return response.status(400).json({
                message: err.message
            })
        }
        
    }
    async get(request:Request,reponse:Response){
        try{
            return reponse.status(200).json(await autorFactorService.factor().buscar())
        }catch(err:any){
            return response.status(400).json({
                message: err.message
            })
        }
    }
}