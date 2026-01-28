import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-window-form',
  imports: [FormsModule, DropDownsModule],
  templateUrl: './window-form.html',
  styleUrl: './window-form.scss'
})
export class WindowFormComponent {
  protected readonly title = signal('');
  protected readonly description = signal('');
  protected readonly category = signal('');
  protected readonly priority = signal('');

  protected readonly categories = ['General', 'Technical', 'Support', 'Billing', 'Other'];
  protected readonly priorities = ['Low', 'Medium', 'High', 'Critical'];

  protected updateTitle(value: string): void {
    this.title.set(value);
  }

  protected updateDescription(value: string): void {
    this.description.set(value);
  }

  protected updateCategory(value: string): void {
    this.category.set(value);
  }

  protected updatePriority(value: string): void {
    this.priority.set(value);
  }
}
