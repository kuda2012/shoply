import ADD_CART from "../ReducerLogic/ADD_CART";
import REMOVE_CART from "../ReducerLogic/REMOVE_CART";
const INITIAL_STATE = { cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CART":
      return ADD_CART(state, action);
    case "REMOVE_CART":
      return REMOVE_CART(state, action);
    default:
      return state;
  }
}

export default rootReducer;
