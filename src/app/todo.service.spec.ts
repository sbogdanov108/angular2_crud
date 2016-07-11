import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Todo } from './todo';
import { TodoService } from './todo.service';

describe('Todo Service', () =>
{
  beforeEachProviders( () => [ TodoService ] );

  describe('#getAllTodos()', () =>
  {
    it( 'должно возвращать пустой массив по молчанию', inject( [ TodoService ], ( service: TodoService ) =>
    {
      expect( service.getAllTodos() ).toEqual( [] );
    }) );

    it( 'должно возвращать все todos', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo1 = new Todo({ title: 'Привет 1', complete: false });
      let todo2 = new Todo({ title: 'Привет 2', complete: true });

      service.addTodo( todo1 );
      service.addTodo( todo2 );

      expect( service.getAllTodos() ).toEqual( [ todo1, todo2 ] );
    }) );
  });

  describe( '#save(todo)', () =>
  {
    it( 'должно автоматически назначать увеличенный ид', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });

      service.addTodo( todo1 );
      service.addTodo( todo2 );

      expect( service.getTodoById( 1 ) ).toEqual( todo1 );
      expect( service.getTodoById( 2 ) ).toEqual( todo2 );
    }) );
  });

  describe( '#deleteTodoById(id)', () =>
  {
    it( ' должно удалять todo по соответствующему ид', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });

      service.addTodo( todo1 );
      service.addTodo( todo2 );

      expect( service.getAllTodos() ).toEqual([ todo1, todo2 ]);
      service.deleteTodoById( 1 );

      expect( service.getAllTodos() ).toEqual([ todo2 ]);
      service.deleteTodoById( 2 );

      expect( service.getAllTodos() ).toEqual([]);
    }) );

    it( 'не должно ничего удалять, если todo с соответствующим ид не найдено', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo1 = new Todo({ title: 'Hello 1', complete: false });
      let todo2 = new Todo({ title: 'Hello 2', complete: true });

      service.addTodo(todo1 );
      service.addTodo(todo2 );

      expect( service.getAllTodos() ).toEqual([ todo1, todo2 ]);
      service.deleteTodoById( 3 );
      expect( service.getAllTodos() ).toEqual([ todo1, todo2 ]);
    }) );
  });

  describe('#updateTodoById(id, values)', () =>
  {
    it( 'должно возвращать todo с соответствующим ид и обновленными данными', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo = new Todo({ title: 'Hello 1', complete: false });

      service.addTodo( todo );
      let updatedTodo = service.updateTodoById( 1, {
        title: 'новое название'
      } );

      expect( updatedTodo.title ).toEqual( 'новое название');
    }) );

    it( 'должно вернуть null, если todo не найден', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo = new Todo({ title: 'Hello 1', complete: false });

      service.addTodo(todo);
      let updatedTodo = service.updateTodoById( 2, {
        title: 'новое название'
      });

      expect( updatedTodo ).toEqual( null );
    }) );
  });

  describe('#toggleTodoComplete(todo)', () =>
  {
    it( 'должно вернуть обновленный todo с противоположным статусом', inject( [ TodoService ], ( service: TodoService ) =>
    {
      let todo = new Todo({ title: 'Hello 1', complete: false });

      service.addTodo( todo );
      let updatedTodo = service.toggleTodoComplete( todo );

      expect( updatedTodo.complete ).toEqual( true );
      service.toggleTodoComplete( todo );
      expect( updatedTodo.complete ).toEqual( false );
    }) );
  });
});
