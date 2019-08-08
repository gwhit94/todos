import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoList: Object[] = [];
  username: string = "";
  title: string = "";
  // u: string = "";
  // t: string = "";
  search: string = "";
  sort: string = "id";

  constructor(private todosService: TodosService) {
    this.todoList = todosService.getAllTodos();
   }
   createTodo(){
    this.todosService.addTodo(this.username, this.title);
    this.todoList = [...this.todosService.getAllTodos()];
   }
   removeTodo(id){
    this.todosService.removeTodo(id);
    this.todoList = [...this.todosService.getAllTodos()];
   }
   markTodo(id){
    this.todosService.markTodo(id);
    this.todoList = [...this.todosService.getAllTodos()];
   }
  //  getTodosByUsername(){
  //    this.todosService.getTodosByUsername(this.u);
  //  }

  ngOnInit() {
  }

}