export type createBook = {
    titulo: string,
    ISBN: string,
    Idioma:string,
    Pais:string,
    Paginas:string,
    volume:number,
    ano_pub:number,
    sinopse:string,
    statusId:string,
    autorId:string,
    categoryid:string,
    pathCapa_livro:string,
    path_book:string
}
export type book = {
    id:string,
    titulo: string,
    ISBN: string,
    Idioma:string,
    Pais:string,
    Paginas:string,
    volume:number,
    ano_pub:number,
    sinopse:string,
    statusId:string,
    autorId:string,
    categoryid:string,
    pathCapa_livro:string,
    path_book:string
    createdAt:Date,
    updatedAt:Date
}

export interface IBookRepository{
    save(data:createBook): Promise<book>
    get():Promise<book[]>
    delete(id:string):Promise<book>
    update(id:string,data:createBook):Promise<book>
    
}