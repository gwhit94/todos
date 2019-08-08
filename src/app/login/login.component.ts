import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  
  constructor(private userloginService: UserloginService) {
  }

  login(){
    if (!this.username || !this.password){
      console.log("enter a username AND password please");
      return;
    }
    this.userloginService.loginUser(this.username);
  }

  ngOnInit() {
  }

}
