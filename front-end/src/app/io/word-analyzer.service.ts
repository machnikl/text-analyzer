import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyzedText } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class WordAnalyzerService {
  constructor(private _http: HttpClient) {}

  public fetchWords(word: string, letterType: string): Observable<any> {
    return this._http.get(
      `http://localhost:8080/analyze?text=${word}&letterType=${letterType}`
    );
  }

  public analyzeTextOffline(letterType: string, inputValue: string) {
    let newWord: AnalyzedText = {
      textInput: inputValue,
      letterType: letterType,
      letterList: [],
    };

    const uppercaseInput: string = inputValue.replace(/\s/g, '').toUpperCase();
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
    return newWord;
  }

  public isVowel(letter: string): boolean {
    return /^[aeiou]$/i.test(letter);
  }
}
