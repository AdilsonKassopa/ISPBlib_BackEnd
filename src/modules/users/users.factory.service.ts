import { UsersPrismaRepository } from "./repositories/UsersPrismaRepository";
import { CreateUserService } from "./users.create.service";
import { UsersDeleteService } from "./users.delete.service";
import { UsersLoginService } from "./users.login.service";
const usersPrismaRepository = new UsersPrismaRepository()


export class UsersFactory{
    service(){
        
        const createUserService = new CreateUserService(usersPrismaRepository)

        return createUserService
    }
    delService(){
        const usersDeleteService = new UsersDeleteService(usersPrismaRepository)
        return usersDeleteService
    }
    loginUser(){
        const usersLoginService = new UsersLoginService(usersPrismaRepository)
        return usersLoginService
    }
}