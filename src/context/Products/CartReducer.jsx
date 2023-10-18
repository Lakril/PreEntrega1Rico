import { GET_PRODUCT, GET_DETAILS_PRODUCT, ADD_PRODUCT } from '../types';

export const CartReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case GET_DETAILS_PRODUCT:
      return {
        ...state,
        selectProduc: payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: payload,
      };
    default:
      return state;
  }
};

export default CartReducer;
