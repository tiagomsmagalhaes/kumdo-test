import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule, DropDownButtonModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';

import { AppComponent } from './app.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { WindowFormComponent } from './window-form/window-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogFormComponent,
    WindowFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogsModule,
    ButtonsModule,
    DropDownButtonModule,
    DropDownsModule,
    ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
