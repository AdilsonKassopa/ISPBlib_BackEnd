import { Request, Response } from "express";
import { AutorFactorService } from "./autor.factor.service";

const autorFactorService = new AutorFactorService()

export class AutorController{
    async create(request:Request,reponse:Response){
        try{
            const {name,descricao} = request.body
               const files = request.files as { 
                [fieldname: string]: Express.Multer.File[] 
            };
            const pathImg = `images/${files?.['pathImg']?.[0]?.filename}`;
            
            if (!pathImg) {
                return reponse.status(400).json({ message: 'Arquivo pathImg não fornecido' })
            }
            
            return reponse.status(200).json(await autorFactorService.factor().create({name,descricao,pathImg}))
        }catch(err:any){
            return reponse.status(400).json({
                message: err.message
            })
        }
        
    }
    async get(request:Request,reponse:Response){
        try{
            return reponse.status(200).json(await autorFactorService.factor().buscar())
        }catch(err:any){
            return reponse.status(400).json({
                message: err.message
            })
        }
    }
}