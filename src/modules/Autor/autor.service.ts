import { IAutorRepository, intoAutor } from "./repositories/IAutor.repository";



export class AutorService{
    constructor(private iautorRepository:  IAutorRepository){}
    async create(data:intoAutor){
        const autor = await (await this.iautorRepository.getAutor()).find(item => item.name === data.name)
        if(!data)//verificar se foi enviado todos os dados
            throw new Error('nenhum dado passado')

        if(autor)//verificar se ja existe o autor
            throw new Error(`o autor já existe`)
        
        return  this.iautorRepository.createAutor(data)
    }

    async buscar(){
        const data = await this.iautorRepository.getAutor()
        if(!data)
            throw new Error('nenhum dado encontrado')

        return this.iautorRepository.getAutor()
    }
}