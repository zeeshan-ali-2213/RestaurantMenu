import { Component, OnInit,Input  } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-custom-graph',
  templateUrl: './custom-graph.component.html',
  styleUrls: ['./custom-graph.component.css']
})
export class CustomGraphComponent implements OnInit {

  @Input() ChartData: ChartDataSets[];
  @Input() ChartLabels: Label[];
  @Input() ChartOptions: (ChartOptions & { annotation?: any });
  @Input() ChartColors: Color[];
  @Input() ChartLegend: boolean = true;
  @Input() ChartType;
  @Input() ChartPlugins= [];


  

  constructor() { }

  ngOnInit() {
   
  }
}
