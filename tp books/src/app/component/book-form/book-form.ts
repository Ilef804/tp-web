import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../../classes/Book';
import { FormsModule } from '@angular/forms'; // for ngModel, ngForm
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.html',
  imports: [CommonModule, FormsModule], 
  styleUrls: ['./book-form.css']
})
export class BookForm implements OnChanges {
  // Form fields
  title = '';
  author = '';
  publisherEmail = '';
  publisherPhone = '';
  releaseDate: string = '';
  category = '';
  isAvailable = false;
  stock = 0;

  categories: string[] = [
    "Roman",
    "Science",
    "Histoire",
    "Informatique",
    "Art",
    "Autres"
  ];

  @Input() bookToEdit: Book | null = null; // Book à éditer
  @Output() addBook = new EventEmitter<Book>();

  // Précharge le formulaire quand bookToEdit change
  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookToEdit'] && this.bookToEdit) {
      this.title = this.bookToEdit.title;
      this.author = this.bookToEdit.author;
      this.publisherEmail = this.bookToEdit.publisherEmail;
      this.publisherPhone = this.bookToEdit.publisherPhone;
      this.releaseDate = this.bookToEdit.releaseDate;
      this.category = this.bookToEdit.category;
      this.isAvailable = this.bookToEdit.isAvailable;
      this.stock = this.bookToEdit.stock||0;
    }
  }

  onSubmit(bookForm: NgForm) {
    if (!bookForm.valid) return;

    const newBook: Book = {
      id: this.bookToEdit ? this.bookToEdit.id : Date.now(),
      title: this.title,
      author: this.author,
      publisherEmail: this.publisherEmail,
      publisherPhone: this.publisherPhone,
      releaseDate: this.releaseDate,
      category: this.category,
      isAvailable: this.isAvailable,
      stock: this.stock
    };

    this.addBook.emit(newBook);

    // Reset après ajout si ce n’était pas une édition
    bookForm.resetForm();
    if (this.bookToEdit) this.bookToEdit = null;
  }
}
