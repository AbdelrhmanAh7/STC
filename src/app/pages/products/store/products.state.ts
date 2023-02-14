import { IGetProductsList } from '../interface/IGetProductsList';

export interface IProductListState {
  createProductSuccessfully: boolean;
  updateProductSuccessfully: boolean;
  deleteProductSuccessfully: boolean;
  productsList: IGetProductsList[] | null;
  product: IGetProductsList | null;
}

export const initialProductState: IProductListState = {
  createProductSuccessfully: false,
  updateProductSuccessfully: false,
  deleteProductSuccessfully: false,
  productsList: null,
  product: null,
};
