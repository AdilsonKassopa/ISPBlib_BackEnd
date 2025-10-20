import bcrypt from 'bcrypt'


export class HashBcrypt{
   async hashPassword(password:string){
        return await bcrypt.hash(password,10)
    }

    async comparePassword(password:string,hash:string){
        return await bcrypt.compare(password,hash)
    }
}