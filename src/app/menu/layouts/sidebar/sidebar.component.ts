import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  viewCategories(){
    const id="categories"
    this.router.navigate(['/menu/Categories',id]);
  }
  viewProducts(){
    const id="products"
    this.router.navigate(['/menu/Products',id]);
  }

}
