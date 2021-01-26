import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.css']
})
export class MenuTableComponent implements OnInit {

  @Input() dataSource: any;
  @Input() columns: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
