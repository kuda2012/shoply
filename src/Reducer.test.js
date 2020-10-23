import rootReducer from "./reducers/rootReducer";
import { ADD_CART, REMOVE_CART } from "./actionTypes";
import { addToCart, removeFromCart } from "./actions";

describe("test reducer", () => {
  it("should add an item and remove it", () => {
    const item = {
      description:
        "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      id: "47314fa1-ae56-4eae-80be-af6691145951",
      image_url:
        "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
      name: "tv",
      price: 219.99,
    };
    const { cart } = rootReducer({ cart: {} }, addToCart(item));
    expect(cart[item.id].length).toEqual(1);
    expect(cart[item.id][0]).toEqual(item);
    //chain cart into rootReducer so it can be removed
    let response = rootReducer({ cart: cart }, removeFromCart(item.id));
    expect(response.cart).toEqual({});
  });
  it("should add the same item twice and then with one click only remove one of them even though they share the same ID", () => {
    const item = {
      description:
        "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      id: "47314fa1-ae56-4eae-80be-af6691145951",
      image_url:
        "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
      name: "tv",
      price: 219.99,
    };
    const { cart } = rootReducer(
      { cart: {} },
      { type: ADD_CART, payload: item }
    );
    expect(cart[item.id].length).toEqual(1);
    expect(cart[item.id][0]).toEqual(item);
    //chaining cart into doubleUp
    const doubleUp = rootReducer(
      { cart: cart },
      { type: ADD_CART, payload: item }
    ).cart;
    expect(doubleUp[item.id].length).toEqual(2);
    expect(doubleUp[item.id][0]).toEqual(doubleUp[item.id][1]);
    let response = rootReducer(
      { cart: doubleUp },
      { type: REMOVE_CART, payload: item.id }
    );
    expect(response.cart[item.id].length).toEqual(1);
  });
});
