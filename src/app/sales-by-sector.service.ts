import { Injectable } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Injectable({
  providedIn: 'root'
})
export class SalesBySectorService {
// Doughnut
public doughnutChartLabels: Label[] = ['HEALTH', 'MANUFACTURING', 'ENERGY', 'TELECOM', 'BANKING', 'INSURANCE'];
public doughnutChartData: ChartDataSets[] = [
 { data: [16, 16, 19, 18,19, 18], label: '11/21/2020' },
];
public doughnutChartOptions: (ChartOptions & { annotation?: any }) = {
  responsive: true,
};
public doughnutChartType: ChartType = 'doughnut';
public doughnutChartColors: any = [
  {
    backgroundColor: [
      'rgba(186, 129, 186,0.3)',
      'rgba(218, 22, 87 ,0.3)',
      'rgba(255, 195, 0,0.3)',
      'rgba(255, 87, 51 ,0.3)',
      'rgba(199, 0, 57,0.3)',
      'rgba(88, 24, 69,0.3)',
    ]
  }
];
constructor() { }

ngOnInit() {
}
}
