import { createBook, IBookRepository } from "./repositories/IBook.repository";




export class BookService{
    constructor(private ibookRepository: IBookRepository){}
      /**
    * Método create, irá criar os livros 
    */
    async create(data:createBook){
        const book = await (await this.ibookRepository.get()).find((element) => element.titulo === data.titulo) //buscando o livro na bd
        if(book)
            throw new Error('o livro já existe')
        if(!data)
            throw new Error('nenhum dado fornecido')

        return await this.ibookRepository.save(data)

    }
    async get(){
        const books = await this.ibookRepository.get()
        if(!books)
            throw new Error('nenhum livro cadastrado')

        return books
    }
    async delete(id:string){
        const verifyId = await (await this.ibookRepository.get()).find((element) => element.id === id)
        if(!verifyId)//verificar se o livro existe na bd
            throw new Error('este livro não existe na base de dados')
        if(!id)//verificar se a variavel id tem valor
            throw new Error('nenhum dado fornecido')
        const delBook = await this.ibookRepository.delete(id)

        return delBook
    }
    async update(id:string,data:createBook){
        if(!data )
            throw new Error('nenhum id foi passado')
        const Id = await (await this.ibookRepository.get()).find((element) => element.id === id)
        if(!Id)
            throw new Error('este livro não existe na base de dados')
        if(!data )
            throw new Error('nenhum dado fornecido para atualização')

        return await this.ibookRepository.update(id,data)
    }
}