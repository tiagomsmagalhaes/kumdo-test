import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 16 + Kendo UI 12';
  dialogOpened = false;
  windowOpened = false;

  openDialog(): void {
    this.dialogOpened = true;
  }

  closeDialog(): void {
    this.dialogOpened = false;
  }

  openWindow(): void {
    this.windowOpened = true;
  }

  closeWindow(): void {
    this.windowOpened = false;
  }
}
