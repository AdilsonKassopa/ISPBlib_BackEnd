type createUser = {
    userName: string,
    password: string
}

type userSave = {
    id: string,
    userName: string,
    password: string
}

export interface IUsersRepository {

    save(data:createUser): Promise<userSave>

    findUsers(name:string):Promise<userSave | null>

    deleteUser(id:string):Promise<userSave>

}