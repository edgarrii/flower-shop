import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { LOGIN_ROUTE, USER_ROUTE } from "../utils/consts";
import { UserContext } from "../store/UserContext";

export default function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      <Switch>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        {isAuth ? <Redirect to={USER_ROUTE} /> : <Redirect to={LOGIN_ROUTE} />}
      </Switch>
    </UserContext.Provider>
  );
}
