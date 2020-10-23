import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { cart } = useSelector((state) => state);
  let totalLength = 0;
  let totalPrice = 0;
  for (let key in cart) {
    totalLength = cart[key].length + totalLength;
    for (let key2 in cart[key]) {
      totalPrice = cart[key][key2].price + totalPrice;
    }
  }
  totalPrice = totalPrice.toFixed(2);
  return (
    <div>
      <Navbar expand="md" color="warning">
        <NavLink to="/" className="navbar-brand">
          Shoply
        </NavLink>
        <Nav className="ml-auto">
          <NavItem>
            {totalLength} items (${totalPrice})
          </NavItem>
          <NavItem>
            <NavLink to={totalLength === 0 ? "/" : "/cart"}> See Cart </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
