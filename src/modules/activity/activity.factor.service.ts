import { ActivityService } from "./activity.service";
import { ActivityPrismaRepository } from "./repositories/activity.prismaRrepository";



export class ActivityFactoryService{
    factory(){
        const activityPrismaRepository = new ActivityPrismaRepository()
        const activityService = new ActivityService(activityPrismaRepository)
        return activityService
    }
}