import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuServiceService } from './menu/menu-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  ProductData: any;
  dataProduct: any;
  categoryData: any;
  dataCategory: any;
  modifierTypeData: any;
  title: any="Products";
  datamodifierType: any;
  modifiersName: any[];
  constructor(private service : MenuServiceService, private route: ActivatedRoute) { 

    
  }
  ngOnInit(){
    
  }
}
