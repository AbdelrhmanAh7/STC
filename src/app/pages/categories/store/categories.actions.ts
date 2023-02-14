import { createAction, props } from '@ngrx/store';
import { IGetCategories } from '../interface/IGetCategories';
import { IGetProductsList } from '../../products/interface/IGetProductsList';

export enum categoryActionEnum {
  //* GET CATEGORY  ACTIONS ENUM */
  GET_CATEGORY = '[CATEGORY] GET CATEGORY',
  GET_CATEGORY_SUCCESS = '[CATEGORY] GET CATEGORY  SUCCESS',
  GET_CATEGORY_FAIL = '[CATEGORY] GET CATEGORY FAIL',
  //* GET CATEGORY  ACTIONS ENUM */
  GET_CATEGORY_PRODUCTS = '[CATEGORY] GET CATEGORY PRODUCTS',
  GET_CATEGORY_PRODUCTS_SUCCESS = '[CATEGORY] GET CATEGORY PRODUCTS SUCCESS',
  GET_CATEGORY_PRODUCTS_FAIL = '[CATEGORY] GET CATEGORY PRODUCTS FAIL',
  //* GET CATEGORIES  ACTIONS ENUM */
  GET_CATEGORIES = '[CATEGORY] GET CATEGORIES',
  GET_CATEGORIES_SUCCESS = '[CATEGORY] GET CATEGORIES  SUCCESS',
  GET_CATEGORIES_FAIL = '[CATEGORY] GET CATEGORIES FAIL',
  //* RESET ACTION*/
  RESET = '[CATEGORY] RESET CATEGORY',
  RESET_ACTIONS = '[CATEGORY] RESET CATEGORY ACTIONS',
}

//* GET CATEGORY  ACTIONS ENUM */
export const GetCategory = createAction(
  categoryActionEnum.GET_CATEGORY,
  props<{ searchKeyword: string }>()
);
export const GetCategorySuccess = createAction(
  categoryActionEnum.GET_CATEGORY_SUCCESS,
  props<{ category: IGetCategories }>()
);
export const GetCategoryFail = createAction(
  categoryActionEnum.GET_CATEGORY_FAIL
);
//* GET CATEGORY  ACTIONS ENUM */
export const GetCategoryProducts = createAction(
  categoryActionEnum.GET_CATEGORY_PRODUCTS,
  props<{ categoryName: string }>()
);
export const GetCategoryProductsSuccess = createAction(
  categoryActionEnum.GET_CATEGORY_PRODUCTS_SUCCESS,
  props<{ products: IGetProductsList[] }>()
);
export const GetCategoryProductsFail = createAction(
  categoryActionEnum.GET_CATEGORY_PRODUCTS_FAIL
);
//* GET CATEGORIES ACTIONS ENUM */
export const GetCategories = createAction(categoryActionEnum.GET_CATEGORIES);
export const GetCategoriesSuccess = createAction(
  categoryActionEnum.GET_CATEGORIES_SUCCESS,
  props<{ categoryList: string[] }>()
);
export const GetCategoriesFail = createAction(
  categoryActionEnum.GET_CATEGORIES_FAIL
);

export const ResetToDefault = createAction(categoryActionEnum.RESET);
export const ResetToActions = createAction(categoryActionEnum.RESET_ACTIONS);
