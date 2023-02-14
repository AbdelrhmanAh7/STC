import { createAction, props } from '@ngrx/store';
import { IGetCategories } from '../interface/IGetCategories';

export enum categoryActionEnum {
  //* GET CATEGORY  ACTIONS ENUM */
  GET_CATEGORY = '[CATEGORY] GET CATEGORY',
  GET_CATEGORY_SUCCESS = '[CATEGORY] GET CATEGORY  SUCCESS',
  GET_CATEGORY_FAIL = '[CATEGORY] GET CATEGORY FAIL',
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
