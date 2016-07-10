import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2TodoAppAppComponent } from '../app/angular2-todo-app.component';

beforeEachProviders(() => [Angular2TodoAppAppComponent]);

describe('App: Angular2TodoApp', () => {
  it('should create the app',
      inject([Angular2TodoAppAppComponent], (app: Angular2TodoAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-todo-app works!\'',
      inject([Angular2TodoAppAppComponent], (app: Angular2TodoAppAppComponent) => {
    expect(app.title).toEqual('angular2-todo-app works!');
  }));
});
