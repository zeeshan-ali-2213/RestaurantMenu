import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCellComponent } from 'material-dynamic-table/lib/table-cell/table-cell.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AllmenuComponent } from './allmenu/allmenu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';


const routes: Routes = [
  { path: 'Products', component: AllmenuComponent },
  { path: 'Product/:id', component: ViewMenuComponent },
  { path: 'AddProducts', component: AddMenuComponent },
  { path: 'EditProduct/:id', component: AddMenuComponent },
  { path: 'Categories/:id', component: AllmenuComponent },
  { path: 'Products/:id', component: AllmenuComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
