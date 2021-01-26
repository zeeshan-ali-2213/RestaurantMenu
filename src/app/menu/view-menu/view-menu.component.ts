import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
   showData: any[];

  constructor(private service : ProductService) { 
    
  }

  ngOnInit(): void {
    this.showData = this.service.dataProduct;
  }


}
