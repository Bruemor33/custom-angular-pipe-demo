import { Component } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Array<Book> = [
    {
      title: 'The Eye of the World',
      author: 'Robert Jordan'
    },
    {
      title: 'Three Sips of Gin',
      author: 'Tim Bax'
    },
    {
      title: null,
      author: 'Patrick Rothfuss'
    },
    {
      title: 'The Way of Kings',
      author: null
    },
    {
      title: 'Forgotten Soldiers',
      author: null
    }
  ]

  constructor() { }

}
