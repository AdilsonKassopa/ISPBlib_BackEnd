import { prismaClient } from "../../../database/client.ts";
import type { IUsersRepository } from "./IUsersRepository.ts";


class UsersPrismaRepository implements IUsersRepository{
    async deleteUser(id: string): Promise<{ id: string; userName: string; password: string; }> {
        const userDelete = await prismaClient.user.delete({
            where:{
                id
            }
        })
        return userDelete
    }

    async save(data: { userName: string; password: string; }): Promise<{ id: string; userName: string; password: string; }> {
        const userSave = await prismaClient.user.create({
            data:data
        })

        return userSave
    }
    async findUsers(name:string): Promise<{ id: string; userName: string; password: string; } | null> {
        const user = await prismaClient.user.findFirst({
            where:{
                userName:name
            }
        })
        return user
    }


}

export {UsersPrismaRepository}