import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {
  title = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Z]+[a-zA-Z]*$')
  ]);
  author = new FormControl('', [Validators.required]);
  addBookForm: FormGroup = this.builder.group({
    title: this.title,
    author: this.author
  });
  constructor(private bookService: BookService, private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  addBook(){
    this.bookService.addBook(this.addBookForm.value.title, this.addBookForm.value.author, new Date(Date.now()));
    this.router.navigate(['/books']);
  }
}
