import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './user.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'todos', component: TodosComponent, canActivate: [UserGuard]},
  { path: 'user/:username', component: UserComponent, canActivate: [UserGuard]},
  { path: '**', redirectTo: '/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Login component
  // username
  // password
  // submit button
    // check to make sure username and password provided
    // if they are, send info to service
// User/Login Service
  // allow to login (save to localstorage) redirect them to their user page
  // get the user (from localstorage)
  // logout (delete local storage) redirect them to the login page
// AuthGuard Protecting = `user/(not the logged in user)` and `/todos`
  // if no one is logged in, send them to login component
  // if a user is logged in allow access to `todos`
  // if the user that's logged in mathes the ???? in `/user/???` allow them access otherwise send them to their user page