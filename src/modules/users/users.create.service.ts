import type { createUser, IUsersRepository } from "./repositories/IUsersRepository.ts";
import { HashBcrypt } from "./utils/hash.ts";



 class CreateUserService{

    constructor(private userRepository: IUsersRepository){}

    async execute(data:createUser){
        const hashBcrypt = new HashBcrypt()
        const find = await this.userRepository.findUsers(data.userName)
        if(find)
            throw new Error(`o usuario ${data.userName} já existe`)
        if(!data.userName || !data.password)
            throw new Error("deves preencher todos os campos")
        data.password = await hashBcrypt.hashPassword(data.password)
        return await this.userRepository.save(data)
    }
}

export {CreateUserService}