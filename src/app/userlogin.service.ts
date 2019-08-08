import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private router: Router) { }

  loginUser(u){
    localStorage.setItem("user", u);
    this.router.navigate(['user/'+u]);
  }

  logout(){
    localStorage.clear();
  }

  get user(){
    return localStorage.getItem("user");
  }

  
}
