import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { price, quantity } = useSelector((state) => state);
  return (
    <div>
      <Navbar expand="md" color="warning">
        <NavLink to="/" className="navbar-brand">
          Shoply
        </NavLink>
        <Nav className="ml-auto">
          <NavItem>
            {quantity} items (${price ? price : 0})
          </NavItem>
          <NavItem>
            <NavLink to={quantity === 0 ? "/" : "/cart"}> See Cart </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
