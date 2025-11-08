import { IUsersRepository } from "./repositories/IUsersRepository";



export class UsersFindService{
    constructor(private iusersRepository: IUsersRepository){}
    async execute(username:string){
        const result = await this.iusersRepository.findUsers(username)

        if(!result)
            throw new Error('Usuário não encontrado')

        return result
    }
}