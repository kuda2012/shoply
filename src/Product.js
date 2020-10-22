import React from "react";
import "./Product.css";
import items from "./data";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
const Product = ({ details, index = 1 }) => {
  const dispatch = useDispatch();
  const { products } = items;
  let { id } = useParams();
  let uniqueDetails;
  if (id) {
    details = { ...products[id], id };
    uniqueDetails = <div>{details.description}</div>;
  }
  const addCartItem = (details) => {
    dispatch(addToCart(details));
  };
  const removeCartItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="Product">
      <Link to={`/products/${details.id}`}>
        <h6>{details.name}</h6>
        <img
          className="Product-img"
          src={details.image_url}
          alt={`pic${index}`}
        />
        <h6>${details.price}</h6>
      </Link>
      {uniqueDetails}
      <div className="Product-cart">
        <button
          className="btn btn-danger"
          onClick={() => removeCartItem(details.id)}
        >
          Remove From Cart
        </button>
        <button
          className="btn btn-success"
          onClick={() => addCartItem(details)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
