
export type status = {
    id: string,
    status: String
    createdAt: Date
    updatedAt: Date

}

export interface IStatusRepository{
    getStatus():Promise<status[]>
}