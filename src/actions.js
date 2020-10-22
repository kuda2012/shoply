import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (details) => {
  return { type: ADD_CART, payload: details };
};
export const removeFromCart = (id) => {
  return { type: REMOVE_CART, payload: id };
};
