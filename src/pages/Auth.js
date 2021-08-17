import { Container } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import React, { useEffect, useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";

const Auth = () => {
  const location = useLocation();
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);
  const [loginError, setLoginError] = useState("Login can't be empty");
  const [passError, setPassError] = useState("Password can't be empty");
  const [formValid, setFormValid] = useState(false);
  const isLogin = location.pathname === LOGIN_ROUTE;

  useEffect(() => {
    if (loginError || passError) {
      setFormValid(false);
    } else setFormValid(true);
  }, [loginError, passError]);

  const blurHandler = (e) => {
    switch (e.target.type) {
      case "text":
        setLoginDirty(true);
        break;
      case "password":
        setPassDirty(true);
        break;
    }
  };

  const loginHandler = (e) => {
    setLogin(e.target.value);
    const check = /^[a-zA-Z0-9]+$/;
    if (!check.test(String(e.target.value).toLowerCase())) {
      setLoginError("Invalid login");
    } else setLoginError("");
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 16) {
      setPassError("Password must be between 4 and 16 characters");
      if (!e.target.value) {
        setPassError("Password can't be empty");
      }
    } else setPassError("");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      {isLogin ? (
        <LoginForm
          formValid={formValid}
          passHandler={passHandler}
          loginHandler={loginHandler}
          blurHandler={blurHandler}
          loginDirty={loginDirty}
          passDirty={passDirty}
          passError={passError}
          loginError={loginError}
          history={history}
          login={login}
          password={password}
        />
      ) : (
        <RegistrationForm
          setLoginError={setLoginError}
          formValid={formValid}
          passHandler={passHandler}
          loginHandler={loginHandler}
          blurHandler={blurHandler}
          loginDirty={loginDirty}
          passDirty={passDirty}
          passError={passError}
          loginError={loginError}
          history={history}
          login={login}
          password={password}
        />
      )}
    </Container>
  );
};

export default Auth;
