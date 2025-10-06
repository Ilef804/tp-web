"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(booksRepo) {
        this.booksRepo = booksRepo;
    }
    Library.prototype.addBook = function (book) {
        this.booksRepo.add(book);
    };
    Library.prototype.removeBook = function (id) {
        this.booksRepo.remove(id);
    };
    Library.prototype.searchByTitle = function (title) {
        return this.booksRepo.getAll().filter(function (b) { return b.title.toLowerCase().includes(title.toLowerCase()); });
    };
    Library.prototype.borrowBook = function (id) {
        var book = this.booksRepo.findById(id);
        if (book && book.available) {
            book.available = false;
            return true;
        }
        return false;
    };
    Library.prototype.returnBook = function (id) {
        var book = this.booksRepo.findById(id);
        if (book)
            book.available = true;
    };
    return Library;
}());
exports.Library = Library;
