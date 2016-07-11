import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { Angular2TodoAppAppComponent } from './angular2-todo-app.component';

beforeEachProviders(() => [ Angular2TodoAppAppComponent ]);

describe('App: Todo', () =>
{
  it('должно создать приложение',
    inject([ Angular2TodoAppAppComponent ], ( app: Angular2TodoAppAppComponent ) =>
    {
      expect(app).toBeTruthy();
    }));
});
