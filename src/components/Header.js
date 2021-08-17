import React from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, USER_ROUTE } from "../utils/consts";

const Header = () => {
  return (
    <Navbar className="w-100" bg="light">
      <Container>
        <NavLink
          style={{
            color: "black",
            fontSize: "1.5rem",
            textDecoration: "none",
          }} //May be wrong
          to={USER_ROUTE}
        >
          Picture desk
        </NavLink>
        <NavLink to={LOGIN_ROUTE}>
          <Button style={{ marginLeft: 20 }} variant="outline-dark">
            Log Out
          </Button>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default Header;
