import { Component } from '@angular/core';
import { Todo } from '../todo';
// Импортируем наш класс, который мы сможем зарегистрировать в качестве зависимости
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todo-app.component.html',
  styleUrls: [ 'todo-app.component.css' ],
  providers: [ TodoService ]
})
export class TodoAppComponent
{
  newTodo: Todo = new Todo();

  // Попросим систему зависимостей Angular вставить нашу зависимость
  // с именем 'TodoService' и назначить её экземпляр свойству 'todoService'
  constructor( private todoService: TodoService ) {}

  // Наш сервис теперь доступен как this.todoService
  toggleTodoComplete( todo )
  {
    this.todoService.toggleTodoComplete( todo );
  }

  addTodo()
  {
    this.todoService.addTodo( this.newTodo );
    this.newTodo = new Todo();
  }

  removeTodo( todo )
  {
    this.todoService.deleteTodoById( todo.id );
  }

  get todos()
  {
    return this.todoService.getAllTodos();
  }
}
