import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MenuServiceService } from '../menu-service.service';
import { Products } from '../products';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-allmenu',
  templateUrl: './allmenu.component.html',
  styleUrls: ['./allmenu.component.css']
})
export class AllmenuComponent implements AfterViewInit,  OnInit {
  MenuData:any;
  Drugs: object [];
  tableData: any;
  tableHeader:any;
  tableColumn: any[];
  constructor(private service: MenuServiceService, private router: Router, private route:ActivatedRoute) { 
    
  }

  
  ngOnInit() {
    this.tableData = this.service.dataSource;
    this.tableColumn = this.service.columns;
    
  }
  
  ngAfterViewInit() {
    
  }

  editProduct(id){
    this.router.navigate(['/menu/EditProduct',id]);
  }
  viewProduct(id){
    this.router.navigate(['/menu/Product',id]);
  }
  deleteProduct(id){
    this.service.getDataFromAPI().subscribe( data => {
      let product = data["products"];
          let y =product.find(x => x.productID ===id);
          alert(JSON.stringify(y));
    })
    
  }

}
