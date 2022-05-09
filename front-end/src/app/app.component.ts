import { Component } from '@angular/core';
import { ApiConnectorWordAnalyzerService } from './io/api-connector-word-analyzer.service';

export interface AnalyzedText {
  textInput: string;
  letterType: string;
  letterList: Array<{ [letter: string]: number }>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public inputValue = '';
  public isOnline = false;
  public analyzedWords: AnalyzedText[] = [];

  constructor(
    private _apiConnectorWordAnalyzer: ApiConnectorWordAnalyzerService
  ) {}

  public countLetters(letterType: string) {
    if (this.isOnline) {
      this._apiConnectorWordAnalyzer
        .analyzeWords(this.inputValue, letterType)
        .subscribe((data: AnalyzedText) => {
          this.analyzedWords.push(data);
        });
    } else {
    }
  }

  public switchOnlineStatus() {
    console.log(this.isOnline);
  }

  public analyzeTextOffline() {
    // logic for offline analysis
  }
}
