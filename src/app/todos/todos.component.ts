import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  username: string = "";
  title: string = "";
  todoList: Object[] = [];
  u: string = "";

  constructor(private todosService: TodosService) {
    this.todoList = todosService.getAllTodos();
    
   }
   createTodo(){
    this.todosService.addTodo(this.username, this.title);
   }
   removeTodo(id){
    this.todosService.removeTodo(id);
   }
  //  getTodosByUsername(){
  //    this.todosService.getTodosByUsername(this.u);
  //  }

  ngOnInit() {
  }

}
