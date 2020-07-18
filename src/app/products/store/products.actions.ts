import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/product.model';

export const SELECT_PRODUCT = '[Product] Select Product';

export class SelectProduct implements Action {
  readonly type = SELECT_PRODUCT;
  constructor(public payload: Product) {}
}

export type ProductActions = SelectProduct;
