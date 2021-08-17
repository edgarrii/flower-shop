import { Form, FormLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RegistrationForm = ({
  setLoginError,
  formValid,
  passHandler,
  loginHandler,
  blurHandler,
  loginError,
  loginDirty,
  passError,
  passDirty,
  history,
  login,
  password,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("users")) || [];
    console.log(data.some((user) => user.login === login));
    if (!data.some((user) => user.login === login)) {
      localStorage.setItem(
        "users",
        JSON.stringify([...data, { login, password }])
      );
      alert("Account was successfully registered");
      history.push(LOGIN_ROUTE);
    } else setLoginError("This login is already exist");
  };

  return (
    <Card style={{ width: 600 }} className="p-5 bg-light">
      <h2 className="m-auto mb-3">Registration</h2>
      <Form onSubmit={onSubmit} className="d-flex flex-column">
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
          onBlur={(e) => blurHandler(e)}
          type="password"
          value={password}
          className="mt-2"
          placeholder="Enter your password"
          onChange={(e) => passHandler(e)}
        />
        <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
          <div>
            Already have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
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
};

export default RegistrationForm;
