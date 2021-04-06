import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Todo, TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  todos: Todo[] = [];

  todoTitle = '';

  loading = false;

  constructor(private todosService: TodoService) {

  }

  ngOnInit() {
   this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false
    }) .subscribe(todo => {
      console.log(todo);
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
      this.todosService.removeTodos(id)
      .subscribe(response => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id).subscribe(todo => {
      this.todos.find(t => t.id === todo.id).completed = true;
    });
  }

}
