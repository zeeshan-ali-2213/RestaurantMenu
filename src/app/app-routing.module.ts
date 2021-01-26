import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AllmenuComponent } from './menu/allmenu/allmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'', component: AllmenuComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'menu', loadChildren: () =>import('./menu/menu.module')
  .then(mod => mod.MenuModule)
}
]
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule
  ]
})
export class AppRoutingModule { }
