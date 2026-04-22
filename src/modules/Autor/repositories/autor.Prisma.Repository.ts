import { prismaClient } from "../../../database/client";
import { IAutorRepository } from "./IAutor.repository";



export class AutorPrismaRepository implements IAutorRepository{
    async getAutor(): Promise<{ id: string; name: string; descricao: string; pathImg: string | null; createdAt: Date; updatedAt: Date; }[]> {
        const data = await prismaClient.author.findMany()
        return data
    }
    async createAutor(data: { name: string; descricao: string; pathImg: string; }): Promise<{ id: string; name: string; descricao: string; pathImg: string | null; createdAt: Date; updatedAt: Date; }> {
        const datas = await prismaClient.author.create({
            data:data
        })
        return datas
    }

}