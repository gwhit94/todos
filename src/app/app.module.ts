import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { TodolistComponent } from './todolist/todolist.component';
import { MousefocusDirective } from './mousefocus.directive';
import { MissedbirthdayDirective } from './missedbirthday.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserComponent,
    FilterPipe,
    SortPipe,
    TodolistComponent,
    MousefocusDirective,
    MissedbirthdayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
