import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { Observable } from 'rxjs';
import { Product } from '../shared/product.model';
import { Category } from '../shared/category.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('categories').pipe(map((categoryState)=>categoryState.categories)).subscribe((categories: Category[])=>{
      this.categories = categories;
    });
  }

}
