import { cartActionType } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN
});

export const addItems = item => ({
  type: cartActionType.ADD_ITEMS,
  payload: item
});

export const removeCartItem = item => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: cartActionType.DELETE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: cartActionType.CLEAR_CART
});
