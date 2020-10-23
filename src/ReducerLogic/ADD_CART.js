import calculateQuantityAndPrice from "./calculateQuantityAndPrice";

function ADD_CART(state, action) {
  let productBeingChanged = [];
  productBeingChanged.push(action.payload);
  if (state.cart[action.payload.id]) {
    productBeingChanged.push(...state.cart[action.payload.id]);
  }
  let updatedCart = {};
  if (Object.keys(state.cart).length > 0) {
    for (let key in state.cart) {
      if (key === action.payload.id) {
        updatedCart.cart = {
          [action.payload.id]: productBeingChanged,
        };

        if (Object.keys(state.cart).length > 1) {
          updatedCart.cart = { ...state.cart, ...updatedCart.cart };
        }
      }
    }
    if (Object.keys(updatedCart).length === 0) {
      updatedCart = {
        cart: {
          [action.payload.id]: productBeingChanged,
        },
      };

      updatedCart.cart = { ...updatedCart.cart, ...state.cart };
    }
  } else {
    updatedCart = {
      cart: {
        [action.payload.id]: productBeingChanged,
      },
    };
  }
  const quantityPrice = calculateQuantityAndPrice(updatedCart.cart);
  updatedCart.quantity = quantityPrice[0];
  updatedCart.price = quantityPrice[1];
  return updatedCart;
}

export default ADD_CART;
