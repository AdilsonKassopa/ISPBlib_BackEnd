import { IStatusRepository } from "./repositories/IStatus.repository";



export class StatusService{
    constructor(private istatusRepository: IStatusRepository){}
    async execute(){
        const status = await this.istatusRepository.getStatus()
        
        if(!status)
            throw new Error('nenhum Status encontrado')

        return status
    }
}