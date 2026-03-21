import { prismaClient } from "../../../database/client";
import { book, createBook, IBookRepository } from "./IBook.repository";



export class BookPrismaRepository implements IBookRepository{
    async save(data: createBook): Promise<book> {
        const books = await prismaClient.book.create({
            data:data
        })
        return books
    }
    async get(): Promise<book[]> {
        const books = await prismaClient.book.findMany()
        return books
    }
    async delete(id: string): Promise<book> {
        const books = await prismaClient.book.delete({
            where:{
                id:id
            }
        })
        return books
    }
    async update(id: string, data: createBook): Promise<book> {
        const books = await prismaClient.book.update({
            where:{
                id:id
            },
            data:{
                ...data
            }
        })
        return books
    }

}