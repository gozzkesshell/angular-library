import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() public book: Book;
  private sub: any;
  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
  }
  ngOnInit() {
    if (!this.book) {
      this.sub = this.route.params.subscribe(params => {
        const id = params['id'];
        this.book = this.bookService.getBookById(id);
      });
    }
  }
  deleteBook(id: string) {
    this.bookService.deleteBook(id);
    if (this.sub) {
      this.router.navigate(['/books']);
    }
    this.ngOnDestroy();
  }
  ngOnDestroy(){
    if (this.sub){
      this.sub.unsubscribe();
    }
  }

}
