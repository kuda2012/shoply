import rootReducer from "./reducers/rootReducer";
import { ADD_CART, REMOVE_CART } from "./actionTypes";

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
    const { cart } = rootReducer(
      { cart: [] },
      { type: ADD_CART, payload: item }
    );
    expect(cart.length).toEqual(1);
    expect(cart[0]).toEqual(item);
    let response = rootReducer(
      { cart: [] },
      { type: REMOVE_CART, payload: item.id }
    );
    expect(response.cart.length).toEqual(0);
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
      { cart: [] },
      { type: ADD_CART, payload: item }
    );
    expect(cart.length).toEqual(1);
    expect(cart[0]).toEqual(item);
    //chaining cart into doubleUp
    const doubleUp = rootReducer(
      { cart: cart },
      { type: ADD_CART, payload: item }
    ).cart;
    expect(doubleUp.length).toEqual(2);
    expect(doubleUp[1]).toEqual(item);
    let response = rootReducer(
      { cart: doubleUp },
      { type: REMOVE_CART, payload: item.id }
    );
    expect(response.cart.length).toEqual(1);
  });
});
