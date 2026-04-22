export type activitySave = {
    id: string 
    activity: string
    descricao: string
    pathImg: string
    createdAt: Date
    updatedAt: Date
}

export interface IActivityRepository{
    save(activity:string,descricao:string,pathImg:string): Promise<activitySave>
    getActivity(): Promise<activitySave[]>
}