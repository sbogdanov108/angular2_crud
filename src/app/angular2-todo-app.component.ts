import { Component } from '@angular/core';
import { TodoAppComponent } from './todo-app/todo-app.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-todo-app-app',
  templateUrl: 'angular2-todo-app.component.html',
  styleUrls: ['angular2-todo-app.component.css'],
  directives: [ TodoAppComponent ]
})
export class Angular2TodoAppAppComponent {}
