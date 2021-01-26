import { Component, OnInit } from '@angular/core';
import { LineChartService } from '../line-chart.service';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AnnualSaleService } from '../annual-sale.service';
import { MonthlySaleService } from '../monthly-sale.service';
import { SalesBySectorService } from '../sales-by-sector.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dailyPerformanceChartData: any[];
  dailyPerformanceChartLabels: Label[];
  dailyPerformanceChartOptions: (ChartOptions & { annotation?: any });
  dailyPerformanceChartColors: Color[];
  dailyPerformanceChartLegend: boolean;
  dailyPerformanceChartType;
  dailyPerformanceChartPlugins= [];

  monthlyPerformanceChartData: any[];
  monthlyPerformanceChartLabels: Label[];
  monthlyPerformanceChartOptions: (ChartOptions & { annotation?: any });
  monthlyPerformanceChartColors: Color[];
  monthlyPerformanceChartLegend: boolean;
  monthlyPerformanceChartType;
  monthlyPerformanceChartPlugins= [];

  annualSalesChartData: any[];
  annualSalesChartOptions: (ChartOptions & { annotation?: any });
  annualSalesChartLabels: Label[];
  annualSalesChartType;

  SalesBySectorChartData: any[];
  SalesBySectorChartOptions: (ChartOptions & { annotation?: any });
  SalesBySectorChartLabels: Label[];
  SalesBySectorChartType;
  SalesBySectorChartColors: Color[];


   constructor(
    private service: LineChartService,
    private monthlyChartService: MonthlySaleService,
    private annualChartService: AnnualSaleService,
    private salesbySectorChartService: SalesBySectorService,

    ) { }
 
   ngOnInit() {
     // Daily Chart Initialization
     this.dailyPerformanceChartData = this.service.lineChartData;
     this.dailyPerformanceChartLabels = this.service.lineChartLabels;
     this.dailyPerformanceChartOptions = this.service.lineChartOptions;
     this.dailyPerformanceChartColors = this.service.lineChartColors;
     this.dailyPerformanceChartLegend = this.service.lineChartLegend;
     this.dailyPerformanceChartType = this.service.lineChartType;
     this.dailyPerformanceChartPlugins = this.service.lineChartPlugins;

     // Monthly Chart Initialization
     this.monthlyPerformanceChartData = this.monthlyChartService.lineChartData;
     this.monthlyPerformanceChartLabels = this.monthlyChartService.lineChartLabels;
     this.monthlyPerformanceChartOptions = this.monthlyChartService.lineChartOptions;
     this.monthlyPerformanceChartColors = this.monthlyChartService.lineChartColors;
     this.monthlyPerformanceChartLegend = this.monthlyChartService.lineChartLegend;
     this.monthlyPerformanceChartType = this.monthlyChartService.lineChartType;
     this.monthlyPerformanceChartPlugins = this.monthlyChartService.lineChartPlugins;

    //Annual Chart Initialization
    this.annualSalesChartData = this.annualChartService.doughnutChartData;
    this.annualSalesChartOptions = this.annualChartService.doughnutChartOptions;
    this.annualSalesChartLabels = this.annualChartService.doughnutChartLabels;
    this.annualSalesChartType = this.annualChartService.doughnutChartType;

    //Sales By Sector Chart Initialization
    this.SalesBySectorChartData = this.salesbySectorChartService.doughnutChartData;
    this.SalesBySectorChartOptions = this.salesbySectorChartService.doughnutChartOptions;
    this.SalesBySectorChartLabels = this.salesbySectorChartService.doughnutChartLabels;
    this.SalesBySectorChartType = this.salesbySectorChartService.doughnutChartType;
    this.SalesBySectorChartColors = this.salesbySectorChartService.doughnutChartColors;


   }
 
}
