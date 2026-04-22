import { StatusPrismaRepository } from "./repositories/status.prismaRepository";
import { StatusService } from "./status.service";



export class StatusFactoryService{
    factory(){
        const statusPrismaRepository = new StatusPrismaRepository()
        const statusService = new StatusService(statusPrismaRepository)
        
        return statusService
    }
}