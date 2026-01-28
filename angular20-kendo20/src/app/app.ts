import { Component, signal } from '@angular/core';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogFormComponent } from './dialog-form/dialog-form';
import { WindowFormComponent } from './window-form/window-form';

@Component({
  selector: 'app-root',
  imports: [
    DialogsModule,
    ButtonsModule,
    DropDownsModule,
    DialogFormComponent,
    WindowFormComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular 20 + Kendo UI 20');
  protected readonly dialogOpened = signal(false);
  protected readonly windowOpened = signal(false);

  protected openDialog(): void {
    this.dialogOpened.set(true);
  }

  protected closeDialog(): void {
    this.dialogOpened.set(false);
  }

  protected openWindow(): void {
    this.windowOpened.set(true);
  }

  protected closeWindow(): void {
    this.windowOpened.set(false);
  }
}
