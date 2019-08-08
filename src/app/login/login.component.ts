import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private allUserInfo: Object[] = [];
  username: string = "";
  password: string = "";


  constructor(private userloginService: UserloginService) {

  }
  login(){
    this.userloginService.loginUser(this.username, this.password);
    this.allUserInfo = this.userloginService.getAllUserInfo();
    console.log(this.allUserInfo);
  }

  ngOnInit() {
  }

}
