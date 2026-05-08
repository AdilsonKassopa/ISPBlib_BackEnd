import { prismaClient } from "../../../database/client.ts";
import type { createUser, IUsersRepository, userSave } from "./IUsersRepository.ts";


class UsersPrismaRepository implements IUsersRepository{
    async updateUser(id:string,data:createUser): Promise<userSave> {
        const  user = await prismaClient.user.update({
            where:{
                id:id
            },
            data:{
                ...data
            }
        })

        return user
    }
    async findMany(): Promise<userSave[]> {
        const  user = await prismaClient.user.findMany()

        return user
    }
    async updatePassword(id:string ,password:string): Promise<userSave> {
        const userPassword = await prismaClient.user.update({
            where:{
                    id:id
                },
            data:{
                password:password
            } 
        })
        return userPassword
    }
    async deleteUser(id: string): Promise<userSave> {
        const userDelete = await prismaClient.user.delete({
            where:{
                id
            }
        })
        return userDelete
    }

    async save(data: { userName: string; password: string; email: string; }): Promise<userSave> {
        const userSave = await prismaClient.user.create({
            data:data
        })

        return userSave
    }
    async findUsers(email:string): Promise<userSave | null> {
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        return user
    }


}

export {UsersPrismaRepository}