import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  // const { cart } = useSelector((state) => state);
  const cart = [];
  return (
    <div>
      <Navbar expand="md" color="warning">
        <NavLink to="/" className="navbar-brand">
          Shoply
        </NavLink>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/cart">
              Cart {cart.length > 0 ? `(${cart.length})` : ""}
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
