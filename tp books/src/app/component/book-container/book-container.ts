import { Component } from '@angular/core';
import { Book } from '../../../classes/Book';
import { BookList } from '../book-list/book-list';
import { BookForm } from '../book-form/book-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-container',
  imports: [BookList, BookForm, FormsModule],
  templateUrl: './book-container.html',
  styleUrls: ['./book-container.css'],
})
export class BookContainer {
  books: Book[] = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      publisherEmail: "orwell@books.com",
      publisherPhone: "+21620000001",
      releaseDate: "1949-06-08",
      category: "Roman",
      isAvailable: true,
      stock: 12
    },
    {
      id: 2,
      title: "L'Univers Scientifique",
      author: "Hubert Reeves",
      publisherEmail: "reeves@science.com",
      publisherPhone: "+21620000002",
      releaseDate: "1995-02-14",
      category: "Science",
      isAvailable: false,
      stock: 0
    },
    {
      id: 3,
      title: "Histoire de la Tunisie",
      author: "Mohamed Talbi",
      publisherEmail: "talbi@history.com",
      publisherPhone: "+21620000003",
      releaseDate: "2000-10-01",
      category: "Histoire",
      isAvailable: true,
      stock: 8
    }
  ];

  categories: string[] = [
    "Roman",
    "Science",
    "Histoire",
    "Informatique",
    "Art",
    "Autres"
  ];

  // Book sélectionné pour édition
  bookToEdit: Book | null = null;

  // Ajout d’un nouveau livre
  onAddBook(book: Book) {
    if (this.bookToEdit) {
      // Si on est en mode édition
      const index = this.books.findIndex(b => b.id === this.bookToEdit!.id);
      if (index !== -1) {
        this.books[index] = book;
      }
      this.bookToEdit = null; // Revenir en mode ajout
    } else {
      this.books.push(book);
    }
  }

  // Supprimer un livre
  onDeleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }

  // Préparer le livre pour édition
  onEditBook(book: Book) {
    this.bookToEdit = { ...book }; // Copie pour ne pas modifier directement
  }
  searchTerm: string = '';

get filteredBooks(): Book[] {
  return this.books.filter(book => 
    book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
sortKey: 'category' | 'isAvailable' | '' = '';

get sortedBooks(): Book[] {
  let books = [...this.filteredBooks];
  if (this.sortKey === 'category') {
    books.sort((a, b) => a.category.localeCompare(b.category));
  } else if (this.sortKey === 'isAvailable') {
    books.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
  }
  return books;
}

  

}
