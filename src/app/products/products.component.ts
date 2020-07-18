import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { Product } from '../shared/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  id: string;
  products: Product[];
  category: string;
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.id = params['id'];
    });
    this.store
      .select('products')
      .pipe(map((productsState) => productsState.products))
      .subscribe((products: Product[]) => {
        this.products = products.filter((product, index) => {
          if (product.categoryId == this.id) {
            return true;
          }
          return false;
        });
      });
    this.store
      .select('categories')
      .pipe(map((categoryState) => categoryState.categories))
      .subscribe((categories: Category[]) => {
        this.category = categories.find(
          (category, index) => category.id == this.id
        ).title;
      });
  }
}
