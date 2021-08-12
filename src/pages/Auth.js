import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import React from "react";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5 bg-light">
        <h2 className="m-auto mb-3">
          {isLogin ? "Authorization" : "Registration"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Control
            type="email"
            className="mt-2"
            placeholder="Enter your email"
          />
          <Form.Control
            type="password"
            className="mt-2"
            placeholder="Enter your password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Don't have an account?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Already have an account?{" "}
                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            )}
            <Button
              style={{ width: 300, marginLeft: 110, marginTop: 20 }}
              variant={"outline-success"}
            >
              Confirm
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
