import { ActionReducerMap } from '@ngrx/store';

import * as fromCategories from '../categories/store/categories.reducer';
import * as fromProducts from '../products/store/products.reducer';

export interface AppState{
  categories: fromCategories.State;
  products: fromProducts.State;
}

export const appReducer: ActionReducerMap<AppState>={
  categories: fromCategories.categoriesReducer,
  products: fromProducts.productsReducer,
} 