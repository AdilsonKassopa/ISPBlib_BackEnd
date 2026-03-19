export type categorySave = {
    id: string,
    name: string,
    dataCriacao: Date
}

export interface ICategoryRepository{
    save(name:string): Promise<categorySave>
    getCategory():Promise<categorySave[]>
    deleteCategory(id:string):Promise<categorySave>
}