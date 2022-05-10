import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AnalyzedText } from '../app.component';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-analyzed-text',
  templateUrl: './analyzed-text.component.html',
  styleUrls: ['./analyzed-text.component.scss'],
})
export class AnalyzedTextComponent implements OnInit {
  @Input() analyzedText!: AnalyzedText;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  constructor() {}

  ngOnInit() {
    Object.entries(this.analyzedText.letterList).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);

      this.pieChartData.labels!.push(key);
      // @ts-ignore
      this.pieChartData.datasets[0].data.push(value);
    });
    this.pieChartData.labels = [...Object.keys(this.analyzedText.letterList)];
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
