export type categorySave = {
    id: string,
    name: string,
    descricao: string,
    categoriaId: string,
    statusId: string,
    createdAt: Date,
    updatedAt: Date
}
export type categoryData = {
    name:string,
    descricao:string,
    categoriaId:string,
    statusId:string
}

export interface ICategoryRepository{
    save(Data:categoryData): Promise<categorySave>
    getCategory():Promise<categorySave[]>
    deleteCategory(id:string):Promise<categorySave>
}