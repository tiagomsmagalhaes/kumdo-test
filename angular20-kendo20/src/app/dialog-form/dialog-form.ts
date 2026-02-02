import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-dialog-form',
  standalone: true,
  imports: [FormsModule, DropDownsModule],
  templateUrl: './dialog-form.html',
  styleUrl: './dialog-form.scss'
})
export class DialogFormComponent {
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly country = signal('');
  protected readonly city = signal('');

  protected readonly countries = ['USA', 'Canada', 'UK', 'Germany', 'France'];
  protected readonly cities = ['New York', 'London', 'Paris', 'Berlin', 'Toronto'];

  protected updateName(value: string): void {
    this.name.set(value);
  }

  protected updateEmail(value: string): void {
    this.email.set(value);
  }

  protected updateCountry(value: string): void {
    this.country.set(value);
  }

  protected updateCity(value: string): void {
    this.city.set(value);
  }
}
