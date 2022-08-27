import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Prasun"

  employees: string[] = ['Ram', 'Laxman', 'Sita', 'Hanuman']

  employee = {
    name: 'Prasun',
    designation: 'Analyst',
    salary: 1000,
    location: 'Kolkata',
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    alt: 'profile pic'
  }

  getData(data: number): string {
    if (data === 1)
      return "The number is " + data;
    else
      return "Other Number " + data;
  }

  // event 

  event : string = '';  
  onclick() : void{
    this.event = 'Clicked';
  }

  onMouseHover() : void{
    this.event = 'Mouse Hovered';
  }

  onTextChange() : void{
    this.event = 'Text changed';
  }
}
