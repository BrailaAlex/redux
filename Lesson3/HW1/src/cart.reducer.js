import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initValue = {
  cart: {
    products: [],
  },
};

export const cartReducer = (state = initValue, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      debugger;
      return {
        ...state,
        cart: {
          products: [...state.cart.products, action.payload.product],
        },
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: {
          products: state.cart.products.filter(
            (product) => product.id !== action.payload.id
          ),
        },
      };
    default:
      return state;
  }
};
