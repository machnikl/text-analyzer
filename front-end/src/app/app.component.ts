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
  public offlineLetters: any = {};

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
      this.analyzeTextOffline(letterType);
    }
  }

  public analyzeTextOffline(letterType: string) {
    let newWord: AnalyzedText = {
      textInput: this.inputValue,
      letterType: letterType,
      letterList: [],
    };

    const uppercaseInput: string = this.inputValue.toUpperCase();
    const charArray: string[] = uppercaseInput.split('');

    this.checkLettersForAnalysis(letterType === 'vowels', charArray);

    newWord.letterList = this.offlineLetters;
    this.analyzedWords.push(newWord);
    this.offlineLetters = {};
  }

  public checkLettersForAnalysis(isVowel: boolean, charArray: string[]) {
    for (let i = 0; i < charArray.length; i++) {
      if (isVowel ? this.isVowel(charArray[i]) : !this.isVowel(charArray[i])) {
        const currentCount: number = !isNaN(this.offlineLetters[charArray[i]])
          ? this.offlineLetters[charArray[i]]
          : 0;
        this.offlineLetters[charArray[i]] = currentCount + 1;
      }
    }
  }

  public isVowel(letter: string): boolean {
    return /^[aeiou]$/i.test(letter);
  }
}
