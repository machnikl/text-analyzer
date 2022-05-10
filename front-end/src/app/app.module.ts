import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleComponent } from './ui/toggle/toggle.component';
import { ButtonComponent } from './ui/button/button.component';
import { TextInputComponent } from './ui/text-input/text-input.component';
import { AnalyzedTextComponent } from './analyzed-text/analyzed-text.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { NoSpecialCharactersDirective } from './directives/no-special-characters.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    ButtonComponent,
    TextInputComponent,
    AnalyzedTextComponent,
    NoSpecialCharactersDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
