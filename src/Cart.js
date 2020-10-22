import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
      <div></div>
    </div>
  );
};

export default Cart;
