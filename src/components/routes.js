import { LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from "../utils/consts";
import Auth from "../pages/Auth";
import User from "../pages/User";

export const authRoutes = [
  {
    path: USER_ROUTE,
    Component: User,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
