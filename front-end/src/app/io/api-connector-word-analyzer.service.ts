import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConnectorWordAnalyzerService {
  constructor(private _http: HttpClient) {}

  public analyzeWords(word: string, letterType: string): Observable<any> {
    return this._http.get(
      `http://localhost:8080/analyze?text=${word}&letterType=${letterType}`
    );
  }
}
