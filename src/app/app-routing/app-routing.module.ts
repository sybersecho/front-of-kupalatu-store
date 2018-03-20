import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from '../admin/products/components/product-list/product-list.component';
import { ProductComponent } from '../admin/products/components/product-list/product/product.component';
import { SearchInlineComponent } from '../admin/products/components/product-list/search-inline/search-inline.component';
import { DashboardComponent } from '../content/dashboard/dashboard/dashboard.component';
import { SupplierListComponent } from '../admin/suppliers/components/supplier-list/supplier-list.component';
import { SearchComponent } from '../admin/users/components/user-list/search-inline/search.component';
import { UserListComponent } from '../admin/users/components/user-list/user-list.component';
import { UserComponent } from '../admin/users/components/user-list/user/user.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../services/auth-guard.service';

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
