import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodoAppComponent } from './todo-app.component';
import { TodoService } from '../todo.service';

beforeEachProviders(() => [ TodoAppComponent, TodoService ]);

describe('Component: TodoApp', () =>
{
  it('должно создать экземпляр компонента', inject([ TodoService ], ( todoService: TodoService ) =>
  {
    let component = new TodoAppComponent(todoService);

    expect(component).toBeTruthy();
    expect(component).toBeTruthy();
  }));
});
