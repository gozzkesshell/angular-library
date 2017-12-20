import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import {BooklistComponent} from "../booklist/booklist.component";
import {AddBookFormComponent} from "../add-book-form/add-book-form.component";
import {BookComponent} from "../book/book.component";

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooklistComponent,
    children: []
  },
  { path: 'books/:id', component: BookComponent},
  { path: 'add', component: AddBookFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModuleModule { }
