import { Directive, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '.birthday'
})
export class MissedbirthdayDirective implements OnInit {
  @Input() birthday: string;
  myBday: Date = new Date("06/03/1994");

  constructor() { }

  @HostBinding('class.missed') private missed: boolean;
  @HostBinding('class.is-older') private isOlder: boolean;

  ngOnInit(){
    let userBday = new Date(this.birthday);

    this.isOlder = userBday < this.myBday;    

    let today = new Date();
    if(userBday.getMonth() < today.getMonth()){
      this.missed = true;
    } else if( (userBday.getMonth() === today.getMonth() ) && (userBday.getDate() < today.getDate()) ){
      this.missed = true;
    } else {
      this.missed = false;
    }
  }
  

}