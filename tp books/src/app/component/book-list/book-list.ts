import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../classes/Book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css'],
})
export class BookList {
  @Input() books: Book[] = [];
  @Input() categories: string[] = [];

  // Événements pour parent
  @Output() editBook = new EventEmitter<Book>();
  @Output() deleteBook = new EventEmitter<number>();

  onEdit(book: Book) {
    this.editBook.emit(book); // Envoie le livre à éditer
  }

  onDelete(id: number) {
    this.deleteBook.emit(id); // Envoie l'id à supprimer
  }
  trackById(index: number, book: Book) {
  return book.id;
}

}
