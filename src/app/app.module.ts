import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductListComponent } from './admin/products/components/product-list/product-list.component';
import { ProductComponent } from './admin/products/components/product-list/product/product.component';
import {
  ProductFilterComponent,
} from './admin/products/components/product-list/search-inline/product-filter/product-filter.component';
import {
  ProductResultComponent,
} from './admin/products/components/product-list/search-inline/product-result/product-result.component';
import { SearchInlineComponent } from './admin/products/components/product-list/search-inline/search-inline.component';
import { SupplierListComponent } from './admin/suppliers/components/supplier-list/supplier-list.component';
import {
  SearchUserFormComponent,
} from './admin/users/components/user-list/search-user-inline/search-user-form/search-user-form.component';
import {
  SearchUserInlineComponent,
} from './admin/users/components/user-list/search-user-inline/search-user-inline.component';
import {
  SearchUserResultComponent,
} from './admin/users/components/user-list/search-user-inline/search-user-result/search-user-result.component';
import { UserFormComponent } from './admin/users/components/user-list/user-form/user-form.component';
import { UserListComponent } from './admin/users/components/user-list/user-list.component';
import { UsersService } from './admin/users/services/users.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './content/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    SidebarComponent,
    SupplierListComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SearchInlineComponent,
    ProductFilterComponent,
    ProductResultComponent,
    UserListComponent,
    UserFormComponent,
    SearchUserInlineComponent,
    SearchUserFormComponent,
    SearchUserResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
