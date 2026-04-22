export type autor = {
    id: string,
    name: string,
    descricao: string,
    pathImg: string | null,
    createdAt: Date,
    updatedAt: Date
}
export type intoAutor = {
    name: string,
    descricao: string,
    pathImg:string
}


export interface IAutorRepository{
    getAutor():Promise<autor[]>
    createAutor(data:intoAutor):Promise<autor>
}