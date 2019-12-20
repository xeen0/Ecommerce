import { cartActionType } from "./cart.types";
import { addItems, removeCartItem, removeItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionType.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItems(state.cartItems, action.payload)
      };
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload)
      };
    case cartActionType.DELETE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      };

    case cartActionType.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};
