import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Todo } from './todo';

describe( 'Todo', () =>
{
  it( 'должно создать экзепляр класса', () =>
  {
    expect( new Todo() ).toBeTruthy();
  });

  it( 'должно принять значения в конструктор', () =>
  {
    let todo = new Todo( {
      title: 'привет',
      complete: true
    } );

    expect( todo.title ).toEqual( 'привет' );
    expect( todo.complete ).toEqual( true );
  });
});
