import { Component } from '@angular/core';
import { DialogRef, DialogService, WindowRef, WindowService } from '@progress/kendo-angular-dialog';

import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { WindowFormComponent } from './window-form/window-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 16 + Kendo UI 12';
  dialogOpened = false;
  windowOpened = false;

  progressValue = 35;

  dropdownItems = [
    { text: 'Action 1' },
    { text: 'Action 2' },
    { text: 'Action 3' }
  ];

  private dialogRef?: DialogRef;
  private windowRef?: WindowRef;

  constructor(
    private readonly dialogService: DialogService,
    private readonly windowService: WindowService
  ) {}

  openDialog(): void {
    this.dialogOpened = true;
  }

  closeDialog(): void {
    this.dialogOpened = false;
  }

  openDialogViaService(): void {
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

  openWindow(): void {
    this.windowOpened = true;
  }

  closeWindow(): void {
    this.windowOpened = false;
  }

  openWindowViaService(): void {
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

  onDropdownItemClick(e: { item?: { text?: string } }): void {
    const selected = e?.item?.text ?? 'Unknown';
    // Keeping it simple for demo purposes
    console.log('Dropdown clicked:', selected);
  }

  onActionButtonClick(): void {
    console.log('Kendo button clicked');
  }

  incrementProgress(): void {
    this.progressValue = (this.progressValue + 10) % 110;
  }
}
