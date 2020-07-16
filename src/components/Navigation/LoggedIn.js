import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <NavbarItem path="/import" linkText="Import Photos" />
      <NavbarItem path={`/gallery/${user.name}`} linkText="My Gallery" />
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.name}</Nav.Item>
      <Button variant="dark" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
