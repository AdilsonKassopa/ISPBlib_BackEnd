import { createUser, IUsersRepository } from "./repositories/IUsersRepository";
import { HashBcrypt } from "./utils/hash";



export class UsersLoginService{
    constructor(private iusersRepository:  IUsersRepository){}
    async execute({userName,password}:createUser){
        const user = await this.iusersRepository.findUsers(userName)
        const hash = new HashBcrypt()
        if(!user)
            throw new Error("Usuario não existe")
        
        const verifyPass = await hash.comparePassword(password,user.password)
        if(!verifyPass)
            throw new Error("A Password esta incorreta")

        return {"message":"Login realizado com suscesso"}

    }

}