import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../content/users/user-list/user/user.component';
import { SearchComponent } from '../content/users/user-list/search/search.component';
import { UserListComponent } from '../content/users/user-list/user-list.component';
import { ProductListComponent } from '../content/products/product-list/product-list.component';
import { SupplierListComponent } from '../content/suppliers/supplier-list/supplier-list.component';
import { DashboardComponent } from '../content/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductComponent } from '../content/products/product-list/product/product.component';

import { AuthGuard } from '../services/auth-guard.service';
import { SearchInlineComponent } from '../content/products/product-list/search-inline/search-inline.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductListComponent,
    children: [
      {path: '', component: SearchInlineComponent},
      {path: 'new', component: ProductComponent},
      {path: ':id', component: ProductComponent}
    ]},
  {path: 'suppliers', component: SupplierListComponent},
  {path: 'users',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: UserListComponent,
    children: [
      {path: '', component: SearchComponent},
      {path: ':id', component: UserComponent},
      {path: 'new', component: UserComponent}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
