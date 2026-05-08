import { Request, Response } from "express";
import { BookfactorService } from "./book.factor.service";

const bookFactorService = new BookfactorService()

export class BookController{
    async create(request:Request,response:Response){
        try{
            const {
                titulo,
                ISBN,
                Idioma,
                Pais,
                Paginas,
                volume,
                ano_pub,
                sinopse,
                statusId,
                autorId,
                categoryid
            } = request.body
            
            // Tipagem para múltiplos arquivos
            const files = request.files as { 
                [fieldname: string]: Express.Multer.File[] 
            };

            // Arquivo 1: Imagem da capa
            const pathCapa_livro = `images/${files?.['pathCapa_livro']?.[0]?.filename}`;
      
            // Arquivo 2: PDF do livro
            const path_book = `documents/${files?.['path_book']?.[0]?.filename}`;


            

            return response.status(200).json(await bookFactorService.factor().create({
                titulo,
                ISBN,
                Idioma,
                Pais,
                Paginas,
                volume: parseInt(volume),
                ano_pub: parseInt(ano_pub),
                sinopse,
                statusId,
                autorId,
                categoryid,
                pathCapa_livro,
                path_book
            }))
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
            const {
                id,
                titulo,
                ISBN,
                Idioma,
                Pais,
                Paginas,
                volume,
                ano_pub,
                sinopse,
                statusId,
                autorId,
                categoryid
            } = request.body
            
            // Tipagem para múltiplos arquivos
            const files = request.files as { 
                [fieldname: string]: Express.Multer.File[] 
            };

            // Arquivo 1: Imagem da capa
            const pathCapa_livro = `images/${files?.['pathCapa_livro']?.[0]?.filename}`;
      
            // Arquivo 2: PDF do livro
            const path_book = `documents/${files?.['path_book']?.[0]?.filename}`;

            return response.status(200).json( await bookFactorService.factor().update(id,{
                titulo,
                ISBN,
                Idioma,
                Pais,
                Paginas,
                volume: parseInt(volume),
                ano_pub: parseInt(ano_pub),
                sinopse,
                statusId,
                autorId,
                categoryid,
                pathCapa_livro,
                path_book
            }))
        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
}