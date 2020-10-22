import React from "react";
import items from "./data";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const { products } = items;
  return (
    <>
      <h1>Products</h1>
      <div className="Products">
        {Object.entries(products).map((item, i) => {
          item[1].id = item[0];
          return <Product key={item[1].id} details={item[1]} index={i} />;
        })}
      </div>
    </>
  );
};

export default Products;
