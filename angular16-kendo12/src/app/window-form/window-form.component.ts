import { Component } from '@angular/core';

@Component({
  selector: 'app-window-form',
  templateUrl: './window-form.component.html',
  styleUrls: ['./window-form.component.scss']
})
export class WindowFormComponent {
  title = '';
  description = '';
  selectedPriority = '';
  selectedStatus = '';

  priorities = ['Low', 'Medium', 'High', 'Critical'];
  statuses = ['Open', 'In Progress', 'Completed', 'On Hold'];
}
