import { Component, inject, signal } from '@angular/core';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DialogRef, DialogService, WindowRef, WindowService } from '@progress/kendo-angular-dialog';
import { ButtonsModule, DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { DialogFormComponent } from './dialog-form/dialog-form';
import { WindowFormComponent } from './window-form/window-form';
import { GridExampleComponent } from './grid-example/grid-example';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DialogsModule,
    ButtonsModule,
    DropDownButtonModule,
    DropDownsModule,
    ProgressBarModule,
    DialogFormComponent,
    WindowFormComponent,
    GridExampleComponent
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

  protected readonly progressValue = signal(35);

  protected readonly dropdownItems = [
    { text: 'Action 1' },
    { text: 'Action 2' },
    { text: 'Action 3' }
  ];

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

  protected onDropdownItemClick(e: any): void {
    const selected = e?.item?.text ?? 'Unknown';
    console.log('Dropdown clicked:', selected);
  }

  protected onActionButtonClick(): void {
    console.log('Kendo button clicked');
  }

  protected incrementProgress(): void {
    const next = this.progressValue() + 10;
    this.progressValue.set(next > 100 ? 0 : next);
  }
}
