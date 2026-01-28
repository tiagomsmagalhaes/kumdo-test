import { Component, inject, signal } from '@angular/core';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DialogRef, DialogService, WindowRef, WindowService } from '@progress/kendo-angular-dialog';
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
  private readonly dialogService = inject(DialogService);
  private readonly windowService = inject(WindowService);

  private dialogRef?: DialogRef;
  private windowRef?: WindowRef;

  protected readonly title = signal('Angular 20 + Kendo UI 20');
  protected readonly dialogOpened = signal(false);
  protected readonly windowOpened = signal(false);

  protected openDialog(): void {
    this.dialogOpened.set(true);
  }

  protected closeDialog(): void {
    this.dialogOpened.set(false);
  }

  protected openDialogViaService(): void {
    this.dialogRef?.close();
    this.dialogRef = this.dialogService.open({
      title: 'Dialog (via DialogService)',
      content: DialogFormComponent,
      width: 450,
      minWidth: 250,
      actions: [{ text: 'Close', primary: true }]
    });

    this.dialogRef.result.subscribe(() => {
      this.dialogRef = undefined;
    });
  }

  protected openWindow(): void {
    this.windowOpened.set(true);
  }

  protected closeWindow(): void {
    this.windowOpened.set(false);
  }

  protected openWindowViaService(): void {
    this.windowRef?.close();
    this.windowRef = this.windowService.open({
      title: 'Window (via WindowService)',
      content: WindowFormComponent,
      width: 500,
      height: 400,
      minWidth: 250
    });

    this.windowRef.result.subscribe(() => {
      this.windowRef = undefined;
    });
  }
}
