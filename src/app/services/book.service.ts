import {Book} from "../models/book";
import {UUID} from "angular2-uuid";

export class BookService{
  private books: Book[];
  constructor(){
    this.books = [];
    this.books.push(new Book(UUID.UUID(), "LOl", "KEK", new Date(Date.now())));
    this.books.push(new Book(UUID.UUID(), "TITLE", "AUTHOR", new Date(Date.now())));
    this.books.push(new Book('1b0854f6-e50e-11e7-80c1-9a214cf093ae', "TITLE", "AUTHOR", new Date(Date.now())));
  }
  getBooks(){
    return Array.from(this.books);
  }
  getBookById(id: string){
    return this.books.find( book => book.getId() === id);
  }
  addBook(title: string, author: string, date: Date){
    this.books.push( new Book(UUID.UUID(), title, author, date));
  }
  deleteBook(id: string) {
    this.books.filter(book => book.getId() !== id);
  }
}
