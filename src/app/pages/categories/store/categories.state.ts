import { IGetCategories } from '../interface/IGetCategories';

export interface ICategoryListState {
  categoryList: string[] | null;
  category: IGetCategories | null;
}

export const initialCategoryState: ICategoryListState = {
  categoryList: null,
  category: null,
};
