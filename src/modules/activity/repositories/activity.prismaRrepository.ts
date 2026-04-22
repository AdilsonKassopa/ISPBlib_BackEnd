import { prismaClient } from "../../../database/client";
import { activitySave, IActivityRepository } from "./IActivity.repositoy";



export class ActivityPrismaRepository implements IActivityRepository{
    async save(activity: string, descricao: string,pathImg:string): Promise<activitySave> {
        const activities = await prismaClient.activity.create({
                data:{
                activity,
                descricao,
                pathImg
                }
            })

            return activities
    }
    async getActivity(): Promise<activitySave[]> {
        const data = await prismaClient.activity.findMany({take:10})
        return data
    }

}