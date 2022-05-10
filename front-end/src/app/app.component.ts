import { Component } from '@angular/core';
import { WordAnalyzerService } from './io/word-analyzer.service';

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

  constructor(private _wordAnalyzerService: WordAnalyzerService) {}

  public analyzeWords(letterType: string) {
    if (this.isOnline) {
      this._wordAnalyzerService
        .fetchWords(this.inputValue, letterType)
        .subscribe((data: AnalyzedText) => {
          this.analyzedWords.unshift(data);
        });
    } else {
      this.analyzedWords.unshift(
        this._wordAnalyzerService.analyzeTextOffline(
          letterType,
          this.inputValue
        )
      );
    }
  }
}
