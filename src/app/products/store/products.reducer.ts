import { Product } from 'src/app/shared/product.model';
import * as ProductActions from './products.actions';

export interface State {
  products: Product[];
}

const inititalState: State = {
  products: [
    new Product(
      'Galaxy S20 Ultra',
      95000,
      'https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/j/z/b/samsung-galaxy-s20-ultra-sm-g988bzapinu-original-imafpfkb6mkgyegk.jpeg?q=70',
      '1'
    ),
    new Product(
      'Apple iPhone 11 Pro (256GB) - Black',
      120000,
      'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70',
      '1'
    ),
    new Product(
      'Sony WH-1000XM3 headphone',
      20000,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcEJuSM87YdWNsOo3h2aEXOy_Ux-u4O_Xnub9qOIho0Uwnirj-3DezTKzDaFEBCOdFiQXA3xIB&usqp=CAc',
      '3'
    ),
    new Product(
      'Sony Bravia 163 cm (65 inches) 4K Ultra HD Android LED TV KD-65X9500G (Black)',
      160000,
      'https://www.amazon.in/images/I/91cxr2WrpCL._SL1500_.jpg',
      '2'
    ),
  ],
};

export function productsReducer(
  state: State = inititalState,
  action: ProductActions.ProductActions
) {
  switch (action.type) {
    default:
      return state;
  }
}
