import { prismaClient } from "../../../database/client";
import { activitySave, IActivityRepository } from "./IActivity.repositoy";



export class ActivityPrismaRepository implements IActivityRepository{
    async save(activity: string, pathImg: string): Promise<activitySave> {
        const activities = await prismaClient.activity.create({
                data:{
                activity,
                pathImg
                }
            })

            return activities
    }
    async getActivity(): Promise<activitySave[]> {
        const data = await prismaClient.activity.findMany()
        return data
    }

}