import { IActivityRepository } from "./repositories/IActivity.repositoy";




export class ActivityService{
    constructor(private iactivityRepository: IActivityRepository){}
    /**
     *Metodo para criar actividade
     */
    async execute(activity:string,pathImg:string){

        if(!activity || !pathImg)
            throw new Error('não foi passado o valor da actividade ou o caminho da imagem')

        return await this.iactivityRepository.save(activity,pathImg)
    }
    /**
     * Metodo para buscar as actividade
     */
    async get(){
        const activities = await this.iactivityRepository.getActivity()
        if(!activities)
            throw new Error('Nenhuma actividade Registrada')

        return activities
    }
}