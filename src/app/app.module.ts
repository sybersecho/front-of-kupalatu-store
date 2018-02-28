import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './content/products/product-list/product/product.component';
import { ProductListComponent } from './content/products/product-list/product-list.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { SupplierListComponent } from './content/suppliers/supplier-list/supplier-list.component';
import { DashboardComponent } from './content/dashboard/dashboard/dashboard.component';
import { UsersComponent } from './content/users/users.component';

const appRoutes: Routes=[
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'suppliers', component: SupplierListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    SidebarComponent,
    SupplierListComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
