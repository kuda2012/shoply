import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  const addCartItem = (details) => {
    dispatch(addToCart(details));
  };
  const removeCartItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="Product">
      <h6>{product[0].name}</h6>
      <img className="Product-img" src={product[0].image_url} alt={`pic1`} />
      <h6>${product[0].price}</h6>

      <div>Quantity: {product.length}</div>
      <div className="Product-cart">
        <button
          className="btn btn-danger"
          onClick={() => {
            removeCartItem(product[0].id);
          }}
        >
          -
        </button>
        <button
          className="btn btn-success"
          onClick={() => addCartItem(product[0])}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
