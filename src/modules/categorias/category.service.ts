import { categoryData, ICategoryRepository } from "./repositories/ICategoryRepository";



export class CategoryService{
    constructor(private icategoryRepository :  ICategoryRepository){} // método construtor que ira receber o prismaRepository na inacialização do service
   /**
    * Método create, irá criar as categórias na bd
    */
    async create(data:categoryData){
        const category = await this.icategoryRepository.getCategory()
        if(!data )// verificando se o data esta vazio
            throw new Error('todos os campos devesm ser preenchido')
        const categoryVerify = category.find((element) => element.name === data.name) // buscando uma categoria  
        if(categoryVerify)                             // verificando se já existe a categória que se deseja criar
            throw new Error('Esta categoria já existe')

        return await this.icategoryRepository.save(data)
    }
    /**
     * método que irá buscar todas as categórias na bd 
     */
    async get(){
        const category = await this.icategoryRepository.getCategory() //buscando todas as categorias na bd
        if(!category) //verificar se existem categorias na bd
            throw new Error('Nenhuma Categoria Registrada')

        return category
    }
/**
 * Método delete, para deletar uma categória
 */
    async delete(id:string){
        const category = await this.icategoryRepository.getCategory() // buscando todas categorias na bd
        if(!id)  // verificando se o id esta vazio
            throw new Error('campo id vazio')
        const verify = category.find((element) => element.id === id) // buscando a categoria com o mesmo id passado
        if(!verify)                                                  //verificando se este id é válido na bd 
            throw new Error('não existe esta categória')

        return this.icategoryRepository.deleteCategory(id)
    }

    async update(id:string,data:categoryData){
        if(!id)
            throw new Error('nenhum id fornecido')
        const Id = await (await this.icategoryRepository.getCategory()).find((element) => element.id === id)
        if(!Id)
            throw new Error('a cayegoria não existe na bd')
        
        if(!data)
            throw new Error('nenhum dado fornecido')

        return await this.icategoryRepository.update(id,data)
    }

}