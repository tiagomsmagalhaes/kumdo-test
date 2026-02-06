import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

export interface GridRow {
  id: number;
  name: string;
  description: string;
  notes: string;
  category: string;
  status: string;
}

@Component({
  selector: 'app-grid-example',
  standalone: true,
  imports: [NgClass, GridModule, ButtonsModule],
  templateUrl: './grid-example.html',
  styleUrl: './grid-example.scss'
})
export class GridExampleComponent {
  protected readonly wrapText = signal(true);

  protected readonly gridData: GridRow[] = [
    {
      id: 1,
      name: 'Widget Alpha',
      description: 'A short description.',
      notes: 'OK',
      category: 'Hardware',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Service Beta Integration Platform',
      description:
        'This is a much longer description that should demonstrate how text wrapping behaves inside a Kendo Grid cell. ' +
        'It contains multiple sentences to really stress-test the wrapping behavior across different column widths.',
      notes:
        'Urgent: please review the integration notes before the next deployment window opens on Monday morning.',
      category: 'Software',
      status: 'Pending Review'
    },
    {
      id: 3,
      name: 'Connector Gamma',
      description:
        'Medium-length description with some additional context about the connector and its intended use case in production.',
      notes: 'No issues found.',
      category: 'Networking',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Platform Delta Enterprise Edition v2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      notes:
        'This item has a very long note as well. It spans several lines and includes detailed instructions: ' +
        'Step 1 — configure the environment. Step 2 — validate the schema. Step 3 — deploy to staging. ' +
        'Step 4 — run integration tests. Step 5 — promote to production.',
      category: 'Cloud',
      status: 'In Development'
    },
    {
      id: 5,
      name: 'Adapter Epsilon',
      description: 'Tiny.',
      notes: '',
      category: 'Hardware',
      status: 'Deprecated'
    },
    {
      id: 6,
      name: 'Module Zeta SuperLongWordWithoutAnySpacesThatShouldTestWordBreakBehaviorInsideTheGridCell',
      description:
        'Descriptionwithaverylongwordthathasnospacesandshouldtriggeroverfloworcsswordbreakhandling. ' +
        'Then some normal text follows after the long word.',
      notes: 'Check word-break / overflow-wrap CSS behavior.',
      category: 'Misc',
      status: 'Active'
    },
    {
      id: 7,
      name: 'Tool Eta',
      description:
        'Description with\nnewline characters\ninside the text\nto see how the grid handles them.',
      notes: 'Line 1\nLine 2\nLine 3',
      category: 'Tools',
      status: 'Active'
    }
  ];

  protected toggleWrap(): void {
    this.wrapText.update(v => !v);
  }
}
