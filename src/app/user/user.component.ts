import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  username: string = "";
  title: string = "";
  todoList: Object[] = [];
  u: string = "";

  constructor(private todosService: TodosService, private actr: ActivatedRoute) {
    this.username = actr.snapshot.params.username;
    this.todoList = todosService.getTodosByUsername(this.username);
    
   }
   createTodo(){
    this.todosService.addTodo(this.username, this.title);
    this.todoList = [...this.todosService.getTodosByUsername(this.username)];
   }
   removeTodo(id){
    this.todosService.removeTodo(id);
    this.todoList = [...this.todosService.getTodosByUsername(this.username)];
   }
   markTodo(id){
    this.todosService.markTodo(id);
    this.todoList = [...this.todosService.getTodosByUsername(this.username)];
   }
  //  getTodosByUsername(){
  //    this.todosService.getTodosByUsername(this.u);
  //  }

  ngOnInit() {
  }

}
