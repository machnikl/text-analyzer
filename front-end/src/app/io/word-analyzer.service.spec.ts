import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WordAnalyzerService } from './word-analyzer.service';

describe('WordAnalyzerService', () => {
  let service: WordAnalyzerService;
  let httpController: HttpTestingController;
  let sampleData: any;
  let sampleDataConsonants: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WordAnalyzerService);
    httpController = TestBed.inject(HttpTestingController);

    sampleData = {
      textInput: 'supercalifragilisticexpialidocious',
      letterType: 'vowels',
      letterList: { A: 3, U: 2, E: 2, I: 7, O: 2 },
    };

    sampleDataConsonants = {
      textInput: 'supercalifragilisticexpialidocious',
      letterType: 'consonants',
      letterList: {
        P: 2,
        R: 2,
        S: 3,
        C: 3,
        T: 1,
        D: 1,
        F: 1,
        G: 1,
        X: 1,
        L: 3,
      },
    };
  });

  it('should get the correct data from the offline analyze function', () => {
    const result = service.analyzeTextOffline(
      'vowels',
      'supercalifragilisticexpialidocious'
    );

    expect(result).toEqual(sampleData);
  });

  it('should get different data when looking for consonants', () => {
    const result = service.analyzeTextOffline(
      'consonants',
      'supercalifragilisticexpialidocious'
    );

    expect(result).not.toEqual(sampleData);
  });

  it('should handle spaces and tabs correctly - counting only letters', () => {
    const result = service.analyzeTextOffline(
      'consonants',
      '   supercali      fragilisti \tcexpi\n  alido\r cious'
    );

    expect(result.letterList).toEqual(sampleDataConsonants.letterList);
  });

  it('should ignore special characters and numbers - counting only letters', () => {
    const result = service.analyzeTextOffline(
      'consonants',
      '1231supercali/1239902-_.,fragilisticexpialidocious'
    );

    expect(result.letterList).toEqual(sampleDataConsonants.letterList);
  });

  it('should call /analyze and return the correct letter list', () => {
    service
      .fetchWords('supercalifragilisticexpialidocious', 'vowels')
      .subscribe((res) => {
        console.log(res);
        expect(res).toEqual(sampleData);
      });

    const req = httpController.expectOne({
      method: 'GET',
      url: `http://localhost:8080/analyze?text=supercalifragilisticexpialidocious&letterType=vowels`,
    });

    req.flush(sampleData);
  });
});
