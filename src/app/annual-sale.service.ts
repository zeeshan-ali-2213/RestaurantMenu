import { Injectable } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Injectable({
  providedIn: 'root'
})
export class AnnualSaleService {

// Doughnut
public doughnutChartLabels: Label[] = ['HEALTH', 'MANUFACTURING', 'ENERGY', 'TELECOM', 'BANKING', 'INSURANCE'];
public doughnutChartData: ChartDataSets[] = [
 { data: [16, 16, 19, 18,19, 18], label: '11/21/2020' },
];
public doughnutChartOptions: (ChartOptions & { annotation?: any }) = {
  responsive: true,
};
public doughnutChartType: ChartType = 'doughnut';

constructor() { }

ngOnInit() {
}
}
