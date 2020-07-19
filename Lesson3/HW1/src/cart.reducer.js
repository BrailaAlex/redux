import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initValue = {
  products: [],
};

export const cartReducer = (state = initValue, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
