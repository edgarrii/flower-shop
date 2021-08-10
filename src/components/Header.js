import React, { useContext } from "react";
import {
  Form,
  Button,
  FormControl,
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, VISITOR_ROUTE } from "../utils/consts";
import { NavLink, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  const { user } = useContext(Context);
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
          to={VISITOR_ROUTE}
        >
          Flower Shop
        </NavLink>
        <Form className="d-flex m-auto">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
        {user.isAuth ? (
          <Nav>
            <Button
              onClick={() => history.push(ADMIN_ROUTE)}
              variant="outline-dark"
            >
              Edit
            </Button>

            <Button
              style={{ marginLeft: 20 }}
              onClick={() => history.push(LOGIN_ROUTE)}
              variant="outline-dark"
            >
              Log Out
            </Button>
          </Nav>
        ) : (
          <Button style={{ marginLeft: 20 }} variant="outline-dark">
            Authorize
          </Button>
        )}
      </Container>
    </Navbar>
  );
});

export default Header;
