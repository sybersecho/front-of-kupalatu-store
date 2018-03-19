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
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './content/dashboard/dashboard/dashboard.component';
import { UsersService } from './content/users/services/users.service';
import { SearchResultComponent } from './content/users/user-list/search/search-result/search-result.component';
import { SearchUsersComponent } from './content/users/user-list/search/search-users/search-users.component';
import { SearchComponent } from './content/users/user-list/search/search.component';
import { UserListComponent } from './content/users/user-list/user-list.component';
import { UserComponent } from './content/users/user-list/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { SupplierListComponent } from './admin/suppliers/components/supplier-list/supplier-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    SidebarComponent,
    SupplierListComponent,
    DashboardComponent,
    UserListComponent,
    UserComponent,
    SearchUsersComponent,
    SearchResultComponent,
    SearchComponent,
    PageNotFoundComponent,
    SearchInlineComponent,
    ProductFilterComponent,
    ProductResultComponent
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
