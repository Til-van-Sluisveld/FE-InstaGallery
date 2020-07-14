import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { selectShoppingCart } from "../../store/shoppingCart/selectors";

export default function Navigation() {
  const token = useSelector(selectToken);
  const cart = useSelector(selectShoppingCart);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        InstaGallery
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/explore" linkText="Explore" />
          {loginLogoutControls}
          <NavbarItem path="/cart" linkText={`Cart(${cart.length})`} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
