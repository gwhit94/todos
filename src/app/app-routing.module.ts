import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'todos', component: TodosComponent},
  { path: 'user/:username', component: UserComponent},
  { path: '**', redirectTo: '/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
