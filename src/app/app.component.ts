import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'APP WORKS!';
  books;

  constructor(private http: Http) {
    http
      .get('http://localhost:3000/books.json')
      .subscribe((res) => (this.books = res.json()));
  }
}
