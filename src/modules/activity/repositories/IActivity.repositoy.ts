export type activitySave = {
    id: string 
    activity: string
    pathImg: string
    createdAt: Date
    updatedAt: Date
}

export interface IActivityRepository{
    save(activity:string,pathImg:string): Promise<activitySave>
    getActivity(): Promise<activitySave[]>
}