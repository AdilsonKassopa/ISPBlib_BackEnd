import { createUser, IUsersRepository } from "./repositories/IUsersRepository";
import { HashBcrypt } from "./utils/hash";



export class UserUpdatePasswordService{
    constructor(private iusersRepository:  IUsersRepository){}
    async execute(id:string,password:string){
        const hashBcrypt = new HashBcrypt()
        if(!id && !password)
            throw new Error("variaveis vazias")

        password = await hashBcrypt.hashPassword(password)
        const updateUserResult = this.iusersRepository.updatePassword(id,password)
        return updateUserResult
    }
}