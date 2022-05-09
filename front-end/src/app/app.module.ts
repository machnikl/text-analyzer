import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleComponent } from './ui/toggle/toggle.component';
import { ButtonComponent } from './ui/button/button.component';
import { TextInputComponent } from './ui/text-input/text-input.component';
import { AnalyzedTextComponent } from './analyzed-text/analyzed-text.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    ButtonComponent,
    TextInputComponent,
    AnalyzedTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
