import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService
{
  /*
  * Значение для последнего ИД,
  * с помощью которого, мы будем имитировать автоматическое увеличение ИД
  * */
  lastId: number = 0;

  /*
  * Массив, в котором будут храниться записи
  * */
  todos: Todo[] = [];

  constructor() {}

  /*
  * Имитируем метод POST при обращении к /todos
  * */
  addTodo( todo: Todo ): TodoService
  {
    if( !todo.title )
    {
      return;
    }

    if ( !todo.id )
    {
      todo.id = ++this.lastId;
    }

    this.todos.push( todo );

    return this;
  }

  /*
   * Имитируем метод DELETE при обращении к /todos/:id
   * */
  deleteTodoById( id: number ): TodoService
  {
    this.todos = this.todos
      .filter( todo => todo.id !== id );

    return this;
  }

  /*
   * Имитируем метод PUT при обращении к /todos/:id
   * */
  updateTodoById( id: number, values: Object = {} ): Todo
  {
    let todo = this.getTodoById( id );

    if ( !todo )
    {
      return null;
    }

    Object.assign( todo, values );

    return todo;
  }

  /*
   * Имитируем метод GET при обращении к /todos
   * */
  getAllTodos(): Todo[]
  {
    return this.todos;
  }

  /*
   * Имитируем метод GET при обращении к /todos/:id
   * */
  getTodoById( id: number ): Todo
  {
    return this.todos
      .filter( todo => todo.id === id )
      .pop();
  }

  /*
   * Изменить статус записи
   * */
  toggleTodoComplete( todo: Todo )
  {
    let updatedTodo = this.updateTodoById( todo.id, {
      complete: !todo.complete
    } );

    return updatedTodo;
  }
}
