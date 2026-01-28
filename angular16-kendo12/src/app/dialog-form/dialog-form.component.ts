import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {
  name = '';
  email = '';
  selectedCountry = '';
  selectedCity = '';

  countries = ['USA', 'Canada', 'Mexico', 'UK', 'Germany'];
  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
}
