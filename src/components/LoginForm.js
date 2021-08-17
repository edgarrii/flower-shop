import React, { useContext } from "react";
import { Form, FormLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { NavLink, useHistory } from "react-router-dom";
import { REGISTRATION_ROUTE, USER_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { observer } from "mobx-react-lite";
import { UserContext } from "../store/UserContext";

const LoginForm = observer(
  ({
    formValid,
    passHandler,
    loginHandler,
    blurHandler,
    loginError,
    loginDirty,
    passError,
    passDirty,
    login,
    password,
  }) => {
    const history = useHistory();
    const { setIsAuth } = useContext(UserContext);

    const onSubmitAuth = (e) => {
      e.preventDefault();
      const data = JSON.parse(localStorage.getItem("users")) || [];
      if (data.some((el) => el.login === login)) {
        data.forEach((el) => {
          if (el.login === login && el.password === password) {
            setIsAuth(true);

            history.push(USER_ROUTE);
          }
        });
      }
    };

    return (
      <Card style={{ width: 600 }} className="p-5 bg-light">
        <h2 className="m-auto mb-3">Authorization</h2>
        <Form onSubmit={onSubmitAuth} className="d-flex flex-column">
          {loginDirty && loginError && (
            <FormLabel style={{ marginBottom: 0, color: "red" }}>
              {loginError}
            </FormLabel>
          )}
          <Form.Control
            type="login"
            value={login}
            className="mt-2"
            placeholder="Enter your login"
            onChange={(e) => loginHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
          {passDirty && passError && (
            <FormLabel style={{ marginTop: 5, marginBottom: 0, color: "red" }}>
              {passError}
            </FormLabel>
          )}
          <Form.Control
            type="password"
            value={password}
            className="mt-2"
            placeholder="Enter your password"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passHandler(e)}
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            <div>
              Don't have an account?{" "}
              <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
            </div>
            <Button
              disabled={!formValid}
              style={{ width: 300, marginLeft: 110, marginTop: 20 }}
              variant={"outline-success"}
              type="submit"
            >
              Confirm
            </Button>
          </Row>
        </Form>
      </Card>
    );
  }
);

export default LoginForm;
