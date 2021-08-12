import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { LOGIN_ROUTE, USER_ROUTE } from "../utils/consts";
import { NavLink, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const history = useHistory();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink
          style={{
            color: "black",
            fontSize: "1.5rem",
            textDecoration: "none",
          }}
          to={USER_ROUTE}
        >
          Picture desk
        </NavLink>
        <Nav>
          <Button
            style={{ marginLeft: 20 }}
            onClick={() => history.push(LOGIN_ROUTE)}
            variant="outline-dark"
          >
            Log Out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default Header;
