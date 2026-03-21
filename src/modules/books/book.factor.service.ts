import { BookService } from "./book.service";
import { BookPrismaRepository } from "./repositories/Book.Prisma.Repository";




export class BookfactorService{
    factor(){
        const bookPrismaRepository = new BookPrismaRepository()
        const bookService = new BookService(bookPrismaRepository)
        return bookService
        
    }
}