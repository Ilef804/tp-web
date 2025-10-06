import { Repository } from "./utils/repository";
import { Book } from "./models/book";
import { Library } from "./services/library";
import { fetchBooks } from "./services/api";

async function main() {
  const booksRepo = new Repository<Book>();
  const library = new Library(booksRepo);

  // Récupération des livres depuis le service API
  const books = await fetchBooks();
  books.forEach(book => library.addBook(book));

  console.log("Tous les livres:");
  console.log(library.booksRepo.getAll());

  // Emprunter un livre
  const borrowed = library.borrowBook(1);
  console.log(borrowed ? "Livre emprunté!" : "Livre non disponible");

  // Rechercher un livre
  console.log("Recherche 'hobbit':", library.searchByTitle("hobbit"));
}

main();
