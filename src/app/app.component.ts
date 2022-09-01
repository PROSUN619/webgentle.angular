import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeNames = ['Mike','Tom','Amit','Dipa','Sara'];

  employeeArray = [
    {name: 'Mike', salary: 300, country: 'US'},
    {name: 'Tom', salary: 300, country: 'UK'},
    {name: 'Amit', salary: 300, country: 'IN'},
    {name: 'Dipa', salary: 300, country: 'IN'},
    {name: 'Sara', salary: 300, country: 'CN'}
  ]

  refreshEmployee(){
    this.employeeArray = [
      {name: 'Mike', salary: 300, country: 'US'},
      {name: 'Tom', salary: 300, country: 'UK'},
      {name: 'Amit', salary: 300, country: 'IN'},
      {name: 'Dipa', salary: 300, country: 'IN'},
      {name: 'Sara', salary: 300, country: 'CN'},
      {name: 'Brian', salary: 320, country: 'WI'}
    ]
  }

  refreshEmployees(index: number, employee : any): string{
    return  employee.name;
  }
}
