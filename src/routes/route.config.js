import React, { lazy } from "react";

//Import Pages
const LogIn = lazy(() => import("../pages/LogIn"));
const SignIn = lazy(() => import("../pages/SignIn"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export default [
  {
    name: "login",
    path: "/login",
    component: LogIn,
    exact: true,
    authentication: false,
  },
  {
    name: "signin",
    path: "/signin",
    component: SignIn,
    exact: true,
    authentication: false,
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    authentication: true,
  },
  {
    name: "default",
    path: ["/", "/index.html"],
    default: true,
  },
];
