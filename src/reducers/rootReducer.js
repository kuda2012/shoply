const INITIAL_STATE = { cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CART":
      let holder = [];
      holder.push(action.payload);
      if (state.cart[action.payload.id]) {
        holder.push(...state.cart[action.payload.id]);
      }
      // console.log({ ...state.cart });
      // console.log({
      //   ...state.cart,
      //   cart: {
      //     [action.payload.id]: holder,
      //   },
      // });
      // return {
      //   ...state,
      //   cart: {
      //     [action.payload.id]: holder,
      //   },
      // };
      let answer;
      if (Object.keys(state.cart).length > 0) {
        for (let key in state.cart) {
          if (key != action.payload.id) {
            answer = {
              cart: {
                ...state.card,
                [action.payload.id]: holder,
              },
            };
            console.log({
              [action.payload.id]: holder,
              ...state.card,
            });
            break;
          } else {
            console.log("dont go here");
            answer = {
              cart: {
                [action.payload.id]: holder,
              },
            };
          }
        }
      } else {
        answer = {
          cart: {
            [action.payload.id]: holder,
          },
        };
      }

      console.log(answer);
      return answer;
    case "REMOVE_CART":
      let gotOne = false;
      let newCart = [];
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id == action.payload && !gotOne) {
          gotOne = true;
          newCart = [...state.cart.slice(0, i), ...state.cart.slice(i + 1)];
          break;
        }
      }
      newCart = !gotOne ? [...state.cart] : newCart;

      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}

export default rootReducer;
