import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { v4 as uuid } from "uuid";
import "./Cart.css";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const history = useHistory();
  if (Object.keys(cart).length === 0) {
    history.push("/");
  }
  let totalLength = 0;
  let totalPrice = 0;
  for (let key in cart) {
    totalLength = cart[key].length + totalLength;
    for (let key2 in cart[key]) {
      totalPrice = cart[key][key2].price + totalPrice;
    }
  }
  totalPrice = totalPrice.toFixed(2);
  const createCart = () => {
    return Object.values(cart).map((product) => {
      return <CartProduct key={uuid()} product={product} />;
    });
  };
  return (
    <div>
      <h1>Cart </h1>
      <div className="Cart">{createCart()}</div>
      <div>Total Quantity: {totalLength}</div>
      <div>Total Price: {totalPrice}</div>
    </div>
  );
};

export default Cart;
