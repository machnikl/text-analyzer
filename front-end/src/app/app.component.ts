import { Component } from '@angular/core';
import { ApiConnectorWordAnalyzerService } from './io/api-connector-word-analyzer.service';

export enum OnlineStatus {
  ONLINE,
  OFFLINE,
}

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
  public onlineStati = OnlineStatus;
  public onlineStatus = OnlineStatus.OFFLINE;
  public analyzedWords: AnalyzedText[] = [];

  constructor(
    private _apiConnectorWordAnalyzer: ApiConnectorWordAnalyzerService
  ) {}

  public countLetters(letterType: string) {
    this._apiConnectorWordAnalyzer
      .analyzeWords(this.inputValue, letterType)
      .subscribe((data: AnalyzedText) => {
        this.analyzedWords.push(data);
        console.log(this.analyzedWords);
      });
  }

  public switchOnlineStatus(newStatus: OnlineStatus) {
    this.onlineStatus = newStatus;
  }
}
