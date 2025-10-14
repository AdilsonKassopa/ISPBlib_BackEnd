import { prismaClient } from "../../../database/client.js";
import type { IUsersRepository } from "./IUsersRepository.js";


class UsersRepository implements IUsersRepository{
    deleteUser(id: string): Promise<{ id: string; userName: string; password: string; }> {
        throw new Error("Method not implemented.");
    }
    async save(data: { userName: string; password: string; }): Promise<{ id: string; userName: string; password: string; }> {
        const userSave = await prismaClient.user.create({
            data:data
        })

        return userSave
    }
    async findUsers(name:string): Promise<{ id: string; userName: string; password: string; } | undefined> {
        const user = await prismaClient.user.findFirst({
            where:{
                name
            }
        })
        return user
    }


}

export {UsersRepository}