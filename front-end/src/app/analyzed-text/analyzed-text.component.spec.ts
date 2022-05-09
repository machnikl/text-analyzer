import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzedTextComponent } from './analyzed-text.component';

describe('AnalyzedTextComponent', () => {
  let component: AnalyzedTextComponent;
  let fixture: ComponentFixture<AnalyzedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzedTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
