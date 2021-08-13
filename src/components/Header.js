import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  return (
    <Navbar className="w-100" bg="light">
      <Container>
        <NavLink
          style={{
            color: "black",
            fontSize: "1.5rem",
            textDecoration: "none",
          }} //May be wrong
          to="/"
        >
          Picture desk
        </NavLink>
        <Nav>
          <Button style={{ marginLeft: 20 }} variant="outline-dark">
            Log Out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default Header;
