import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import {AppRoutingModuleModule} from "./app-routing-module/app-routing-module.module";
import {BookService} from "./services/book.service";
import {MatListModule, MatToolbarModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooklistComponent,
    AddBookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
