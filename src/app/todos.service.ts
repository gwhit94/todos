import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Object[] = [];
  'username': string;
  'title': string;
  'id': number;
  'u': string;
  private nextId: number = 1;

  // u = username parameter / t = title parameter
  addTodo(u, t){
    let newTodo = {
      username: u,
      title: t,
      id: this.nextId,
    }
    this.nextId++;
    this.todos.push(newTodo);
  }
  removeTodo(id){
    let idx = this.todos.findIndex(todo => todo['id'] === id);
    this.todos.splice(idx, 1);
  }
  getTodosByUsername(u){
    return this.todos.filter(todo => todo['username'] === u);
  }
  getAllTodos(){
    return this.todos;
  }


  constructor() { }
}
