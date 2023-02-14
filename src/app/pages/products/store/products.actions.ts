import { createAction, props } from '@ngrx/store';
import { IGetProductsList } from '../interface/IGetProductsList';

export enum productActionEnum {
  //* CREATE PRODUCT  ACTIONS ENUM */
  CREATE_PRODUCT = '[PRODUCT] CREATE PRODUCT',
  CREATE_PRODUCT_SUCCESS = '[PRODUCT] CREATE PRODUCT  SUCCESS',
  CREATE_PRODUCT_FAIL = '[PRODUCT] CREATE PRODUCT FAIL',
  //* CREATE PRODUCT  ACTIONS ENUM */
  UPDATE_PRODUCT = '[PRODUCT] UPDATE PRODUCT',
  UPDATE_PRODUCT_SUCCESS = '[PRODUCT] UPDATE PRODUCT  SUCCESS',
  UPDATE_PRODUCT_FAIL = '[PRODUCT] UPDATE PRODUCT FAIL',
  //* DELETE PRODUCT  ACTIONS ENUM */
  DELETE_PRODUCT = '[PRODUCT] DELETE PRODUCT',
  DELETE_PRODUCT_SUCCESS = '[PRODUCT] DELETE PRODUCT  SUCCESS',
  DELETE_PRODUCT_FAIL = '[PRODUCT] DELETE PRODUCT FAIL',
  //* GET PRODUCT  ACTIONS ENUM */
  GET_PRODUCT = '[PRODUCT] GET PRODUCT',
  GET_PRODUCT_SUCCESS = '[PRODUCT] GET PRODUCT  SUCCESS',
  GET_PRODUCT_FAIL = '[PRODUCT] GET PRODUCT FAIL',
  //* GET PRODUCTS  ACTIONS ENUM */
  GET_PRODUCTS = '[PRODUCT] GET PRODUCTS',
  GET_PRODUCTS_SUCCESS = '[PRODUCT] GET PRODUCTS  SUCCESS',
  GET_PRODUCTS_FAIL = '[PRODUCT] GET PRODUCTS FAIL',
  //* RESET ACTION*/
  RESET = '[PRODUCT] RESET PRODUCT',
  RESET_ACTIONS = '[PRODUCT] RESET PRODUCT ACTIONS',
}

//* CREATE PRODUCT  ACTIONS ENUM */
export const CreateProduct = createAction(
  productActionEnum.CREATE_PRODUCT,
  props<{ payload: IGetProductsList }>()
);
export const CreateProductSuccess = createAction(
  productActionEnum.CREATE_PRODUCT_SUCCESS
);
export const CreateProductFail = createAction(
  productActionEnum.CREATE_PRODUCT_FAIL
);
//* UPDATE PRODUCT  ACTIONS ENUM */
export const UpdateProduct = createAction(
  productActionEnum.UPDATE_PRODUCT,
  props<{ id: number; payload: IGetProductsList }>()
);
export const UpdateProductSuccess = createAction(
  productActionEnum.UPDATE_PRODUCT_SUCCESS,
  props<{ productUpdated: IGetProductsList }>()
);
export const UpdateProductFail = createAction(
  productActionEnum.UPDATE_PRODUCT_FAIL
);
//* DELETE PRODUCT  ACTIONS ENUM */
export const DeleteProduct = createAction(
  productActionEnum.DELETE_PRODUCT,
  props<{ id: number }>()
);
export const DeleteProductSuccess = createAction(
  productActionEnum.DELETE_PRODUCT_SUCCESS,
  props<{ id: number }>()
);
export const DeleteProductFail = createAction(
  productActionEnum.DELETE_PRODUCT_FAIL
);
//* GET PRODUCT  ACTIONS ENUM */
export const GetProduct = createAction(
  productActionEnum.GET_PRODUCT,
  props<{ id: number }>()
);
export const GetProductSuccess = createAction(
  productActionEnum.GET_PRODUCT_SUCCESS,
  props<{ products: IGetProductsList }>()
);
export const GetProductFail = createAction(productActionEnum.GET_PRODUCT_FAIL);
//* GET PRODUCTS ACTIONS ENUM */
export const GetProducts = createAction(productActionEnum.GET_PRODUCTS);
export const GetProductsSuccess = createAction(
  productActionEnum.GET_PRODUCTS_SUCCESS,
  props<{ products: IGetProductsList[] }>()
);
export const GetProductsFail = createAction(
  productActionEnum.GET_PRODUCTS_FAIL
);

export const ResetToDefault = createAction(productActionEnum.RESET);
export const ResetToActions = createAction(productActionEnum.RESET_ACTIONS);
