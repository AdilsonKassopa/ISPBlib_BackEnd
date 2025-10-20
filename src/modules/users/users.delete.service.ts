import { IUsersRepository } from "./repositories/IUsersRepository";




export class UsersDeleteService{
    constructor(private iusersRepository: IUsersRepository){}
    async deleteUser(id:string){
        const deleteUser = await this.iusersRepository.deleteUser(id)
        if(!deleteUser)
            throw new Error("Usuario não existe")
       
        return {"message":"Usuario deletado com sucesso"}
    }
}