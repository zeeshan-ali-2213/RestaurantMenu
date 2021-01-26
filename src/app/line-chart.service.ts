import { Injectable } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Injectable({
  providedIn: 'root'
})
export class LineChartService {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 70, 100, 112,204, 199, 200, 150,120, 89], label: '11/21/2020' },
  ];
  public lineChartLabels: Label[] = [' ','9:00 AM',' ', '11:00 AM',' ', '1:00 PM',' ', '3:00 PM',' ',];
  public lineChartOptions: (ChartOptions & { annotation?: any }) = {
    responsive: true,
    };
  public lineChartColors: Color[] = [
    {
      borderColor: 'transparent',
      backgroundColor: 'rgba(186, 129, 186,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }
}
