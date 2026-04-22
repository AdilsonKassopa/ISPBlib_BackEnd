import { AutorService } from "./autor.service";
import { AutorPrismaRepository } from "./repositories/autor.Prisma.Repository";


export class AutorFactorService{
    factor(){
        const autorPrismaRepository = new AutorPrismaRepository()
        const autorService = new AutorService(autorPrismaRepository)

        return autorService
    }
}