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
    location: 'Kolkata'
  }

  getData(data: number): string {
    if (data === 1)
      return "The number is " + data;
    else
      return "Other Number " + data;
  }
}
