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
          this.analyzedWords.unshift(data);
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
    let tmpLetterList: any = {};

    for (let i = 0; i < charArray.length; i++) {
      if (
        letterType === 'vowels'
          ? this.isVowel(charArray[i])
          : !this.isVowel(charArray[i])
      ) {
        const currentCount: number = !isNaN(tmpLetterList[charArray[i]])
          ? tmpLetterList[charArray[i]]
          : 0;
        tmpLetterList[charArray[i]] = currentCount + 1;
      }
    }

    newWord.letterList = tmpLetterList;
    this.analyzedWords.unshift(newWord);
  }

  public isVowel(letter: string): boolean {
    return /^[aeiou]$/i.test(letter);
  }
}
