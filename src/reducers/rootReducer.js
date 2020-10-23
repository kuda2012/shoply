const INITIAL_STATE = { cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CART":
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
      return updatedCart;
    case "REMOVE_CART":
      if (state.cart[action.payload]) {
        if (state.cart[action.payload].length === 1) {
          delete state.cart[action.payload];
        } else {
          state.cart[action.payload] = state.cart[action.payload].slice(1);
        }
      }
      return { ...state, cart: state.cart };
    default:
      return state;
  }
}

export default rootReducer;
