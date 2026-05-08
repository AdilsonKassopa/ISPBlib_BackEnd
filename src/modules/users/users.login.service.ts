import { generateToken } from "../../utils/jwt.util";
import { createUser, IUsersRepository } from "./repositories/IUsersRepository";
import { HashBcrypt } from "./utils/hash";




export class UsersLoginService{
    constructor(private iusersRepository:  IUsersRepository){}
    async execute({email,password}:createUser){
        const user = await this.iusersRepository.findUsers(email)
        
        const hash = new HashBcrypt()
        if(!user)
            throw new Error("Usuario não existe")
        
        const verifyPass = await hash.comparePassword(password,user.password)
        if(!verifyPass)
            throw new Error("A Password esta incorreta")

        const token = generateToken({id:user.id,email:user.email})
        return token

    }

}