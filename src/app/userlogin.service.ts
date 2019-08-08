import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private allUserInfo: Object[] = [];
  username: string = "";
  password: string = "";

  'u': string;
  'p': string;
  // u = username p = password
  loginUser(u, p){
    if (!u || !p){
      console.log("enter a username AND password please");
      return;
    }
    let userInfo = {
      username: u,
      password: p
    }
    this.allUserInfo.push(userInfo);
  }
  getAllUserInfo(){
    return this.allUserInfo;
  }

  constructor() { }
}
