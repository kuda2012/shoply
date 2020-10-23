import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { v4 as uuid } from "uuid";
import "./Cart.css";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const { cart, price, quantity } = useSelector((state) => state);
  const history = useHistory();
  if (Object.keys(cart).length === 0) {
    history.push("/");
  }
  const createCart = () => {
    return Object.values(cart).map((product) => {
      return <CartProduct key={uuid()} product={product} />;
    });
  };
  return (
    <div>
      <h1>Cart </h1>
      <div className="Cart">{createCart()}</div>
      <div>Total Quantity: {quantity}</div>
      <div>Total Price: ${price ? price : 0}</div>
    </div>
  );
};

export default Cart;
