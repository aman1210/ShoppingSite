import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  name: string;
  product: Product;
  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['productName']);
      this.name = params['productName'];
    });
    this.store
      .select('products')
      .pipe(map((productState) => productState.products))
      .subscribe((products: Product[]) => {
        this.product = products.find(
          (product, index) => product.name == this.name
        );
      });
  }
}
