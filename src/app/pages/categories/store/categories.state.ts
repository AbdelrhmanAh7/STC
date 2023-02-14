import { IGetCategories } from '../interface/IGetCategories';
import { IGetProductsList } from '../../products/interface/IGetProductsList';

export interface ICategoryListState {
  categoryList: string[] | null;
  category: IGetCategories | null;
  productsCategory: IGetProductsList[] | null;
}

export const initialCategoryState: ICategoryListState = {
  categoryList: null,
  category: null,
  productsCategory: null,
};
