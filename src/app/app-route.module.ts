import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomescreenComponent } from './homescreen/homescreen.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomescreenComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'category/:id',
    component: ProductsComponent,
  },
  { path: 'product/:productName', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoute {}
