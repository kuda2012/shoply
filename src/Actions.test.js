import { addToCart, removeFromCart } from "./actions";
import { ADD_CART, REMOVE_CART } from "./actionTypes";
describe("actions", () => {
  it("should addToCart", () => {
    const item = {
      description:
        "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      id: "47314fa1-ae56-4eae-80be-af6691145951",
      image_url:
        "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
      name: "tv",
      price: 219.99,
    };
    const expectedResponse = {
      type: ADD_CART,
      payload: item,
    };
    expect(addToCart(item)).toEqual(expectedResponse);
  });
  it("should removeFromCart", () => {
    const item = {
      description:
        "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      id: "47314fa1-ae56-4eae-80be-af6691145951",
      image_url:
        "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue",
      name: "tv",
      price: 219.99,
    };
    const expectedResponse = {
      type: ADD_CART,
      payload: item,
    };
    expect(addToCart(item)).toEqual(expectedResponse);
    const id = {
      id: "47314fa1-ae56-4eae-80be-af6691145951",
    };
    const expectedResponse2 = {
      type: REMOVE_CART,
      payload: id,
    };
    expect(removeFromCart(id)).toEqual(expectedResponse2);
  });
});
