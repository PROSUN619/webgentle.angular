import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnId: string = 'btnSave';
  textValue: string = '';
  isDisabled: boolean = true;
  src = "https://images.unsplash.com/photo-1661692429215-ea082874a29a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  width= "200"

  handleOnChange(): void {

    if (this.textValue.length > 0)
      this.isDisabled = true;
    else
      this.isDisabled = false;
  }

  foo():boolean{
    return false;
  }
}
