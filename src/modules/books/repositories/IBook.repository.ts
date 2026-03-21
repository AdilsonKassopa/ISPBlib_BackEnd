export type createBook = {
    titulo:string,
    ISBN:string,
    Autor:string,
    volume:number,
    ano_pub:number,
    sinopse:string,
    path_book:string,
    statusId:string,
    pathCapa_livro:string,
    categoryid:string
}
export type book = {
    id:string,
    titulo:string,
    ISBN:string,
    Autor:string,
    volume:number,
    ano_pub:number,
    sinopse:string,
    path_book:string,
    statusId:string,
    pathCapa_livro:string,
    categoryid:string
    createdAt:Date,
    updatedAt:Date
}

export interface IBookRepository{
    save(data:createBook): Promise<book>
    get():Promise<book[]>
    delete(id:string):Promise<book>
    update(id:string,data:createBook):Promise<book>
    
}