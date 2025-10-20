import type { createUser, IUsersRepository } from "./repositories/IUsersRepository.ts";
import { HashBcrypt } from "./utils/hash.ts";



 class CreateUserService{

    constructor(private userRepository: IUsersRepository){}

    async execute(data:createUser){
        const hashBcrypt = new HashBcrypt()
        const {userName,password} = data
        const find = await this.userRepository.findUsers(userName)
        if(find)
            throw new Error(`o usuario ${userName} já existe`)
        const hash = hashBcrypt.hashPassword(password)
        return await this.userRepository.save({userName,password:await hash})
    }
}

export {CreateUserService}