import calculateQuantityAndPrice from "./calculateQuantityAndPrice";

function REMOVE_CART(state, action) {
  if (state.cart[action.payload]) {
    if (state.cart[action.payload].length === 1) {
      delete state.cart[action.payload];
    } else {
      state.cart[action.payload] = state.cart[action.payload].slice(1);
    }
  }
  const quantityPrice = calculateQuantityAndPrice(state.cart);
  state.quantity = quantityPrice[0];
  state.price = quantityPrice[1];
  return { ...state, cart: state.cart };
}
export default REMOVE_CART;
