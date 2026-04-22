import { prismaClient } from "../../../database/client";
import { IStatusRepository, status } from "./IStatus.repository";


export class StatusPrismaRepository implements IStatusRepository{
   async getStatus(): Promise<status[]> {
        const status = await prismaClient.statu.findMany()
        return status
    }
}