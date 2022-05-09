import { Component } from '@angular/core';
import { ApiConnectorWordAnalyzerService } from './io/api-connector-word-analyzer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public inputValue = '';

  constructor(
    private _apiConnectorWordAnalyzer: ApiConnectorWordAnalyzerService
  ) {}

  public countLetters(letterType: string) {
    this._apiConnectorWordAnalyzer
      .analyzeWords(this.inputValue, letterType)
      .subscribe((data) => console.log(data));
  }
}
