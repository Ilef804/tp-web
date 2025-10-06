import { Book } from "../models/book";
import { Repository } from "../utils/repository";

export class Library {
   public booksRepo: Repository<Book>;

  constructor(booksRepo: Repository<Book>) {
    this.booksRepo = booksRepo;
  }

  addBook(book: Book): void {
    this.booksRepo.add(book);
  }

  removeBook(id: number): void {
    this.booksRepo.remove(id);
  }

  searchByTitle(title: string): Book[] {
    return this.booksRepo.getAll().filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
  }

  borrowBook(id: number): boolean {
    const book = this.booksRepo.findById(id);
    if (book && book.available) {
      book.available = false;
      return true;
    }
    return false;
  }

  returnBook(id: number): void {
    const book = this.booksRepo.findById(id);
    if (book) book.available = true;
  }
}

