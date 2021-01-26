import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { AllmenuComponent } from './allmenu/allmenu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { DynamicTableModule } from 'material-dynamic-table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { CustomViewComponent } from './custom-view/custom-view.component';

@NgModule({
  declarations: [AllmenuComponent, ViewMenuComponent, AddMenuComponent, NavbarComponent, SidebarComponent, MenuTableComponent, CustomViewComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSelectModule,
    DynamicTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule
  ],
  exports : [
    ViewMenuComponent,
    NavbarComponent,
    SidebarComponent,
    
  ]
})
export class MenuModule { }
