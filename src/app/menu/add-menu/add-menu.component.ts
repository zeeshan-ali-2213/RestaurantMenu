import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  ProductData: any;
  paramRoute = false;
  modifierData: any;
  categoryData: any;
  sizeRange = ['1"','2"','3"','4"','5"','6"','7"'];
  constructor(private route:ActivatedRoute, private service: MenuServiceService) { 
    this.getModifiers();
    this.getCategories();
    this.route.paramMap.subscribe( params => {
      const ID = Number(params.get('id'));
      if(ID > 0){
        this.paramRoute = true;
        this.service.getDataFromAPI().subscribe( data => {
          
          this.ProductData = data["products"];
          let y =this.ProductData.find(x => x.productID ===ID);
          this.createUser.patchValue({
            productID: y.productID,
            categoryID: y.categoryID,
            title: y.title,
            sku: y.sku,
            price: y.price,
            sizes: y.sizes.name,
            sortOrder: y.sortOrder,
            imageId: y.imageId,
            productType: y.productType,
            modifiers: y.modifiers,
            composites: y.composites
          });
        });
      }
    })
  }

  ngOnInit(): void {
  }

  createUser = new FormGroup({
    productID: new FormControl(''),
    categoryID: new FormControl(''),
    guid: new FormControl('0e1091b9-625e-4a53-98fa-236050988091'),
    title: new FormControl(''),
    sku: new FormControl(''),
    price: new FormControl(''),
    sizes: new FormControl(''),
    sortOrder: new FormControl(''),
    imageId: new FormControl(''),
    productType: new FormControl(''),
    modifiers: new FormControl(''),
    composites: new FormControl('')
   });
  get productID(){
    return this.createUser.get('productID')
  }
  get categoryID(){
    return this.createUser.get('categoryID')
  }
  get guid(){
    return this.createUser.get('guid')
  }
  get title(){
    return this.createUser.get('title')
  }
  get sku(){
    return this.createUser.get('sku')
  }
  get price(){
    return this.createUser.get('price')
  }
  get sizes(){
    return this.createUser.get('sizes')
  }
  get sortOrder(){
    return this.createUser.get('sortOrder')
  }
  get imageId(){
    return this.createUser.get('imageId')
  }
  get productType(){
    return this.createUser.get('productType')
  }
  get modifiers(){
    return this.createUser.get('modifiers')
  }
  get composites(){
    return this.createUser.get('composites')
  }
  onSubmit(){
    alert(JSON.stringify(this.createUser.value));
  }

  getModifiers(){
    this.service.getDataFromAPI().subscribe( data => {
      this.modifierData = data["modifiers"];
    });
  }
  getCategories(){
    this.service.getDataFromAPI().subscribe( data => {
      this.categoryData = data["categories"];
    });
  }
}
