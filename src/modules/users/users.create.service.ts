import type { createUser, IUsersRepository } from "./repositories/IUsersRepository.ts";



 class CreateUserService{

    constructor(private userRepository: IUsersRepository){}

    async execute(data:createUser){
        const find = await this.userRepository.findUsers(data.userName)
        if(find)
            throw new Error(`o usuario ${data.userName} já existe`)
        
        return await this.userRepository.save(data)
    }
}

export {CreateUserService}