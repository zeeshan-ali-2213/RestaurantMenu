import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  ProductData: any;
  product: any;
  MenuData:any;
  dataSource: any;
  columns: any[];
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) { 
    this.route.paramMap.subscribe( params => {
      const name = params.get('id');
      this.getDataFromAPI().subscribe(data =>{
        this.MenuData = data[name];   
   
      this.columns = Object.keys(this.MenuData[0]);
  
      
      this.dataSource = new MatTableDataSource<Object>(this.MenuData);
 
      this.dataSource.paginator = this.paginator;
      })
    })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getDataFromAPI(){
    let url = "https://uat-api-menu.findcoder.net/Menu";
    return this.http.get(url);
  }

}
