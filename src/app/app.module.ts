import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './content/products/product-list/product/product.component';
import { ProductListComponent } from './content/products/product-list/product-list.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { SupplierListComponent } from './content/suppliers/supplier-list/supplier-list.component';
import { DashboardComponent } from './content/dashboard/dashboard/dashboard.component';
import { UserListComponent } from './content/users/user-list/user-list.component';
import { UserComponent } from './content/users/user-list/user/user.component';
import { SearchUsersComponent } from './content/users/user-list/search/search-users/search-users.component';
import { SearchResultComponent } from './content/users/user-list/search/search-result/search-result.component';
import { SearchComponent } from './content/users/user-list/search/search.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UsersService } from './content/users/services/users.service';
import { SearchInlineComponent } from './content/products/product-list/search-inline/search-inline.component';
import { ProductFilterComponent } from './content/products/product-list/search-inline/product-filter/product-filter.component';
import { ProductResultComponent } from './content/products/product-list/search-inline/product-result/product-result.component';


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
