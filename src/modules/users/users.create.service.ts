import { verify } from "crypto";
import type { createUser, IUsersRepository } from "./repositories/IUsersRepository.ts";
import { HashBcrypt } from "./utils/hash.ts";



 class CreateUserService{

    constructor(private userRepository: IUsersRepository){}

    async execute(data:createUser){
        const hashBcrypt = new HashBcrypt()
        const find = await this.userRepository.findUsers(data.email)
        if(find)
            throw new Error(`o usuario já existe`)
        if(!data.email || !data.password)
            throw new Error("deves preencher todos os campos")
        data.password = await hashBcrypt.hashPassword(data.password)
        return await this.userRepository.save(data)
    }
    async finduser(){
        const user = await this.userRepository.findMany()

        if(!user)
            throw new Error('Nenhum user encontrado')

        return user
    }

    async updateUser(id:string, data:createUser){
        const user = await this.userRepository.findMany()
        const verifyId = user.find(item => item.id === id)

        if(!verify)
            throw new Error('user não encontrado')

        return this.userRepository.updateUser(id,data)
    }
}

export {CreateUserService}