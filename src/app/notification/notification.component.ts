import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
  <p>This is a website use cookie to provide better user experience</p>
  <div class="close"><button class="btn" (click)="closeNotification()"></button></div></div>`,
  styles: ["div{margin:10px 0px;padding:10px 20px; text-align:center;}","p{font-size:14px;}",".close{float:right;}"]
})
export class NotificationComponent {
  displayNotification:boolean=false;
  closeNotification(){
    this.displayNotification=true;
  }

}
