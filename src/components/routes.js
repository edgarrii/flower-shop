import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  VISITOR_ROUTE,
} from '../utils/consts'
import Admin from '../pages/Admin'
import Auth from '../pages/Auth'
import Visitor from '../pages/Visitor'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: VISITOR_ROUTE,
    Component: Visitor,
  },
]
