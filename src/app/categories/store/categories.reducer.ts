import { Category } from '../../shared/category.model';

export interface State {
  categories: Category[];
}

const initialState: State = {
  categories: [
    new Category('1', 'Mobiles', '../../assets/mobile.png', '#8aff30'),
    new Category('2', 'TV & Appliances', '../../assets/tv.png', '#2f7bf5'),
  ],
};

export function categoriesReducer(state: State = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
