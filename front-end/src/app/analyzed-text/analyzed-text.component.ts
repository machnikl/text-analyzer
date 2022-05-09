import { Component, Input, OnInit } from '@angular/core';
import { AnalyzedText } from '../app.component';

@Component({
  selector: 'app-analyzed-text',
  templateUrl: './analyzed-text.component.html',
  styleUrls: ['./analyzed-text.component.scss'],
})
export class AnalyzedTextComponent implements OnInit {
  @Input() analyzedText!: AnalyzedText;

  constructor() {}

  ngOnInit(): void {}
}
