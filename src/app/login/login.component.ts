import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  //templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
  template: `<div id = "mydiv">This is from templete</div>`,
  styles : ['#mydiv{color:red}']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
