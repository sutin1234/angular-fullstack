import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@myorg/data';
import { Observable } from 'rxjs';

// interface Todo {
//   title: string;
// }

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  todos: Observable<Todo[]>;

  constructor(http: HttpClient) {
    this.todos = http.get<Todo[]>('/api/todos');
  }
}
