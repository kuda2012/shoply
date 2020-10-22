import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route exact path="/products/:id">
        <Product />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
