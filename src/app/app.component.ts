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

  handleOnChange(): void {
    
    if (this.textValue.length > 0)
      this.isDisabled = true;
    else
      this.isDisabled = false;
  }

}
